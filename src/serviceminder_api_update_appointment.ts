
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Update Appointment","id":"serviceminder_api_update_appointment","descripition":"Modify an existing appointment. Use for rescheduling or updating appointment details.","inputSchema": {
    updateNote: {
      name: "updateNote",
      description: "Reason for the update",
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
    notes: {
      name: "notes",
      description: "Updated appointment notes",
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
    duration: {
      name: "duration",
      description: "New duration in minutes",
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
    targetDate: {
      name: "targetDate",
      description: "New appointment date/time",
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
    appointmentId: {
      name: "appointmentId",
      description: "ID of appointment to update",
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
      description:
        "Output of tool Update Appointment from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Update Appointment"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "serviceminder_api_update_appointment" };
