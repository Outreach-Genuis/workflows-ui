
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Create Job for New Customer Called","id":"on_servicetitan_api_create_job_for_new_customer_called","descripition":"Triggers when Create Job for New Customer is called via MCP API (ServiceTitan API)","inputSchema": {},"outputSchema": {
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
    incomingPhoneNumber: {
      name: "incomingPhoneNumber",
      description: "Input parameter: Caller's phone number to match campaign (optional, uses default if not provided).",
      example: "",
      validator: (value: any) => true,
    },
    businessUnitId: {
      name: "businessUnitId",
      description: "Input parameter: The business unit ID (will be overridden by GPT classification).",
      example: 0,
      validator: (value: any) => true,
    },
    summary: {
      name: "summary",
      description: "Input parameter: Job summary description. Required for automatic GPT classification.",
      example: "",
      validator: (value: any) => true,
    },
    appointments: {
      name: "appointments",
      description: "Input parameter: Array of appointment objects with start, end, technicianIds, arrivalWindowStart, arrivalWindowEnd.",
      example: [],
      validator: (value: any) => true,
    },
    customer: {
      name: "customer",
      description: "Input parameter: Customer data object with name, type, locations, address, contacts.",
      example: {},
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Create Job for New Customer from API ServiceTitan API",
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

export { node as "on_servicetitan_api_create_job_for_new_customer_called" };
