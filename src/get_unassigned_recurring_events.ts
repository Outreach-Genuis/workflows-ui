
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Unassigned Recurring Events","id":"get_unassigned_recurring_events","descripition":"A description for GetUnassignedRecurringServiceEvents","inputSchema": {
    nextNDays: {
      name: "Next N Days",
      description: "Number of days ahead to look for unassigned events",
      validationSchema: /^\d+$/,
      errorMessage: "Please enter a valid number of days.",
      input: {
        type: "number",
        min: 1,
        max: 365,
      },
      parse: function (value: string): number {
        return parseInt(value, 10);
      },
      required: true,
    },
  },"outputSchema": {
    eventId: {
      name: "Event ID",
      description: "The unique identifier for the event",
      example: "evt_1234567890",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    serviceId: {
      name: "Service ID",
      description: "The unique identifier for the service",
      example: "svc_0987654321",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    serviceName: {
      name: "Service Name",
      description: "The name of the service",
      example: "Weekly Cleaning",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    eventName: {
      name: "Event Name",
      description: "The name of the event",
      example: "Monday Morning Clean",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    date: {
      name: "Date",
      description: "The date of the event",
      example: "2024-07-01T10:00:00Z",
      validator: function (value: string): boolean {
        return !isNaN(Date.parse(value));
      },
    },
    memo: {
      name: "Memo",
      description: "Additional notes for the event",
      example: "Client prefers eco-friendly products",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    jobSummary: {
      name: "Job Summary",
      description: "A brief summary of the job to be performed",
      example: "Clean kitchen, bathrooms, and living room",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    address: {
      name: "Address",
      description: "The address where the service will be performed",
      example: "123 Main St, Anytown, USA",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    customerId: {
      name: "Customer ID",
      description: "The unique identifier for the customer",
      example: "cust_1122334455",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
  },"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "get_unassigned_recurring_events" };
