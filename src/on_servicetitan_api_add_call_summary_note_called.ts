
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Add Call Summary Note Called","id":"on_servicetitan_api_add_call_summary_note_called","descripition":"Triggers when Add Call Summary Note is called via MCP API (ServiceTitan API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    additionalDetails: {
      name: "additionalDetails",
      description: "Input parameter: Any additional details to include in the note (optional).",
      example: "",
      validator: (value: any) => true,
    },
    callSummary: {
      name: "callSummary",
      description: "Input parameter: Summary of what happened during the call.",
      example: "",
      validator: (value: any) => true,
    },
    jobId: {
      name: "jobId",
      description: "Input parameter: The job ID to add the note to.",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Add Call Summary Note from API ServiceTitan API",
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

export { node as "on_servicetitan_api_add_call_summary_note_called" };
