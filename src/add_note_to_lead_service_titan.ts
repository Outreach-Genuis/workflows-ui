
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Add Note To Lead Service Titan","id":"add_note_to_lead_service_titan","descripition":"Adds a note to a lead in ServiceTitan","inputSchema": {
    leadId: {
      name: "Lead ID",
      description: "The ID of the lead to add a note to",
      required: true,
      validationSchema: /^\d+$/,
      errorMessage: "Lead ID must be a valid number",
      input: {
        type: "number",
        max: 2147483647,
        min: 1,
      },
      parse: (value: string) => parseInt(value, 10),
    },
    text: {
      name: "Note Text",
      description: "The content of the note to be added",
      required: true,
      validationSchema: /.*/,
      errorMessage: "Note text is invalid",
      input: {
        type: "text",
      },
      parse: (value: string) => value,
    },
  },"outputSchema": {},"groups":["ServiceTitan","Notes"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "add_note_to_lead_service_titan" };
