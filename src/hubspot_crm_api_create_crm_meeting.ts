
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Create CRM Meeting","id":"hubspot_crm_api_create_crm_meeting","descripition":"Create a meeting engagement in HubSpot CRM (not for scheduling).","inputSchema": {
    contactIds: {
      name: "contactIds",
      description: "Contact IDs to associate",
      required: false,
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
    location: {
      name: "location",
      description: "Meeting location",
      required: false,
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
    description: {
      name: "description",
      description: "Meeting description",
      required: false,
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
    endTime: {
      name: "endTime",
      description: "Meeting end time (ISO format)",
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
    startTime: {
      name: "startTime",
      description: "Meeting start time (ISO format)",
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
    subject: {
      name: "subject",
      description: "Meeting subject/title",
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
      description: "Output of tool Create CRM Meeting from API HubSpot CRM API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["HubSpot CRM API","Create CRM Meeting"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "hubspot_crm_api_create_crm_meeting" };
