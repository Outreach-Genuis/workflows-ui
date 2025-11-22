
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Call","id":"on_new_call_service_titan","descripition":"Triggers when a new call is created in ServiceTitan","inputSchema": {},"outputSchema": {
    createdOn: {
      name: "Created On",
      description: "The date and time when the call was created",
      example: "2023-10-05T14:48:00.000Z",
      validator: (value: any) => true,
    },
    active: {
      name: "Active",
      description: "Indicates if the call is active",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
    id: {
      name: "ID",
      description: "The unique identifier for the call",
      example: 12345,
      validator: (value: any) => typeof value === "number",
    },
    receivedOn: {
      name: "Received On",
      description: "The date and time when the call was received",
      example: "2023-10-05T14:48:00.000Z",
      validator: (value: any) => true,
    },
    duration: {
      name: "Duration",
      description: "The duration of the call",
      example: "00:05:30",
      validator: (value: any) => true,
    },
    from: {
      name: "From",
      description: "The caller's phone number",
      example: "+1234567890",
      validator: (value: any) => typeof value === "string",
    },
    to: {
      name: "To",
      description: "The recipient's phone number",
      example: "+0987654321",
      validator: (value: any) => typeof value === "string",
    },
    direction: {
      name: "Direction",
      description: "The direction of the call (inbound/outbound)",
      example: "inbound",
      validator: (value: any) => typeof value === "string",
    },
    callType: {
      name: "Call Type",
      description: "The type of the call",
      example: null,
      validator: (value: any) => typeof value === "string" || value === null,
    },
    reasonId: {
      name: "Reason ID",
      description: "The ID of the reason for the call",
      example: 1,
      validator: (value: any) => typeof value === "number",
    },
    reasonName: {
      name: "Reason Name",
      description: "The name of the reason for the call",
      example: "General Inquiry",
      validator: (value: any) => typeof value === "string",
    },
    reasonLead: {
      name: "Reason Lead",
      description: "Indicates if the reason is a lead",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
    reasonActive: {
      name: "Reason Active",
      description: "Indicates if the reason is active",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
    recordingUrl: {
      name: "Recording URL",
      description: "The URL of the call recording",
      example: "https://example.com/recording.mp3",
      validator: (value: any) => typeof value === "string",
    },
    voiceMailUrl: {
      name: "Voice Mail URL",
      description: "The URL of the voicemail",
      example: "https://example.com/voicemail.mp3",
      validator: (value: any) => typeof value === "string",
    },
    createdById: {
      name: "Created By ID",
      description: "The ID of the user who created the call record",
      example: 67890,
      validator: (value: any) => typeof value === "number",
    },
    createdByName: {
      name: "Created By Name",
      description: "The name of the user who created the call record",
      example: "John Doe",
      validator: (value: any) => typeof value === "string",
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the associated customer",
      example: 54321,
      validator: (value: any) => typeof value === "number",
    },
    customerName: {
      name: "Customer Name",
      description: "The name of the associated customer",
      example: "Acme Corp",
      validator: (value: any) => typeof value === "string",
    },
    campaignId: {
      name: "Campaign ID",
      description: "The ID of the associated campaign",
      example: 98765,
      validator: (value: any) => typeof value === "number",
    },
    campaignName: {
      name: "Campaign Name",
      description: "The name of the associated campaign",
      example: "Spring Sale",
      validator: (value: any) => typeof value === "string",
    },
    modifiedOn: {
      name: "Modified On",
      description: "The date and time when the call record was last modified",
      example: "2023-10-06T10:15:00.000Z",
      validator: (value: any) => true,
    },
    agentId: {
      name: "Agent ID",
      description: "The ID of the agent who handled the call",
      example: 11223,
      validator: (value: any) => typeof value === "number",
    },
    agentName: {
      name: "Agent Name",
      description: "The name of the agent who handled the call",
      example: "Jane Smith",
      validator: (value: any) => typeof value === "string",
    },
    agentExternalId: {
      name: "Agent External ID",
      description: "The external ID of the agent",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    sid: {
      name: "SID",
      description: "The SID of the call",
      example: null,
      validator: (value: any) => typeof value === "string" || value === null,
    },
    tags: {
      name: "Tags",
      description: "Tags associated with the call",
      example: ["important", "follow-up"],
      validator: (value: any) =>
        Array.isArray(value) ||
        value === null ||
        (typeof value === "string" && value.length === 0),
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_call_service_titan" };
