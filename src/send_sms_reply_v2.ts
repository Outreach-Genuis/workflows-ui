
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Send SMS Reply V2","id":"send_sms_reply_v2","descripition":"Sends an SMS reply with the sender phone number auto-inferred by the client. Supports parameter overrides for agent configuration.","inputSchema": {
    to: {
      name: "Recipient Number",
      description: "Phone number to send the SMS reply to",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid phone number.",
      required: true,
      getVisible: undefined,
      input: {
        type: "text",
        maxLength: 15,
        minLength: 10,
        placeholder: "+1234567890",
        default: undefined,
      },
      parse: function (value: string): string {
        if (!value || !/^\+?\d{10,15}$/.test(value)) {
          throw new Error("Invalid phone number format.");
        }
        return value;
      },
      parseLead: function (lead: Lead): string {
        return lead.phone;
      },
    },
    messageBody: {
      name: "Message Body",
      description: "Content of the SMS reply",
      validationSchema: /.*/,
      errorMessage: "Message body cannot be empty.",
      required: true,
      getVisible: undefined,
      input: {
        type: "text",
        maxLength: 1000,
        minLength: 1,
        placeholder: "Type your reply here...",
        default: undefined,
      },
      parse: function (value: string): string {
        return value;
      },
    },
    parameterOverrides: {
      name: "Parameter Overrides",
      description:
        "Custom parameter overrides for agent configuration. These override the default agent settings.",
      validationSchema: /.*/,
      errorMessage: "Invalid parameter overrides",
      required: false,
      input: {
        type: "custom",
        tag: "agent-overrides",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {},"groups":["system"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "send_sms_reply_v2" };
