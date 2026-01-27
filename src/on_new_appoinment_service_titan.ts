
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Appoinment","id":"on_new_appoinment_service_titan","descripition":"Triggers when a new appointment is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The appointment ID",
      example: 12345,
      validator: (value: any) => typeof value === "number",
    },
    jobId: {
      name: "Job ID",
      description: "The associated job ID",
      example: 67890,
      validator: (value: any) => typeof value === "number",
    },
    appointmentNumber: {
      name: "Appointment Number",
      description: "The appointment number",
      example: "APT-001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    start: {
      name: "Start",
      description: "The start time of the appointment",
      example: "2023-10-01T10:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    end: {
      name: "End",
      description: "The end time of the appointment",
      example: "2023-10-01T11:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    arrivalWindowStart: {
      name: "Arrival Window Start",
      description: "The start of the arrival window",
      example: "2023-10-01T09:30:00Z",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    arrivalWindowEnd: {
      name: "Arrival Window End",
      description: "The end of the arrival window",
      example: "2023-10-01T10:30:00Z",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    status: {
      name: "Status",
      description: "The status of the appointment",
      example: "Scheduled",
      validator: (value: any) => typeof value === "string",
    },
    specialInstructions: {
      name: "Special Instructions",
      description: "Any special instructions for the appointment",
      example: "Customer prefers morning visits",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    createdOn: {
      name: "Created On",
      description: "The creation timestamp of the appointment",
      example: "2023-09-25T08:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    modifiedOn: {
      name: "Modified On",
      description: "The last modification timestamp of the appointment",
      example: "2023-09-26T09:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the associated customer",
      example: 54321,
      validator: (value: any) => typeof value === "number",
    },
    unused: {
      name: "Unused",
      description: "Indicates if the appointment is unused",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
    createdById: {
      name: "Created By ID",
      description: "The ID of the user who created the appointment",
      example: 11223,
      validator: (value: any) => typeof value === "number",
    },
    isConfirmed: {
      name: "Is Confirmed",
      description: "Indicates if the appointment is confirmed",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_appoinment_service_titan" };
