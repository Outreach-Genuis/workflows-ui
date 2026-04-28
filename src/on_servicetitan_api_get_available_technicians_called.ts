
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Get Available Technicians Called","id":"on_servicetitan_api_get_available_technicians_called","descripition":"Triggers when Get Available Technicians is called via MCP API (ServiceTitan API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    summary: {
      name: "summary",
      description: "Input parameter: Job summary to determine business unit for filtering technicians. Only used when filter_technicians_by_business_unit is enabled.",
      example: "",
      validator: (value: any) => true,
    },
    date: {
      name: "date",
      description: "Input parameter: Target date in YYYY-MM-DD format (optional, defaults to today).",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Get Available Technicians from API ServiceTitan API",
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

export { node as "on_servicetitan_api_get_available_technicians_called" };
