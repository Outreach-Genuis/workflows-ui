
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Add To SMS Campaign","id":"add_to_sms_campaign","descripition":"Adds a contact to an SMS campaign identified by campaign ID","inputSchema": {
    phone: {
      name: "Phone Number",
      description: "The phone number to add to the SMS campaign",
      validationSchema: /^\+?[1-9]\d{1,14}$/,
      errorMessage: "Please enter a valid phone number in E.164 format",
      required: true,
      input: {
        type: "text",
        placeholder: "+15551234567",
      },
      parse: function (value: string): string {
        return value.trim().replace(/\s+/g, "");
      },
    },
    extraInstructions: {
      name: "Extra Instructions",
      description: "Additional instructions for the agent",
      validationSchema: /.*/,
      errorMessage:
        "Extra instructions must be less than 500 characters if provided",
      required: false,
      input: {
        type: "textarea",
        placeholder: "Please be polite and professional.",
        minLength: 0,
        maxLength: 1000,
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {},"groups":["Communication","SMS","Lead Management"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "add_to_sms_campaign" };
