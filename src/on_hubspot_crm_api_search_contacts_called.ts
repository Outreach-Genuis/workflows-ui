
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Search Contacts Called","id":"on_hubspot_crm_api_search_contacts_called","descripition":"Triggers when Search Contacts is called via MCP API (HubSpot CRM API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    limit: {
      name: "limit",
      description: "Input parameter: Maximum number of results",
      example: 0,
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Search by phone number",
      example: "",
      validator: (value: any) => true,
    },
    lastname: {
      name: "lastname",
      description: "Input parameter: Search by last name",
      example: "",
      validator: (value: any) => true,
    },
    firstname: {
      name: "firstname",
      description: "Input parameter: Search by first name",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Search by email",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Search Contacts from API HubSpot CRM API",
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

export { node as "on_hubspot_crm_api_search_contacts_called" };
