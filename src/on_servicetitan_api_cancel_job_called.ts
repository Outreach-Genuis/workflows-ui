
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Cancel Job Called","id":"on_servicetitan_api_cancel_job_called","descripition":"Triggers when Cancel Job is called via MCP API (ServiceTitan API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    memo: {
      name: "memo",
      description: "Input parameter: Cancellation memo/notes (optional, defaults to 'cancel appointment').",
      example: "",
      validator: (value: any) => true,
    },
    reasonId: {
      name: "reasonId",
      description: "Input parameter: The cancellation reason ID.",
      example: 0,
      validator: (value: any) => true,
    },
    jobId: {
      name: "jobId",
      description: "Input parameter: The job ID to cancel.",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Cancel Job from API ServiceTitan API",
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

export { node as "on_servicetitan_api_cancel_job_called" };
