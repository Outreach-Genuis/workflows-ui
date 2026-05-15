
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Add or Update Contact Called","id":"on_serviceminder_api_add_or_update_contact_called","descripition":"Triggers when Add or Update Contact is called via MCP API (ServiceMinder API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    campaign: {
      name: "campaign",
      description: "Input parameter: Marketing campaign",
      example: "",
      validator: (value: any) => true,
    },
    channel: {
      name: "channel",
      description: "Input parameter: Lead source channel",
      example: "",
      validator: (value: any) => true,
    },
    zip: {
      name: "zip",
      description: "Input parameter: ZIP code",
      example: "",
      validator: (value: any) => true,
    },
    state: {
      name: "state",
      description: "Input parameter: State",
      example: "",
      validator: (value: any) => true,
    },
    city: {
      name: "city",
      description: "Input parameter: City",
      example: "",
      validator: (value: any) => true,
    },
    address2: {
      name: "address2",
      description: "Input parameter: Apartment/unit number",
      example: "",
      validator: (value: any) => true,
    },
    address1: {
      name: "address1",
      description: "Input parameter: Street address",
      example: "",
      validator: (value: any) => true,
    },
    company: {
      name: "company",
      description: "Input parameter: Company name",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Email address",
      example: "",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Primary phone number",
      example: "",
      validator: (value: any) => true,
    },
    name: {
      name: "name",
      description: "Input parameter: Customer's full name",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Add or Update Contact from API ServiceMinder API",
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

export { node as "on_serviceminder_api_add_or_update_contact_called" };
