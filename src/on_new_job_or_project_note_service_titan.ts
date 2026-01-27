
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Job Or Project Note","id":"on_new_job_or_project_note_service_titan","descripition":"Triggers when a new note is added to a job or project in ServiceTitan","inputSchema": {
    entityType: {
      name: "Note Type",
      description: "Select whether to trigger on Job Notes or Project Notes",
      required: true,
      validationSchema: /^(Job|Project)$/,
      errorMessage: "Note Type must be either 'Job' or 'Project'",
      input: {
        type: "select",
        options: [
          { label: "Job", value: "Job" },
          { label: "Project", value: "Project" },
        ],
      },
      parse: (value: string) => value,
    },
    entityId: {
      name: "Entity ID",
      description:
        "The ID of the Job or Project to monitor for new notes (e.g., Job ID or Project ID)",
      required: true,
      validationSchema: /^\d+$/,
      errorMessage: "Entity ID must be a valid number",
      input: {
        type: "text",
      },
      parse: (value: string) => value,
    },
  },"outputSchema": {
    text: {
      name: "Text",
      description: "The content of the note",
      example: "This is a sample note text.",
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
      example: 12345,
      validator: (value: any) => typeof value === "number",
    },
    createdOn: {
      name: "Created On",
      description: "The date and time when the note was created",
      example: "2023-10-05T14:48:00.000Z",
      validator: (value: any) => true, // Accept any value, further validation can be done if needed
    },
    modifiedOn: {
      name: "Modified On",
      description: "The date and time when the note was last modified",
      example: "2023-10-06T10:15:00.000Z",
      validator: (value: any) => true, // Accept any value, further validation can be done if needed
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_job_or_project_note_service_titan" };
