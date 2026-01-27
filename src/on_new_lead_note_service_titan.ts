
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Lead Note","id":"on_new_lead_note_service_titan","descripition":"Triggers when a new note is added to a lead in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The ID of the note",
      example: 123,
      validator: (value: any) => typeof value === "number",
    },
    text: {
      name: "Text",
      description: "The content of the note",
      example: "This is a note.",
      validator: (value: any) => typeof value === "string",
    },
    isPinned: {
      name: "Is Pinned",
      description: "Indicates if the note is pinned",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
    createdById: {
      name: "Created By ID",
      description: "The ID of the user who created the note",
      example: 456,
      validator: (value: any) => typeof value === "number",
    },
    createdOn: {
      name: "Created On",
      description: "The timestamp when the note was created",
      example: "2023-10-01T12:34:56Z",
      validator: (value: any) => typeof value === "string",
    },
    modifiedOn: {
      name: "Modified On",
      description: "The timestamp when the note was last modified",
      example: "2023-10-02T12:34:56Z",
      validator: (value: any) => typeof value === "string",
    },
    leadId: {
      name: "Lead ID",
      description: "The ID of the associated lead",
      example: 789,
      validator: (value: any) => typeof value === "number",
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_lead_note_service_titan" };
