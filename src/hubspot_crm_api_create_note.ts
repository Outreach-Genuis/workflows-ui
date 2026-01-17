
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Create Note","id":"hubspot_crm_api_create_note","descripition":"Create a note in HubSpot and associate it with contacts.","inputSchema": {
    contactIds: {
      name: "contactIds",
      description: "Contact IDs to associate with",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    noteBody: {
      name: "noteBody",
      description: "Content of the note",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Create Note from API HubSpot CRM API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["HubSpot CRM API","Create Note"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "hubspot_crm_api_create_note" };
