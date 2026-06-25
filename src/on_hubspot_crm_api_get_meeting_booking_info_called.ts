
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Get Meeting Booking Info Called","id":"on_hubspot_crm_api_get_meeting_booking_info_called","descripition":"Triggers when Get Meeting Booking Info is called via MCP API (HubSpot CRM API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    monthOffset: {
      name: "monthOffset",
      description: "Input parameter: Months forward from current month",
      example: 0,
      validator: (value: any) => true,
    },
    timezone: {
      name: "timezone",
      description: "Input parameter: Timezone (e.g., 'America/New_York') MUST BE IN PROPER TZ DATABASE FORMAT",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Get Meeting Booking Info from API HubSpot CRM API",
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

export { node as "on_hubspot_crm_api_get_meeting_booking_info_called" };
