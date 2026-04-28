
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Forward To Agent Called","id":"on_genesys_cloud_api_forward_to_agent_called","descripition":"Triggers when Forward To Agent is called via MCP API (Genesys Cloud API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    summary: {
      name: "summary",
      description: "Input parameter: Summary of the interaction so far",
      example: "",
      validator: (value: any) => true,
    },
    escalationReason: {
      name: "escalationReason",
      description: "Input parameter: Reason for escalating to human agent",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Forward To Agent from API Genesys Cloud API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["Genesys Cloud API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_genesys_cloud_api_forward_to_agent_called" };
