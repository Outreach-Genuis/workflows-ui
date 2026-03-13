
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Process Chat Response V2","id":"get_chat_response_v2","descripition":"Processes a chat message and sends a reply, with agent and channel IDs auto-inferred by the client. Supports parameter overrides for agent configuration.","inputSchema": {
    sessionType: {
      name: "Session Type",
      description: "Type of the chat session",
      validationSchema: /^(sms|email|whatsapp|messenger)$/,
      errorMessage:
        "Session Type must be one of the following: sms, email, whatsapp, messenger.",
      required: true,
      getVisible: () => true,
      input: {
        type: "select",
        options: [
          { label: "SMS", value: "sms" },
          { label: "Email", value: "email" },
          { label: "WhatsApp", value: "whatsapp" },
          { label: "Messenger", value: "messenger" },
        ],
        default: { value: "sms", label: "SMS" },
      },
      parse: (value: string): string => value,
    },
    userMessage: {
      name: "User Message",
      description: "Message from the user",
      validationSchema: /^.{1,1000}$/,
      errorMessage: "Message must be between 1 and 1000 characters.",
      required: true,
      getVisible: () => true,
      input: {
        type: "text",
        maxLength: 1000,
        minLength: 1,
        placeholder: "Type your message",
        default: undefined,
      },
      parse: (value: string): string => value,
    },
    to: {
      name: "Recipient Number",
      description: "Receipient of the message",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid recipient identifier.",
      required: true,
      input: {
        type: "text",
        placeholder: "+1234567890 or abc@email.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
      parseLead: function (lead: Lead): string {
        return lead.phone;
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
  },"outputSchema": {
    reply: {
      name: "Reply",
      description: "The response message from the agent",
      example: "Hello! How can I assist you today?",
      validator: (value: string): boolean =>
        typeof value === "string" && value.length > 0 && value.length <= 1000,
      required: true,
    },
    chatHistory: {
      name: "Full Response",
      description: "The full chat history or response details",
      example: '{"messages":[{"from":"agent","text":"Hello!"}]}',
      validator: (value: string): boolean =>
        typeof value === "string" && value.length > 0,
      required: true,
    },
  },"groups":["system"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_chat_response_v2" };
