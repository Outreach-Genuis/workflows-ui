
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Chat Response","id":"get_chat_response","descripition":"Retrieves a response from a chat agent based on user input","inputSchema": {
    sessionId: {
      name: "Session ID",
      description: "Unique identifier for the chat session",
      validationSchema: /^.{1,64}$/,
      errorMessage: "Session ID must be valid; between 1 and 64 characters.",
      required: true,
      getVisible: () => true,
      input: {
        type: "text",
        maxLength: 64,
        minLength: 1,
        placeholder: "Enter session ID",
        default: undefined,
      },
      parse: (value: string): string => value.trim(),
    },
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
    agentId: {
      name: "Agent",
      description: "The agent who will handle the call",
      validationSchema: /.*/,
      errorMessage:
        "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
      required: true,
      input: {
        type: "custom",
        tag: "agent-selector",
        options: {
          allowCreate: true,
        },
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
  },"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_chat_response" };
