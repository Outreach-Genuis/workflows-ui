
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Send SMS Reply","id":"send_sms_reply","descripition":"A description for SendSMSReply","inputSchema": {
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
        // Basic validation for phone number format
        if (!value || !/^\+?\d{10,15}$/.test(value)) {
          throw new Error("Invalid phone number format.");
        }
        return value;
      },
    },
    from: {
      name: "Sender Number",
      description: "Phone number from which the SMS reply is sent",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid sender phone number.",
      required: false,
      input: {
        type: "custom",
        tag: "phone-id-selector",
      },
      parse: function (value: string): string {
        return value.trim();
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
  },"outputSchema": {},"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "send_sms_reply" };
