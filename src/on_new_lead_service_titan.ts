
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Lead","id":"on_new_lead_service_titan","descripition":"Triggers when a new lead is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The ID of the lead",
      example: 123,
      validator: (value: any) => typeof value === "number",
    },
    status: {
      name: "Status",
      description: "The status of the lead",
      example: "New",
      validator: (value: any) => typeof value === "string",
    },
    priority: {
      name: "Priority",
      description: "The priority of the lead",
      example: "High",
      validator: (value: any) => typeof value === "string",
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the customer associated with the lead",
      example: 456,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    locationId: {
      name: "Location ID",
      description: "The ID of the location associated with the lead",
      example: 789,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    businessUnitId: {
      name: "Business Unit ID",
      description: "The ID of the business unit associated with the lead",
      example: 101,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    jobTypeId: {
      name: "Job Type ID",
      description: "The ID of the job type associated with the lead",
      example: 202,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    campaignId: {
      name: "Campaign ID",
      description: "The ID of the campaign associated with the lead",
      example: 303,
      validator: (value: any) => typeof value === "number",
    },
    followUpDate: {
      name: "Follow Up Date",
      description: "The follow-up date for the lead",
      example: "2023-10-01T10:00:00Z",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    createdById: {
      name: "Created By ID",
      description: "The ID of the user who created the lead",
      example: 404,
      validator: (value: any) => typeof value === "number",
    },
    createdOn: {
      name: "Created On",
      description: "The date and time when the lead was created",
      example: "2023-10-01T09:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    modifiedOn: {
      name: "Modified On",
      description: "The date and time when the lead was last modified",
      example: "2023-10-01T09:30:00Z",
      validator: (value: any) => typeof value === "string",
    },
    tagTypeIds: {
      name: "Tag Type IDs",
      description: "The tag type IDs associated with the lead",
      example: [1, 2, 3],
      validator: (value: any) =>
        (Array.isArray(value) &&
          value.every((item) => typeof item === "number")) ||
        value === null,
    },
    dismissingReasonId: {
      name: "Dismissing Reason ID",
      description: "The ID of the reason for dismissing the lead",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    summary: {
      name: "Summary",
      description: "A brief summary of the lead",
      example: "Customer interested in HVAC services.",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    callReasonId: {
      name: "Call Reason ID",
      description: "The ID of the reason for the call associated with the lead",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    callId: {
      name: "Call ID",
      description: "The ID of the call associated with the lead",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    bookingId: {
      name: "Booking ID",
      description: "The ID of the booking associated with the lead",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    manualCallId: {
      name: "Manual Call ID",
      description: "The ID of the manual call associated with the lead",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    leadUrl: {
      name: "Lead URL",
      description: "The URL of the lead in ServiceTitan",
      example: "https://app.servicetitan.com/leads/123",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadCustomerName: {
      name: "Lead Customer Name",
      description: "The name of the customer associated with the lead",
      example: "Jane Smith",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadPhone: {
      name: "Lead Phone",
      description: "The phone number of the lead",
      example: "555-123-4567",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadEmail: {
      name: "Lead Email",
      description: "The email address of the lead",
      example: "johndoe@email.com",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadStreet: {
      name: "Lead Street",
      description: "The street address of the lead",
      example: "123 Main St",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadUnit: {
      name: "Lead Unit",
      description: "The unit or apartment number of the lead",
      example: "Apt 4B",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadCity: {
      name: "Lead City",
      description: "The city of the lead",
      example: "Springfield",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadState: {
      name: "Lead State",
      description: "The state of the lead",
      example: "IL",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadZip: {
      name: "Lead ZIP Code",
      description: "The ZIP code of the lead",
      example: "62704",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    leadCountry: {
      name: "Lead Country",
      description: "The country of the lead",
      example: "USA",
      validator: (value: any) => typeof value === "string" || value === null,
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_lead_service_titan" };
