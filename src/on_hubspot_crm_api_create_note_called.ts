
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Create Note Called","id":"on_hubspot_crm_api_create_note_called","descripition":"Triggers when Create Note is called via MCP API (HubSpot CRM API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    contactIds: {
      name: "contactIds",
      description: "Input parameter: Contact IDs to associate with",
      example: [],
      validator: (value: any) => true,
    },
    noteBody: {
      name: "noteBody",
      description: "Input parameter: Content of the note",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Create Note from API HubSpot CRM API",
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

export { node as "on_hubspot_crm_api_create_note_called" };
