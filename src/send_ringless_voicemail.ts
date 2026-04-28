
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Send Ringless Voicemail","id":"send_ringless_voicemail","descripition":"Drops a voicemail directly into the recipient's inbox via DropCowboy without ringing their phone. Provide the destination phone number, the text to be spoken, and the recipient's postal code.","inputSchema": {
    to: {
      name: "To",
      description: "Phone number to deliver the voicemail to",
      validationSchema: /^(\+?[1-9]\d{1,14})(,\s*\+?[1-9]\d{1,14})*$/,
      errorMessage:
        "Please enter valid phone numbers in E.164 format, separated by commas if multiple",
      required: true,
      input: {
        type: "text",
        placeholder: "+15551234567,+15557654321",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    text: {
      name: "Voicemail Script",
      description:
        "The text that will be converted to speech and left as a voicemail",
      validationSchema: /^[\s\S]{1,1000}$/,
      errorMessage: "Please enter a valid script (maximum 1000 characters)",
      required: true,
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 1,
        placeholder: "Hi, this is ... leave your message text here.",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    postalCode: {
      name: "Postal Code",
      description:
        "Recipient's postal/ZIP code. Used by DropCowboy to pick a regionally appropriate caller ID.",
      validationSchema: /^[A-Za-z0-9\s\-]{3,10}$/,
      errorMessage: "Please enter a valid postal/ZIP code",
      required: true,
      input: {
        type: "text",
        placeholder: "90210",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {
    success: {
      name: "Success",
      description: "Whether the voicemail drop was queued successfully",
      example: true,
      validator: (value: boolean): boolean => typeof value === "boolean",
      required: true,
    },
  },"groups":["system","Communication","Voicemail"],"branches":{"success":{"id":"success","name":"Success","description":"Voicemail drop queued successfully"},"failure":{"id":"failure","name":"Failure","description":"Voicemail drop failed"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "send_ringless_voicemail" };
