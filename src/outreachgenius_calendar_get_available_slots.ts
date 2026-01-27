
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Available Slots","id":"outreachgenius_calendar_get_available_slots","descripition":"Return available Cronofy slots for an eventId (mapped via project/zip if provided)","inputSchema": {
    timezone: {
      name: "timezone",
      description: "Timezone",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    zipCode: {
      name: "zipCode",
      description: "Zip code of the customer",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Available Slots from API Outreachgenius Calendar",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Outreachgenius Calendar","Get Available Slots"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "outreachgenius_calendar_get_available_slots" };
