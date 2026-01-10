
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Make Call","id":"make_call","descripition":"Places an outbound phone call to the specified number with customizable script and voice options","inputSchema": {
    phone: {
      name: "Phone Number",
      description:
        "The phone number to call in E.164 format (e.g., +15551234567)",
      validationSchema: /^\+[1-9]\d{1,14}$/,
      errorMessage:
        "Please enter a valid phone number in E.164 format (e.g., +15551234567)",
      required: true,
      input: {
        type: "text",
        placeholder: "+15551234567",
      },
      parse: function (value: string): string {
        return value.trim();
      },
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
    phoneNumberSource: {
      name: "Phone Number Source",
      description:
        "The source of the phone number to use for the outbound call",
      validationSchema: /^(og-pool|bought-random|bought-specific)$/,
      errorMessage:
        "Phone number source must be one of: og-pool, bought-random, bought-specific",
      required: false,
      input: {
        type: "select",
        options: [
          { label: "Pool of Outreachgenius Numbers", value: "og-pool" },
          { label: "Bought Random", value: "bought-random" },
          { label: "Bought Specific", value: "bought-specific" },
        ],
      },
      parse: function (
        value: string,
      ): "og-pool" | "bought-random" | "bought-specific" {
        return value as "og-pool" | "bought-random" | "bought-specific";
      },
    },
    specificBoughtNumberId: {
      name: "Specific Bought Number ID",
      description:
        "The ID of the specific bought number to use if 'Bought Specific' is selected as the source",
      validationSchema: /.*/,
      errorMessage:
        "Specific Bought Number ID must be 3-30 alphanumeric characters, underscores, or hyphens",
      required: false,
      input: {
        type: "custom",
        tag: "phone-id-selector",
      },
      parse: function (value: string): string {
        return value.trim();
      },
      getVisible: (inputs: any) => {
        return inputs.phoneNumberSource === "bought-specific";
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
        maxLength: 5000,
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {
    transcription: {
      name: "Call Transcription",
      description: "The transcribed content of the call",
      example: "Hello, this is John speaking. I'm calling about...",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    callResult: {
      name: "Call Result",
      description: "The status or outcome of the call attempt",
      example: "answered",
      validator: function (
        value: "answered" | "no_answer" | "busy" | "failed",
      ): boolean {
        return ["answered", "no_answer", "busy", "failed"].includes(value);
      },
    },
    recordingUrl: {
      name: "Recording URL",
      description: "URL to access the call recording",
      example: "https://example.com/recordings/call12345.mp3",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.startsWith("http");
      },
    },
  },"groups":["Communication","Phone"],"branches":{"answered":{"id":"answered","name":"Answered","description":"Call was answered by the recipient"},"no_answer":{"id":"no_answer","name":"No Answer","description":"Call was not answered after ringing"},"busy":{"id":"busy","name":"Busy","description":"Recipient's line was busy"},"failed":{"id":"failed","name":"Failed","description":"Call failed to connect due to technical issues"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "make_call" };
