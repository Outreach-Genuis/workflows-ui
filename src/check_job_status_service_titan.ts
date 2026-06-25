
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Check Job Status Service Titan","id":"check_job_status_service_titan","descripition":"Checks the status of a job in ServiceTitan; branches by job status, or to 'error' if the check fails","inputSchema": {
    job_id: {
      name: "Job ID",
      description: "The ID of the ServiceTitan job to check",
      required: true,
      validationSchema: /^\d+$/,
      errorMessage: "Job ID must be a number",
      input: {
        type: "text",
      },
      parse: (value: string) => value.trim(),
    },
  },"outputSchema": {
    status: {
      name: "Status",
      description: "The job status returned by ServiceTitan",
      example: "Scheduled",
      validator: (
        value:
          | "Scheduled"
          | "Dispatched"
          | "InProgress"
          | "Hold"
          | "Completed"
          | "Canceled"
          | null,
      ): boolean =>
        value === null ||
        [
          "Scheduled",
          "Dispatched",
          "InProgress",
          "Hold",
          "Completed",
          "Canceled",
        ].includes(value),
    },
    error: {
      name: "Error",
      description: "Error message if the check failed, null on success",
      example: null,
      validator: (value: string | null): boolean =>
        value === null || typeof value === "string",
    },
  },"groups":["system","ServiceTitan","Jobs"],"branches":{"scheduled":{"id":"scheduled","name":"Scheduled","description":"The job is scheduled"},"dispatched":{"id":"dispatched","name":"Dispatched","description":"The job has been dispatched"},"inprogress":{"id":"inprogress","name":"In Progress","description":"The job is in progress"},"hold":{"id":"hold","name":"Hold","description":"The job is on hold"},"completed":{"id":"completed","name":"Completed","description":"The job has been completed"},"canceled":{"id":"canceled","name":"Canceled","description":"The job has been canceled"},"error":{"id":"error","name":"Error","description":"An error occurred while checking the job status"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "check_job_status_service_titan" };
