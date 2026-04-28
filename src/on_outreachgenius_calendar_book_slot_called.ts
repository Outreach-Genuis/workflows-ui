
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Book Slot Called","id":"on_outreachgenius_calendar_book_slot_called","descripition":"Triggers when Book Slot is called via MCP API (Outreachgenius Calendar)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    timezone: {
      name: "timezone",
      description: "Input parameter: Timezone",
      example: "",
      validator: (value: any) => true,
    },
    cname: {
      name: "cname",
      description: "Input parameter: Company/name",
      example: "",
      validator: (value: any) => true,
    },
    lastName: {
      name: "lastName",
      description: "Input parameter: Last name",
      example: "",
      validator: (value: any) => true,
    },
    zipCode: {
      name: "zipCode",
      description: "Input parameter: Zip code of the customer",
      example: "",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Phone number",
      example: "",
      validator: (value: any) => true,
    },
    firstName: {
      name: "firstName",
      description: "Input parameter: First name",
      example: "",
      validator: (value: any) => true,
    },
    leadEmail: {
      name: "leadEmail",
      description: "Input parameter: Lead email",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Attendee email",
      example: "",
      validator: (value: any) => true,
    },
    slotId: {
      name: "slotId",
      description: "Input parameter: Base64 encoded slot ID from getAvailableSlots",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Book Slot from API Outreachgenius Calendar",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["Outreachgenius Calendar","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_outreachgenius_calendar_book_slot_called" };
