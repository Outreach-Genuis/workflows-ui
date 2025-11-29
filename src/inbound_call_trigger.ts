
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Inbound Call Trigger","id":"inbound_call_trigger","descripition":"Triggers a workflow when an inbound call is received, providing caller details and call transcription","inputSchema": {},"outputSchema": {
    phone: {
      name: "Phone Number",
      description: "The phone number of the inbound caller",
      example: "+14155552671",
      validator: function (value: string): boolean {
        // Simple phone validation - checks if it starts with + and contains 10-15 digits
        return /^\+[0-9]{10,15}$/.test(value);
      },
    },
    transcription: {
      name: "Call Transcription",
      description: "The transcribed text from the inbound call",
      example: "Hello, I'm calling about your services.",
      validator: function (value: string): boolean {
        // Ensure the transcription is not empty and has a reasonable length
        return value.trim().length > 0 && value.length <= 10000;
      },
    },
    recordingUrl: {
      name: "Recording URL",
      description: "URL to access the call recording",
      example: "https://example.com/recordings/call12345.mp3",
      validator: function (value: string): boolean {
        // Simple URL validation
        return /^https?:\/\/[^\s$.?#].[^\s]*$/.test(value);
      },
    },
  },"groups":["Triggers","Communication","Phone"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "inbound_call_trigger" };
