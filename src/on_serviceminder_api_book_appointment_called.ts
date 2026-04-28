
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Book Appointment Called","id":"on_serviceminder_api_book_appointment_called","descripition":"Triggers when Book Appointment is called via MCP API (ServiceMinder API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    quantity: {
      name: "quantity",
      description: "Input parameter: Quantity of service",
      example: 0,
      validator: (value: any) => true,
    },
    serviceName: {
      name: "serviceName",
      description: "Input parameter: Name of the service (uses default if not provided)",
      example: "",
      validator: (value: any) => true,
    },
    notes: {
      name: "notes",
      description: "Input parameter: Additional notes for the appointment",
      example: "",
      validator: (value: any) => true,
    },
    duration: {
      name: "duration",
      description: "Input parameter: Duration in minutes",
      example: "",
      validator: (value: any) => true,
    },
    targetDate: {
      name: "targetDate",
      description: "Input parameter: Appointment date and time (YYYY-MM-DD HH:MM)",
      example: "",
      validator: (value: any) => true,
    },
    contactId: {
      name: "contactId",
      description: "Input parameter: Customer's contact ID",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Book Appointment from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_serviceminder_api_book_appointment_called" };
