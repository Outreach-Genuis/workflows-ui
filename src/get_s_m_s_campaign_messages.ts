
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get SMS Campaign Messages","id":"get_s_m_s_campaign_messages","descripition":"Retrieves all messages from a specific SMS campaign by campaign ID","inputSchema": {
    phone: {
      name: "Phone Number",
      description: "Phone number to retrieve SMS campaign messages for",
      validationSchema: /^\+?[1-9]\d{1,14}$/,
      errorMessage: "Please provide a valid phone number",
      required: true,
      input: {
        type: "text",
        placeholder: "+1234567890",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {
    messages: {
      name: "",
      description: "",
      example: [],
      validator: function (value: string[]): boolean {
        return Array.isArray(value);
      },
    },
  },"groups":["Communication","SMS","Data"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_s_m_s_campaign_messages" };
