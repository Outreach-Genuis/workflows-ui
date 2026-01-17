
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On SMS Received","id":"on_s_m_s_received","descripition":"A description for OnSMSReceived","inputSchema": {},"outputSchema": {
    customerNumber: {
      name: "Customer Number",
      description: "The phone number of the customer who sent the SMS.",
      example: "+1234567890",
      validator: (value: string) =>
        typeof value === "string" && /^\+\d{10,15}$/.test(value),
      required: true,
    },
    messageBody: {
      name: "Message Body",
      description: "The content of the SMS message received.",
      example: "Hello, I need help with my order.",
      validator: (value: string) =>
        typeof value === "string" && value.length > 0,
      required: true,
    },
    agentNumber: {
      name: "Agent Number",
      description: "The phone number of the agent assigned to handle the SMS.",
      example: "+1987654321",
      validator: (value: string) =>
        typeof value === "string" && /^\+\d{10,15}$/.test(value),
      required: true,
    },
  },"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_s_m_s_received" };
