
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Agent Chat History","id":"get_agent_chat_history","descripition":"Retrieves the chat history for a specific agent and communication channel.","inputSchema": {
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
    fromPhoneNumber: {
      name: "From Phone Number",
      description: "The phone number with which to send the message.",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid phone number.",
      required: false,
      input: {
        type: "custom",
        tag: "phone-id-selector",
      },
      parse: function (value: string): string {
        return value.trim();
      },
      getVisible: (inputValues: Record<string, any>) => {
        return inputValues["sessionType"] === "sms";
      },
    },
    fromEmailAddress: {
      name: "From Email Address",
      description: "The email address with which to send the message.",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid email address.",
      required: false,
      input: {
        type: "custom",
        tag: "email-address-selector",
      },
      parse: function (value: string): string {
        return value.trim();
      },
      getVisible: (inputValues: Record<string, any>) => {
        return inputValues["sessionType"] === "email";
      },
    },
    fromWhatsappNumber: {
      name: "From WhatsApp Number",
      description: "The WhatsApp number with which to send the message.",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid WhatsApp number.",
      required: false,
      input: {
        type: "custom",
        tag: "whatsapp-id-selector",
      },
      parse: function (value: string): string {
        return value.trim();
      },
      getVisible: (inputValues: Record<string, any>) => {
        return inputValues["sessionType"] === "whatsapp";
      },
    },
    fromMessengerId: {
      name: "From Messenger ID",
      description: "The Messenger ID with which to send the message.",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid Messenger ID.",
      required: false,
      input: {
        type: "custom",
        tag: "messenger-id-selector",
      },
      parse: function (value: string): string {
        return value.trim();
      },
      getVisible: (inputValues: Record<string, any>) => {
        return inputValues["sessionType"] === "messenger";
      },
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
  },"outputSchema": {
    chatHistory: {
      name: "Full Response",
      description: "The full chat history or response details",
      example: '{"messages":[{"from":"agent","text":"Hello!"}]}',
      validator: (value: string): boolean =>
        typeof value === "string" && value.length > 0,
      required: true,
    },
  },"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_agent_chat_history" };
