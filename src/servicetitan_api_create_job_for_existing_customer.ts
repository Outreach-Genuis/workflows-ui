
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Create Job for Existing Customer","id":"servicetitan_api_create_job_for_existing_customer","descripition":"Creates a new job for an existing customer in ServiceTitan. Summary is required and will be used to automatically classify the job using GPT. Campaign ID is taken from MCP property.","inputSchema": {
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
    businessUnitId: {
      name: "businessUnitId",
      description: "The business unit ID (will be overridden by GPT classification).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    customerType: {
      name: "customerType",
      description: "Customer type (Residential or Commercial). Optional, helps with classification.",
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
    summary: {
      name: "summary",
      description: "Detailed job summary including: what happened during the call, the customer's issue/request, any special instructions, urgency level, and relevant timestamps. This is used for automatic job classification and stored as the job description. Example: 'Customer reported water heater leaking since yesterday evening. Requested emergency service. Prefers afternoon appointment.'",
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
    locationId: {
      name: "locationId",
      description: "The existing location ID.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    customerId: {
      name: "customerId",
      description: "The existing customer ID.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Create Job for Existing Customer from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Create Job for Existing Customer"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_create_job_for_existing_customer" };
