
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Book Estimate Called","id":"on_housecall_v1_api_book_estimate_called","descripition":"Triggers when Book Estimate is called via MCP API (Housecall v1 API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    callSummary: {
      name: "call_summary",
      description: "Input parameter: A Detailed summary of what was discussed during the call",
      example: "",
      validator: (value: any) => true,
    },
    description: {
      name: "description",
      description: "Input parameter: Short description",
      example: "",
      validator: (value: any) => true,
    },
    endTime: {
      name: "end_time",
      description: "Input parameter: End time (ISO8601 EST 2hr block)",
      example: "",
      validator: (value: any) => true,
    },
    startTime: {
      name: "start_time",
      description: "Input parameter: Start time (ISO8601 EST 2hr block)",
      example: "",
      validator: (value: any) => true,
    },
    country: {
      name: "country",
      description: "Input parameter: Country code",
      example: "",
      validator: (value: any) => true,
    },
    zip: {
      name: "zip",
      description: "Input parameter: Postal code",
      example: "",
      validator: (value: any) => true,
    },
    state: {
      name: "state",
      description: "Input parameter: State/Province",
      example: "",
      validator: (value: any) => true,
    },
    city: {
      name: "city",
      description: "Input parameter: City",
      example: "",
      validator: (value: any) => true,
    },
    street: {
      name: "street",
      description: "Input parameter: Street address",
      example: "",
      validator: (value: any) => true,
    },
    lastName: {
      name: "last_name",
      description: "Input parameter: Last name (required)",
      example: "",
      validator: (value: any) => true,
    },
    firstName: {
      name: "first_name",
      description: "Input parameter: First name",
      example: "",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Customer phone",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Book Estimate from API Housecall v1 API",
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

export { node as "on_housecall_v1_api_book_estimate_called" };
