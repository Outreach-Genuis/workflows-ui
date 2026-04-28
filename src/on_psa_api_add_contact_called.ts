
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Add Contact Called","id":"on_psa_api_add_contact_called","descripition":"Triggers when Add Contact is called via MCP API (PSA API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Phone number of the contact",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Email address of the contact",
      example: "",
      validator: (value: any) => true,
    },
    subregion: {
      name: "subregion",
      description: "Input parameter: County/Subregion of the contact",
      example: "",
      validator: (value: any) => true,
    },
    postalCode: {
      name: "postalCode",
      description: "Input parameter: Postal/ZIP code of the contact",
      example: "",
      validator: (value: any) => true,
    },
    country: {
      name: "country",
      description: "Input parameter: Country of the contact",
      example: "",
      validator: (value: any) => true,
    },
    title: {
      name: "title",
      description: "Input parameter: Title of the contact (e.g., Doctor, Mr., Mrs.)",
      example: "",
      validator: (value: any) => true,
    },
    region: {
      name: "region",
      description: "Input parameter: Province/State of the contact",
      example: "",
      validator: (value: any) => true,
    },
    city: {
      name: "city",
      description: "Input parameter: City of the contact",
      example: "",
      validator: (value: any) => true,
    },
    address: {
      name: "address",
      description: "Input parameter: Street address of the contact",
      example: "",
      validator: (value: any) => true,
    },
    lastName: {
      name: "lastName",
      description: "Input parameter: Last name of the contact",
      example: "",
      validator: (value: any) => true,
    },
    firstName: {
      name: "firstName",
      description: "Input parameter: First name of the contact",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Add Contact from API PSA API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["PSA API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_psa_api_add_contact_called" };
