
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Forward To Agent","id":"genesys_cloud_api_forward_to_agent","descripition":"Forward the current call to a human agent. Automatically saves session data to Genesys and initiates conversation stitching.","inputSchema": {
    summary: {
      name: "summary",
      description: "Summary of the interaction so far",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    escalationReason: {
      name: "escalationReason",
      description: "Reason for escalating to human agent",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Forward To Agent from API Genesys Cloud API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Genesys Cloud API","Forward To Agent"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "genesys_cloud_api_forward_to_agent" };
