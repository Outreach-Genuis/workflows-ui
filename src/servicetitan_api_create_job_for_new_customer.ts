
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Create Job for New Customer","id":"servicetitan_api_create_job_for_new_customer","descripition":"Creates a new customer FIRST, then creates a job for that customer in ServiceTitan. Two-step process. Summary is required and will be used to automatically classify the job using GPT to determine businessUnitId and jobTypeId. Campaign ID is taken from MCP property.","inputSchema": {
    priority: {
      name: "priority",
      description: "Job priority (defaults to High).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    jobTypeId: {
      name: "jobTypeId",
      description: "The job type ID (will be overridden by GPT classification).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    incomingPhoneNumber: {
      name: "incomingPhoneNumber",
      description: "Caller's phone number to match campaign (optional, uses default if not provided).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    businessUnitId: {
      name: "businessUnitId",
      description: "The business unit ID (will be overridden by GPT classification).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    summary: {
      name: "summary",
      description: "Job summary description. Required for automatic GPT classification.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    appointments: {
      name: "appointments",
      description: "Array of appointment objects with start, end, technicianIds, arrivalWindowStart, arrivalWindowEnd.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    customer: {
      name: "customer",
      description: "Customer data object with name, type, locations, address, contacts.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Create Job for New Customer from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Create Job for New Customer"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_create_job_for_new_customer" };
