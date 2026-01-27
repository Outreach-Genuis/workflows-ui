
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Service Titan Technicion Sms","id":"service_titan_technicion_sms","descripition":"This will trigger sending sms and follow up call to the technicion","inputSchema": {},"outputSchema": {
    firstPhoneNumber: {
      name: "First Phone Number",
      description: "First phone number of the technicion",
      example: "+11112223333",
      validator: function (value: string): boolean {
        // make sure it's a valid phone number
        if (/^\+?[1-9]\d{1,14}$/.test(value)) {
          return true;
        } else {
          throw new Error("Please enter a valid phone number");
        }
      },
      required: true,
    },
    secondPhoneNumber: {
      name: "Second Phone Number",
      description:
        "Second phone number of the technicion, use an empty string if not available",
      example: "+11112223333",
      validator: function (value: string): boolean {
        // make sure it's a valid phone number or empty
        if (value === "" || /^\+?[1-9]\d{1,14}$/.test(value)) {
          return true;
        } else {
          throw new Error(
            "Please enter a valid phone number or leave it empty",
          );
        }
      },
      required: true,
    },
    message: {
      name: "SMS Message Content",
      description:
        "The content of the SMS message to be sent to the technicion",
      example: "You got a new job assigned. Please check your app for details.",
      validator: function (value: string): boolean {
        // check message length
        if (value.length > 0 && value.length <= 1600) {
          return true;
        } else {
          throw new Error(
            "Please enter a valid message (maximum 1600 characters)",
          );
        }
      },
      required: false,
    },
    action: {
      name: "Action",
      description:
        "initiated — send SMS; confirmed — SMS verified by technician.",
      example: "initiate",
      validator: function (value: "initiate" | "confirmed"): boolean {
        if (value === "initiate" || value === "confirmed") {
          return true;
        } else {
          throw new Error('Action must be either "initiate" or "confirmed"');
        }
      },
      required: true,
    },
    appointmentTime: {
      name: "Appointment Time",
      description: "The time of the appointment",
      example: "2023-10-01T10:00:00Z",
      validator: function (value: string): boolean {
        return true;
      },
      required: true,
    },
  },"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "service_titan_technicion_sms" };
