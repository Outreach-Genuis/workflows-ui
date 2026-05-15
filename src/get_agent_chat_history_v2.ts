
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Agent Chat History V2","id":"get_agent_chat_history_v2","descripition":"Retrieves the chat history for an agent and communication channel, with agent and channel IDs auto-inferred by the client. Supports parameter overrides for agent configuration.","inputSchema": {
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
    chatHistory: {
      name: "Full Response",
      description: "The full chat history or response details",
      example: '{"messages":[{"from":"agent","text":"Hello!"}]}',
      validator: (value: string): boolean =>
        typeof value === "string" && value.length > 0,
      required: true,
    },
  },"groups":["system"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_agent_chat_history_v2" };
