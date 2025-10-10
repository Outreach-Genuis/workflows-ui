import EventEmitter from "events";
import {
  Branches,
  InferDataType,
  RunMetadata,
  InputSchema,
  OutputSchema,
} from "./Schema";
import { Queue, Worker } from "bullmq";
import Redis from "ioredis";
import Bottleneck from "bottleneck";
import { Lead } from "./Lead";
import { addOrUpdateLead } from "../utils/leadUtils";

/**
 * Base class for all workflow nodes.
 */
/**
 * Abstract class representing a node in a workflow.
 *
 * Each workflow node has inputs, outputs, and optional branches.
 * It handles validation of input/output data against schemas and
 * emits events for completed operations or errors.
 *
 * @template Input - Schema defining the structure and validation rules for node input
 * @template Output - Schema defining the structure and validation rules for node output
 * @template BranchesSchema - Optional schema defining possible branches the workflow can take from this node
 * @extends {EventEmitter}
 */
export abstract class WorkflowNode<
  Input extends InputSchema<any>,
  Output extends OutputSchema<any>,
  BranchesSchema extends Branches<any> = {},
> extends EventEmitter {
  abstract id: string;
  abstract name: string;
  abstract description: string;
  abstract inputSchema: Input;
  abstract outputSchema: Output;
  abstract branches: BranchesSchema;
  abstract groups: string[];
  abstract isTriggerNode: boolean;
  ratelimitInfo?: {
    interval: number; // in milliseconds
    maxRequests: number; // number of requests allowed in the interval
  };
  isGlobalTriggerNode: boolean = false;

  protected abstract queueRequest(
    input: InferDataType<Input>,
    runMetadata: RunMetadata,
    emitResponse: typeof this.emitResponse,
  ): Promise<void>;
  protected abstract getBranchIdForOutput(
    output: InferDataType<Output>,
  ): keyof BranchesSchema | null;
  protected abstract unqueueRequest(
    input: InferDataType<Input>,
    runMetadata: RunMetadata,
    emitResponse: typeof this.emitResponse,
  ): Promise<void>;
  // Important: Implement this method if your node provides lead data
  // for integration with CRM systems or lead management tools.
  // This method should extract and return lead information from the output data.
  protected parseLead?(output: InferDataType<Output>): Lead;

  protected getLimiter(metadata: RunMetadata) {
    if (!this.ratelimitInfo) return null;
    return new Bottleneck({
      reservoir: this.ratelimitInfo.maxRequests, // initial number of requests
      reservoirRefreshAmount: this.ratelimitInfo.maxRequests,
      reservoirRefreshInterval: this.ratelimitInfo.interval, // interval to refresh
      id: `${this.id}-${metadata.projectId}`, // Unique ID per node and run

      /* Clustering options */
      datastore: "ioredis", // or "ioredis"
      clearDatastore: false,
      clientOptions: {
        host: process.env.WORKFLOW_REDIS_HOST || "localhost",
        port: parseInt(process.env.WORKFLOW_REDIS_PORT || "6379", 10),
        username: process.env.WORKFLOW_REDIS_USERNAME || undefined, // optional
        password: process.env.WORKFLOW_REDIS_PASSWORD || undefined, // optional
      },
    });
  }

  /**
   * Parses and validates raw input against the input schema.
   * @param rawInput - The raw input object to be parsed and validated.
   * @returns Parsed and validated input.
   * @throws Error if validation fails.
   */
  private parseInput(rawInput: Record<string, any>): InferDataType<Input> {
    const parsedInput: any = {};
    for (const key in this.inputSchema) {
      const field = this.inputSchema[key];
      const rawValue = rawInput[key];
      if (rawValue === undefined || rawValue === null) {
        if (field.required) {
          throw new Error(field.errorMessage);
        } else {
          continue; // Skip optional fields if not provided
        }
      }
      if (!field.validationSchema.test(rawValue)) {
        throw new Error(field.errorMessage);
      }
      parsedInput[key] = field.parse(rawValue);
    }
    return parsedInput as InferDataType<Input>;
  }

  protected validateOutput(
    output: InferDataType<Output>,
  ): InferDataType<Output> {
    const validatedOutput: any = {};
    for (const key in this.outputSchema) {
      const field = this.outputSchema[key];
      const value = output[key];
      if (!field.validator(value)) {
        throw new Error(
          `Output validation failed for field "${key}": ${field.description}`,
        );
      }
      validatedOutput[key] = value;
    }
    return validatedOutput as InferDataType<Output>;
  }

  /**
   * Emits validated output data.
   * @param runId - Unique identifier for the request.
   * @param data - The output data to be emitted.
   * @param error - Optional error to be emitted.
   */
  protected emitResponse(
    runMetadata: RunMetadata,
    data?: InferDataType<Output>,
    error?: Error,
  ) {
    if (error) {
      console.error("Error in emitResponse:", error);
      this.emit("error", { nodeId: this.id, error, runMetadata });
      return;
    }
    if (!data) {
      console.error("No data provided to emitResponse");
      this.emit("error", {
        nodeId: this.id,
        error: new Error("No data provided"),
        runMetadata,
      });
      return;
    }
    try {
      const validatedData = this.validateOutput(data);
      this.emit("done", {
        nodeId: this.id,
        data: validatedData,
        runMetadata,
        branchId: this.getBranchIdForOutput(validatedData),
      });
      if (this.parseLead) {
        const lead = this.parseLead(validatedData);
        addOrUpdateLead(lead, runMetadata.projectId).catch((err) => {
          console.error("Error adding/updating lead:", err);
        });
      }
    } catch (error) {
      this.emit("error", { nodeId: this.id, error, runMetadata });
    }
  }

  public on(
    event: "done",
    listener: (response: {
      nodeId: string;
      data: InferDataType<Output>;
      runMetadata: RunMetadata;
      branchId?: string;
    }) => void,
  ): this;
  public on(
    event: "error",
    listener: (response: {
      nodeId: string;
      error: Error;
      runMetadata: RunMetadata;
    }) => void,
  ): this;
  public on(event: string, listener: (...args: any[]) => void): this {
    return super.on(event, listener);
  }

  /**
   * Executes the workflow node with the provided input.
   *
   * @param rawInput - The raw input data as a record of key-value pairs
   * @param runId - A unique identifier for this execution instance
   * @emits "error" - When an error occurs during execution, with payload { nodeId, error, runId }
   * @returns {Promise<void>} A promise that resolves when the execution is complete
   * @throws Will emit an "error" event rather than throwing directly
   */
  public async execute(
    rawInput: Record<string, any>,
    runMetadata: RunMetadata,
  ): Promise<void> {
    try {
      const parsedInput = this.parseInput(rawInput);
      console.log(
        `Executing node ${this.name} (${this.id}) with input:`,
        parsedInput,
      );

      if (this.ratelimitInfo) {
        const limiter = this.getLimiter(runMetadata);
        if (limiter) {
          await limiter.schedule(() =>
            this.queueRequest(
              parsedInput,
              runMetadata,
              this.emitResponse.bind(this),
            ),
          );
          return;
        }
      }

      await this.queueRequest(
        parsedInput,
        runMetadata,
        this.emitResponse.bind(this),
      );
    } catch (error) {
      console.error("Error during node execution:", error);
      this.emit("error", {
        nodeId: this.id,
        error: error as Error,
        runMetadata,
      });
    }
  }

  public async cancel(
    rawInput: Record<string, any>,
    runMetadata: RunMetadata,
  ): Promise<void> {
    try {
      const parsedInput = this.parseInput(rawInput);
      console.log(
        `Cancelling node ${this.name} (${this.id}) with input:`,
        parsedInput,
      );
      await this.unqueueRequest(
        parsedInput,
        runMetadata,
        this.emitResponse.bind(this),
      );
    } catch (error) {
      console.error("Error during node cancellation:", error);
      this.emit("error", {
        nodeId: this.id,
        error: error as Error,
        runMetadata,
      });
    }
  }
}
