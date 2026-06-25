
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Get Available Slots Called","id":"on_youcanbookme_api_get_available_slots_called","descripition":"Triggers when Get Available Slots is called via MCP API (YouCanBookMe API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    specialty: {
      name: "specialty",
      description: "Input parameter: COMPULSORY. The specialty needed for this job. 'Residential Painting' for interior/exterior painting jobs (EXTP/INTP). 'Concrete Coating' for floor/coating jobs (FLR).",
      example: "",
      validator: (value: any) => true,
    },
    area: {
      name: "area",
      description: "Input parameter: COMPULSORY. The caller's job-site area or city (e.g. 'Santa Clarita Valley', 'Santa Monica', 'Pasadena', 'Ventura County'). Matched case-insensitively against each estimator's served areas in the teamMemberRouting config.",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Get Available Slots from API YouCanBookMe API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["YouCanBookMe API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_youcanbookme_api_get_available_slots_called" };
