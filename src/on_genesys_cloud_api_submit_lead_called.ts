
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Submit Lead Called","id":"on_genesys_cloud_api_submit_lead_called","descripition":"Triggers when Submit Lead is called via MCP API (Genesys Cloud API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    appointmentId: {
      name: "appointmentId",
      description: "Input parameter: ID of the selected appointment slot from getAppointmentSlots",
      example: "",
      validator: (value: any) => true,
    },
    notes: {
      name: "notes",
      description: "Input parameter: Additional notes about the job",
      example: "",
      validator: (value: any) => true,
    },
    jobType: {
      name: "jobType",
      description: "Input parameter: Type of painting job: Interior, Exterior, or Both",
      example: "",
      validator: (value: any) => true,
    },
    emailAddress: {
      name: "emailAddress",
      description: "Input parameter: Customer's email address",
      example: "",
      validator: (value: any) => true,
    },
    zipcode: {
      name: "zipcode",
      description: "Input parameter: Zip code for the job location",
      example: "",
      validator: (value: any) => true,
    },
    state: {
      name: "state",
      description: "Input parameter: State for the job location",
      example: "",
      validator: (value: any) => true,
    },
    city: {
      name: "city",
      description: "Input parameter: City for the job location",
      example: "",
      validator: (value: any) => true,
    },
    streetAddress: {
      name: "streetAddress",
      description: "Input parameter: Street address for the job",
      example: "",
      validator: (value: any) => true,
    },
    phoneNumber: {
      name: "phoneNumber",
      description: "Input parameter: Customer's phone number",
      example: "",
      validator: (value: any) => true,
    },
    lastName: {
      name: "lastName",
      description: "Input parameter: Customer's last name",
      example: "",
      validator: (value: any) => true,
    },
    firstName: {
      name: "firstName",
      description: "Input parameter: Customer's first name",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Submit Lead from API Genesys Cloud API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["Genesys Cloud API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_genesys_cloud_api_submit_lead_called" };
