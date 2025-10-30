
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Send SMS Notification","id":"send_s_m_s_notification","descripition":"Sends an SMS message to a specified phone number with customizable content","inputSchema": {
    to: {
      name: "To",
      description: "Phone number to send the SMS to",
      validationSchema: /^\+?[1-9]\d{1,14}$/,
      errorMessage: "Please enter a valid phone number",
      required: true,
      input: {
        type: "text",
        placeholder: "+15551234567",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    body: {
      name: "Message",
      description: "The content of the SMS message",
      validationSchema: /^[\s\S]{1,1600}$/,
      errorMessage: "Please enter a valid message (maximum 1600 characters)",
      required: true,
      input: {
        type: "textarea",
        maxLength: 1600,
        minLength: 1,
        placeholder: "Enter your message here",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {},"groups":["Communication","SMS"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false} as Node;

export { node as "send_s_m_s_notification" };
