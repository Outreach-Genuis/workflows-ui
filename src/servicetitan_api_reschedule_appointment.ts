
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Reschedule Appointment","id":"servicetitan_api_reschedule_appointment","descripition":"Reschedules an existing appointment in ServiceTitan.","inputSchema": {
    arrivalWindowEnd: {
      name: "arrivalWindowEnd",
      description: "New arrival window end time (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    arrivalWindowStart: {
      name: "arrivalWindowStart",
      description: "New arrival window start time (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    end: {
      name: "end",
      description: "New appointment end time in ISO 8601 format (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    start: {
      name: "start",
      description: "New appointment start time in ISO 8601 format (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    appointmentId: {
      name: "appointmentId",
      description: "The appointment ID to reschedule.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Reschedule Appointment from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Reschedule Appointment"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_reschedule_appointment" };
