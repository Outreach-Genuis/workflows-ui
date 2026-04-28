
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Get Events Called","id":"on_certapro_v2_api_get_events_called","descripition":"Triggers when Get Events is called via MCP API (CertaPro V2 API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
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
      description: "Output of tool Get Events from API CertaPro V2 API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["CertaPro V2 API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_certapro_v2_api_get_events_called" };
