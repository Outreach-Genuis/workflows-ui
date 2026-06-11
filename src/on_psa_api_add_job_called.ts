
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Add Job Called","id":"on_psa_api_add_job_called","descripition":"Triggers when Add Job is called via MCP API (PSA API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    siteName: {
      name: "siteName",
      description: "Input parameter: Site name",
      example: "",
      validator: (value: any) => true,
    },
    siteRegion: {
      name: "siteRegion",
      description: "Input parameter: Province/State",
      example: "",
      validator: (value: any) => true,
    },
    siteCity: {
      name: "siteCity",
      description: "Input parameter: City",
      example: "",
      validator: (value: any) => true,
    },
    siteAddress: {
      name: "siteAddress",
      description: "Input parameter: Street address",
      example: "",
      validator: (value: any) => true,
    },
    contactId: {
      name: "contactId",
      description: "Input parameter: Contact ID to link to the job",
      example: 0,
      validator: (value: any) => true,
    },
    buildingType: {
      name: "buildingType",
      description: "Input parameter: Building type (e.g., 'Residential', 'Commercial')",
      example: "",
      validator: (value: any) => true,
    },
    name: {
      name: "name",
      description: "Input parameter: Job name",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Add Job from API PSA API",
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

export { node as "on_psa_api_add_job_called" };
