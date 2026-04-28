
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Make Call V2","id":"make_call_v2","descripition":"Places an outbound phone call with agent and phone number auto-inferred by the client. Supports parameter overrides for agent configuration.","inputSchema": {
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
    parameterOverrides: {
      name: "Parameter Overrides",
      description:
        "Custom parameter overrides for agent configuration. These override the default agent settings for this call.",
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
  },"groups":["system","Communication","Phone"],"branches":{"answered":{"id":"answered","name":"Answered","description":"Call was answered by the recipient"},"no_answer":{"id":"no_answer","name":"No Answer","description":"Call was not answered after ringing"},"busy":{"id":"busy","name":"Busy","description":"Recipient's line was busy"},"failed":{"id":"failed","name":"Failed","description":"Call failed to connect due to technical issues"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "make_call_v2" };
