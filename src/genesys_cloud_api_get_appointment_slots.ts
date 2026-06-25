
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Appointment Slots","id":"genesys_cloud_api_get_appointment_slots","descripition":"Retrieves available appointment slots from CertaPro by zip code. Returns a list of available time slots with human-readable date, day, and time information. Optionally filter to only show slots within the next N days.","inputSchema": {
    numDays: {
      name: "numDays",
      description: "Number of days from now to include available slots (e.g. 7 for next 7 days)",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "number", min: -2147483648, max: 2147483647 },
      parse: (value: string) => { try { return (z.coerce.number()).parse(value); } catch { return 0; } },
    },
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
