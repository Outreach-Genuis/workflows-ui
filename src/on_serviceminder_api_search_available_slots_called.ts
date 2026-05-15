
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Search Available Slots Called","id":"on_serviceminder_api_search_available_slots_called","descripition":"Triggers when Search Available Slots is called via MCP API (ServiceMinder API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    slotWindowDays: {
      name: "slotWindowDays",
      description: "Input parameter: Number of days to search ahead",
      example: 0,
      validator: (value: any) => true,
    },
    timeframe: {
      name: "timeframe",
      description: "Input parameter: Preferred time (morning, afternoon, evening)",
      example: "",
      validator: (value: any) => true,
    },
    searchDate: {
      name: "searchDate",
      description: "Input parameter: Date to search from (YYYY-MM-DD)",
      example: "",
      validator: (value: any) => true,
    },
    duration: {
      name: "duration",
      description: "Input parameter: Duration in minutes",
      example: "",
      validator: (value: any) => true,
    },
    contactId: {
      name: "contactId",
      description: "Input parameter: Customer's contact ID",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Search Available Slots from API ServiceMinder API",
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

export { node as "on_serviceminder_api_search_available_slots_called" };
