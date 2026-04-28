
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Book Meeting Slot Called","id":"on_hubspot_crm_api_book_meeting_slot_called","descripition":"Triggers when Book Meeting Slot is called via MCP API (HubSpot CRM API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    locale: {
      name: "locale",
      description: "Input parameter: Locale (e.g., 'en-us')",
      example: "",
      validator: (value: any) => true,
    },
    timezone: {
      name: "timezone",
      description: "Input parameter: Timezone",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Attendee email",
      example: "",
      validator: (value: any) => true,
    },
    lastName: {
      name: "lastName",
      description: "Input parameter: Attendee last name",
      example: "",
      validator: (value: any) => true,
    },
    firstName: {
      name: "firstName",
      description: "Input parameter: Attendee first name",
      example: "",
      validator: (value: any) => true,
    },
    timeSlotId: {
      name: "timeSlotId",
      description: "Input parameter: Time slot ID from availability results",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Book Meeting Slot from API HubSpot CRM API",
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

export { node as "on_hubspot_crm_api_book_meeting_slot_called" };
