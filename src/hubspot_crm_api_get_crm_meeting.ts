
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get CRM Meeting","id":"hubspot_crm_api_get_crm_meeting","descripition":"Retrieve a CRM meeting engagement by ID.","inputSchema": {
    meetingId: {
      name: "meetingId",
      description: "HubSpot meeting ID",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => {
        try {
          return z.string().parse(value);
        } catch {
          return value;
        }
      },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get CRM Meeting from API HubSpot CRM API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["HubSpot CRM API","Get CRM Meeting"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "hubspot_crm_api_get_crm_meeting" };
