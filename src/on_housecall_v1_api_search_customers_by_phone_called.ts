
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Search Customers By Phone Called","id":"on_housecall_v1_api_search_customers_by_phone_called","descripition":"Triggers when Search Customers By Phone is called via MCP API (Housecall v1 API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Phone number (partial or full) used to search",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Search Customers By Phone from API Housecall v1 API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["Housecall v1 API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_housecall_v1_api_search_customers_by_phone_called" };
