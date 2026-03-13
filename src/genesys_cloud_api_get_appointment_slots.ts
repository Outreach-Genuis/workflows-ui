
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Appointment Slots","id":"genesys_cloud_api_get_appointment_slots","descripition":"Retrieves available appointment slots from CertaPro by zip code. Returns a list of available time slots for scheduling estimates.","inputSchema": {
    zipCode: {
      name: "zipCode",
      description: "Zip code to search for available appointment slots",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Appointment Slots from API Genesys Cloud API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Genesys Cloud API","Get Appointment Slots"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "genesys_cloud_api_get_appointment_slots" };
