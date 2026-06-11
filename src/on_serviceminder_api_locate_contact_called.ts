
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Locate Contact Called","id":"on_serviceminder_api_locate_contact_called","descripition":"Triggers when Locate Contact is called via MCP API (ServiceMinder API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    limit: {
      name: "limit",
      description: "Input parameter: Maximum number of results to return",
      example: 0,
      validator: (value: any) => true,
    },
    addressSearch: {
      name: "addressSearch",
      description: "Input parameter: Search by address",
      example: "",
      validator: (value: any) => true,
    },
    emailSearch: {
      name: "emailSearch",
      description: "Input parameter: Search by email address",
      example: "",
      validator: (value: any) => true,
    },
    phoneSearch: {
      name: "phoneSearch",
      description: "Input parameter: Search by phone number",
      example: "",
      validator: (value: any) => true,
    },
    nameSearch: {
      name: "nameSearch",
      description: "Input parameter: Search by customer name",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Locate Contact from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_serviceminder_api_locate_contact_called" };
