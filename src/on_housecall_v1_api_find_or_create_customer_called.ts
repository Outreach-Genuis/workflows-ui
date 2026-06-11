
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Find Or Create Customer Called","id":"on_housecall_v1_api_find_or_create_customer_called","descripition":"Triggers when Find Or Create Customer is called via MCP API (Housecall v1 API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    lastName: {
      name: "last_name",
      description: "Input parameter: Optional last name",
      example: "",
      validator: (value: any) => true,
    },
    firstName: {
      name: "first_name",
      description: "Input parameter: Optional first name",
      example: "",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Customer phone number",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Find Or Create Customer from API Housecall v1 API",
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

export { node as "on_housecall_v1_api_find_or_create_customer_called" };
