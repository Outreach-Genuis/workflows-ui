
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Update Event Called","id":"on_certapro_v3_api_update_event_called","descripition":"Triggers when Update Event is called via MCP API (CertaPro V3 API)","inputSchema": {},"outputSchema": {
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
    teamType: {
      name: "teamType",
      description: "Input parameter: Team type (residential or commercial). Falls back to the configured default team type if not provided.",
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
      description: "Input parameter: Customer phone number",
      example: "",
      validator: (value: any) => true,
    },
    prospectName: {
      name: "prospectName",
      description: "Input parameter: Full name of the prospect/customer",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Customer email address",
      example: "",
      validator: (value: any) => true,
    },
    eventUid: {
      name: "event_uid",
      description: "Input parameter: The event_uid of the slot to book (from getEvents)",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Update Event from API CertaPro V3 API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["CertaPro V3 API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_certapro_v3_api_update_event_called" };
