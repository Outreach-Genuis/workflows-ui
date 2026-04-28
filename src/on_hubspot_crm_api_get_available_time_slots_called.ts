
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Get Available Time Slots Called","id":"on_hubspot_crm_api_get_available_time_slots_called","descripition":"Triggers when Get Available Time Slots is called via MCP API (HubSpot CRM API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    days: {
      name: "days",
      description: "Input parameter: Number of days to look ahead (default: 14)",
      example: 0,
      validator: (value: any) => true,
    },
    timezone: {
      name: "timezone",
      description: "Input parameter: Timezone (e.g., 'America/New_York')",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Get Available Time Slots from API HubSpot CRM API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["HubSpot CRM API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_hubspot_crm_api_get_available_time_slots_called" };
