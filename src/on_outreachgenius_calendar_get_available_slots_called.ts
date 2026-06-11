
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Get Available Slots Called","id":"on_outreachgenius_calendar_get_available_slots_called","descripition":"Triggers when Get Available Slots is called via MCP API (Outreachgenius Calendar)","inputSchema": {},"outputSchema": {
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
    zipCode: {
      name: "zipCode",
      description: "Input parameter: Zip code of the customer",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Get Available Slots from API Outreachgenius Calendar",
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

export { node as "on_outreachgenius_calendar_get_available_slots_called" };
