
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Create Job for Existing Customer Called","id":"on_servicetitan_api_create_job_for_existing_customer_called","descripition":"Triggers when Create Job for Existing Customer is called via MCP API (ServiceTitan API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    priority: {
      name: "priority",
      description: "Input parameter: Job priority (defaults to High).",
      example: "",
      validator: (value: any) => true,
    },
    jobTypeId: {
      name: "jobTypeId",
      description: "Input parameter: The job type ID (will be overridden by GPT classification).",
      example: 0,
      validator: (value: any) => true,
    },
    businessUnitId: {
      name: "businessUnitId",
      description: "Input parameter: The business unit ID (will be overridden by GPT classification).",
      example: 0,
      validator: (value: any) => true,
    },
    customerType: {
      name: "customerType",
      description: "Input parameter: Customer type (Residential or Commercial). Optional, helps with classification.",
      example: "",
      validator: (value: any) => true,
    },
    incomingPhoneNumber: {
      name: "incomingPhoneNumber",
      description: "Input parameter: Caller's phone number to match campaign (optional, uses default if not provided).",
      example: "",
      validator: (value: any) => true,
    },
    address: {
      name: "address",
      description: "Input parameter: Service location address for the job.",
      example: {},
      validator: (value: any) => true,
    },
    summary: {
      name: "summary",
      description: "Input parameter: Detailed job summary including: what happened during the call, the customer's issue/request, any special instructions, urgency level, and relevant timestamps. This is used for automatic job classification and stored as the job description. Example: 'Customer reported water heater leaking since yesterday evening. Requested emergency service. Prefers afternoon appointment.'",
      example: "",
      validator: (value: any) => true,
    },
    appointments: {
      name: "appointments",
      description: "Input parameter: Array of appointment objects with start, end, technicianIds, arrivalWindowStart, arrivalWindowEnd.",
      example: [],
      validator: (value: any) => true,
    },
    locationId: {
      name: "locationId",
      description: "Input parameter: The existing location ID.",
      example: 0,
      validator: (value: any) => true,
    },
    customerId: {
      name: "customerId",
      description: "Input parameter: The existing customer ID.",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Create Job for Existing Customer from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_servicetitan_api_create_job_for_existing_customer_called" };
