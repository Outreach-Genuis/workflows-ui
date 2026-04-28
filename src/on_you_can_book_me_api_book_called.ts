
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Book Called","id":"on_you_can_book_me_api_book_called","descripition":"Triggers when Book is called via MCP API (You Can Book Me API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    notes: {
      name: "notes",
      description: "Input parameter: Additional notes",
      example: "",
      validator: (value: any) => true,
    },
    address: {
      name: "address",
      description: "Input parameter: Service address",
      example: "",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Customer phone number",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Customer email address",
      example: "",
      validator: (value: any) => true,
    },
    prospectName: {
      name: "prospectName",
      description: "Input parameter: Full name of the prospect/customer",
      example: "",
      validator: (value: any) => true,
    },
    tags: {
      name: "tags",
      description: "Input parameter: Comma-separated tags inferred from the call. Used to select the calendar.",
      example: "",
      validator: (value: any) => true,
    },
    startTime: {
      name: "startTime",
      description: "Input parameter: Start time of the slot to book (ISO 8601, e.g. '2026-05-01T14:00:00-04:00').",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Book from API You Can Book Me API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["You Can Book Me API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_you_can_book_me_api_book_called" };
