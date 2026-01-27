
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Cancel Appointment","id":"serviceminder_api_cancel_appointment","descripition":"Cancel an existing appointment with optional reason.","inputSchema": {
    updateNote: {
      name: "updateNote",
      description: "Cancellation notes",
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
    cancelReasonId: {
      name: "cancelReasonId",
      description: "Reason code for cancellation",
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
      description: "ID of appointment to cancel",
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
        "Output of tool Cancel Appointment from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Cancel Appointment"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "serviceminder_api_cancel_appointment" };
