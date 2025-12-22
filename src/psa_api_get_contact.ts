
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Contact","id":"psa_api_get_contact","descripition":"Retrieve contact details by ID from PSA system.","inputSchema": {
    contactId: {
      name: "contactId",
      description: "The ID of the contact to retrieve",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Contact from API PSA API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["PSA API","Get Contact"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "psa_api_get_contact" };
