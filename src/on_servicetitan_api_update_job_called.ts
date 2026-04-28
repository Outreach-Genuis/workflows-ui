
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Update Job Called","id":"on_servicetitan_api_update_job_called","descripition":"Triggers when Update Job is called via MCP API (ServiceTitan API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    appointments: {
      name: "appointments",
      description: "Input parameter: Array of appointment objects (optional).",
      example: [],
      validator: (value: any) => true,
    },
    summary: {
      name: "summary",
      description: "Input parameter: Job summary (optional).",
      example: "",
      validator: (value: any) => true,
    },
    priority: {
      name: "priority",
      description: "Input parameter: Job priority (optional).",
      example: "",
      validator: (value: any) => true,
    },
    jobId: {
      name: "jobId",
      description: "Input parameter: The job ID to update.",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Update Job from API ServiceTitan API",
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

export { node as "on_servicetitan_api_update_job_called" };
