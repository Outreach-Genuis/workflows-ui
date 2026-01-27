
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Estimate","id":"on_new_estimate_service_titan","descripition":"Triggers when a new estimate is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The unique identifier for the estimate",
      example: 12345,
      validator: (value: any) => typeof value === "number",
    },
    jobId: {
      name: "Job ID",
      description: "The ID of the job associated with the estimate, if any",
      example: 67890,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    projectId: {
      name: "Project ID",
      description: "The ID of the project associated with the estimate, if any",
      example: 54321,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    locationId: {
      name: "Location ID",
      description:
        "The ID of the location associated with the estimate, if any",
      example: 98765,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    customerId: {
      name: "Customer ID",
      description:
        "The ID of the customer associated with the estimate, if any",
      example: 11223,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    name: {
      name: "Name",
      description: "The name of the estimate",
      example: "Estimate for AC Repair",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    jobNumber: {
      name: "Job Number",
      description: "The job number associated with the estimate, if any",
      example: "JOB-001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    status: {
      name: "Status",
      description: "The status of the estimate",
      example: { value: 1, name: "Draft" },
      validator: (value: any) => typeof value === "object" || value === null,
    },
    reviewStatus: {
      name: "Review Status",
      description: "The review status of the estimate",
      example: "NeedsApproval",
      validator: (value: any) =>
        ["None", "NeedsApproval", "Approved", "NotApproved"].includes(value) ||
        value === null,
    },
    summary: {
      name: "Summary",
      description: "A brief summary of the estimate",
      example: "This estimate covers the cost of AC repair.",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    createdOn: {
      name: "Created On",
      description: "The date and time when the estimate was created",
      example: "2023-10-05T14:48:00.000Z",
      validator: (value: any) => true,
    },
    modifiedOn: {
      name: "Modified On",
      description: "The date and time when the estimate was last modified",
      example: "2023-10-06T10:15:00.000Z",
      validator: (value: any) => true,
    },
    soldOn: {
      name: "Sold On",
      description:
        "The date and time when the estimate was sold, if applicable",
      example: "2023-10-07T09:00:00.000Z",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    soldBy: {
      name: "Sold By",
      description: "The ID of the user who sold the estimate, if applicable",
      example: 33445,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    active: {
      name: "Active",
      description:
        "Indicates whether the estimate is active or has been archived",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
    subtotal: {
      name: "Subtotal",
      description: "The subtotal amount of the estimate",
      example: 1500.75,
      validator: (value: any) => typeof value === "number",
    },
    tax: {
      name: "Tax",
      description: "The tax amount applied to the estimate",
      example: 120.06,
      validator: (value: any) => typeof value === "number",
    },
    businessUnitId: {
      name: "Business Unit ID",
      description:
        "The ID of the business unit associated with the estimate, if any",
      example: 55667,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    businessUnitName: {
      name: "Business Unit Name",
      description:
        "The name of the business unit associated with the estimate, if any",
      example: "HVAC Services",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    isRecommended: {
      name: "Is Recommended",
      description: "Indicates whether the estimate is a recommended option",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
    budgetCodeId: {
      name: "Budget Code ID",
      description:
        "The ID of the budget code associated with the estimate, if any",
      example: 77889,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    isChangeOrder: {
      name: "Is Change Order",
      description:
        "Indicates whether the estimate is a change order to an existing job or project",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_estimate_service_titan" };
