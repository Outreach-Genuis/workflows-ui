
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Update Customer Called","id":"on_servicetitan_api_update_customer_called","descripition":"Triggers when Update Customer is called via MCP API (ServiceTitan API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    contacts: {
      name: "contacts",
      description: "Input parameter: Array of contact objects (optional).",
      example: [],
      validator: (value: any) => true,
    },
    address: {
      name: "address",
      description: "Input parameter: Customer address object (optional).",
      example: {},
      validator: (value: any) => true,
    },
    type: {
      name: "type",
      description: "Input parameter: Customer type (optional).",
      example: "",
      validator: (value: any) => true,
    },
    name: {
      name: "name",
      description: "Input parameter: Customer name (optional).",
      example: "",
      validator: (value: any) => true,
    },
    customerId: {
      name: "customerId",
      description: "Input parameter: The customer ID to update.",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Update Customer from API ServiceTitan API",
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

export { node as "on_servicetitan_api_update_customer_called" };
