
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Job","id":"on_new_job_service_titan","descripition":"Triggers when a new job is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The job ID",
      example: 12345,
      validator: (value: any) => typeof value === "number",
    },
    jobNumber: {
      name: "Job Number",
      description: "The job number",
      example: "J-1001",
      validator: (value: any) => typeof value === "string",
    },
    projectId: {
      name: "Project ID",
      description: "The associated project ID, if any",
      example: 67890,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the customer associated with the job",
      example: 54321,
      validator: (value: any) => typeof value === "number",
    },
    locationId: {
      name: "Location ID",
      description: "The ID of the location associated with the job",
      example: 98765,
      validator: (value: any) => typeof value === "number",
    },
    jobStatus: {
      name: "Job Status",
      description: "The current status of the job",
      example: "Completed",
      validator: (value: any) => typeof value === "string",
    },
    completedOn: {
      name: "Completed On",
      description:
        "The date and time when the job was completed, if applicable",
      example: "2023-10-01T15:30:00Z",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    businessUnitId: {
      name: "Business Unit ID",
      description: "The ID of the business unit associated with the job",
      example: 11223,
      validator: (value: any) => typeof value === "number",
    },
    jobTypeId: {
      name: "Job Type ID",
      description: "The ID of the job type",
      example: 33445,
      validator: (value: any) => typeof value === "number",
    },
    priority: {
      name: "Priority",
      description: "The priority level of the job",
      example: "High",
      validator: (value: any) => typeof value === "string",
    },
    campaignId: {
      name: "Campaign ID",
      description: "The ID of the campaign associated with the job",
      example: 55667,
      validator: (value: any) => typeof value === "number",
    },
    appointmentCount: {
      name: "Appointment Count",
      description: "The number of appointments associated with the job",
      example: 2,
      validator: (value: any) => typeof value === "number",
    },
    firstAppointmentId: {
      name: "First Appointment ID",
      description: "The ID of the first appointment associated with the job",
      example: 77889,
      validator: (value: any) => typeof value === "number",
    },
    lastAppointmentId: {
      name: "Last Appointment ID",
      description: "The ID of the last appointment associated with the job",
      example: 99001,
      validator: (value: any) => typeof value === "number",
    },
    recallForId: {
      name: "Recall For ID",
      description: "The ID of the job this job is a recall for, if applicable",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    warrantyId: {
      name: "Warranty ID",
      description: "The ID of the warranty associated with the job, if any",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    jobGeneratedLeadSource: {
      name: "Job Generated Lead Source",
      description:
        "Details about the lead source that generated the job, if applicable",
      example: null,
      validator: (value: any) => typeof value === "object" || value === null,
    },
    noCharge: {
      name: "No Charge",
      description: "Indicates if the job is marked as no charge",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
    notificationsEnabled: {
      name: "Notifications Enabled",
      description: "Indicates if notifications are enabled for the job",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
    createdOn: {
      name: "Created On",
      description: "The creation timestamp of the job record",
      example: "2023-10-01T12:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    createdById: {
      name: "Created By ID",
      description: "The ID of the user who created the job record",
      example: 22334,
      validator: (value: any) => typeof value === "number",
    },
    modifiedOn: {
      name: "Modified On",
      description: "The last modification timestamp of the job record",
      example: "2023-10-05T15:30:00Z",
      validator: (value: any) => typeof value === "string",
    },
    tagTypeIds: {
      name: "Tag Type IDs",
      description: "List of tag type IDs associated with the job",
      example: [1, 2, 3],
      validator: (value: any) =>
        Array.isArray(value) && value.every((item) => typeof item === "number"),
    },
    leadCallId: {
      name: "Lead Call ID",
      description: "The ID of the lead call associated with the job, if any",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    partnerLeadCallId: {
      name: "Partner Lead Call ID",
      description:
        "The ID of the partner lead call associated with the job, if any",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    bookingId: {
      name: "Booking ID",
      description: "The ID of the booking associated with the job, if any",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    soldById: {
      name: "Sold By ID",
      description: "The ID of the user who sold the job, if applicable",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    customerPo: {
      name: "Customer PO",
      description:
        "The customer purchase order associated with the job, if any",
      example: "PO-12345",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    invoiceId: {
      name: "Invoice ID",
      description: "The ID of the invoice associated with the job",
      example: 44556,
      validator: (value: any) => typeof value === "number",
    },
    membershipId: {
      name: "Membership ID",
      description: "The ID of the membership associated with the job, if any",
      example: null,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    total: {
      name: "Total",
      description: "The total amount for the job, if available",
      example: 250.75,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    summary: {
      name: "Summary",
      description: "A brief summary of the job",
      example: "AC repair and maintenance",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customFields: {
      name: "Custom Fields",
      description: "Custom fields associated with the job",
      example: [{ fieldId: 1, value: "Custom Value" }],
      validator: (value: any) =>
        Array.isArray(value) &&
        value.every(
          (item) =>
            typeof item.fieldId === "number" &&
            (typeof item.value === "string" ||
              item.value === null ||
              item.value === undefined),
        ),
    },
    externalData: {
      name: "External Data",
      description: "External data associated with the job",
      example: [{ source: "API", data: "Some external data" }],
      validator: (value: any) =>
        Array.isArray(value) &&
        value.every(
          (item) =>
            typeof item.source === "string" &&
            (typeof item.data === "string" ||
              item.data === null ||
              item.data === undefined),
        ),
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_job_service_titan" };
