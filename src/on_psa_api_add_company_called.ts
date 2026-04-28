
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Add Company Called","id":"on_psa_api_add_company_called","descripition":"Triggers when Add Company is called via MCP API (PSA API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: Phone number",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: Email address",
      example: "",
      validator: (value: any) => true,
    },
    postalCode: {
      name: "postalCode",
      description: "Input parameter: Postal/ZIP code",
      example: "",
      validator: (value: any) => true,
    },
    country: {
      name: "country",
      description: "Input parameter: Country",
      example: "",
      validator: (value: any) => true,
    },
    siteName: {
      name: "siteName",
      description: "Input parameter: Site name",
      example: "",
      validator: (value: any) => true,
    },
    region: {
      name: "region",
      description: "Input parameter: Province/State",
      example: "",
      validator: (value: any) => true,
    },
    city: {
      name: "city",
      description: "Input parameter: City",
      example: "",
      validator: (value: any) => true,
    },
    address: {
      name: "address",
      description: "Input parameter: Street address",
      example: "",
      validator: (value: any) => true,
    },
    companyType: {
      name: "companyType",
      description: "Input parameter: Company type: CUSTOMER=1, VENDOR=2",
      example: "",
      validator: (value: any) => true,
    },
    name: {
      name: "name",
      description: "Input parameter: Company name",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Add Company from API PSA API",
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

export { node as "on_psa_api_add_company_called" };
