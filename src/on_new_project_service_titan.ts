
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Project","id":"on_new_project_service_titan","descripition":"Triggers when a new project is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The ID of the project",
      example: 123,
      validator: (value: any) => typeof value === "number",
    },
    number: {
      name: "Number",
      description: "The project number",
      example: "PRJ-001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    name: {
      name: "Name",
      description: "The name of the project",
      example: "New Project",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    summary: {
      name: "Summary",
      description: "A brief summary of the project",
      example: "This is a summary of the project.",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    status: {
      name: "Status",
      description: "The status of the project",
      example: "In Progress",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    statusId: {
      name: "Status ID",
      description: "The ID of the project's status",
      example: 1,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    subStatus: {
      name: "Sub Status",
      description: "The sub-status of the project",
      example: "On Hold",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    subStatusId: {
      name: "Sub Status ID",
      description: "The ID of the project's sub-status",
      example: 2,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the customer associated with the project",
      example: 456,
      validator: (value: any) => typeof value === "number",
    },
    locationId: {
      name: "Location ID",
      description: "The ID of the location associated with the project",
      example: 789,
      validator: (value: any) => typeof value === "number",
    },
    projectTypeId: {
      name: "Project Type ID",
      description: "The type ID of the project",
      example: 3,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    projectManagerIds: {
      name: "Project Manager IDs",
      description: "The IDs of the project managers",
      example: [101, 102],
      validator: (value: any) =>
        Array.isArray(value) && value.every((item) => typeof item === "number"),
    },
    businessUnitIds: {
      name: "Business Unit IDs",
      description: "The IDs of the business units associated with the project",
      example: [201, 202],
      validator: (value: any) =>
        Array.isArray(value) && value.every((item) => typeof item === "number"),
    },
    startDate: {
      name: "Start Date",
      description: "The start date of the project",
      example: "2023-10-01",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    targetCompletionDate: {
      name: "Target Completion Date",
      description: "The target completion date of the project",
      example: "2023-12-31",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    actualCompletionDate: {
      name: "Actual Completion Date",
      description: "The actual completion date of the project",
      example: "2024-01-15",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    modifiedOn: {
      name: "Modified On",
      description: "The last modification timestamp of the project",
      example: "2023-10-05T14:48:00.000Z",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    createdOn: {
      name: "Created On",
      description: "The creation timestamp of the project",
      example: "2023-10-01T12:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    jobIds: {
      name: "Job IDs",
      description: "List of job IDs associated with the project",
      example: [301, 302, 303],
      validator: (value: any) =>
        Array.isArray(value) && value.every((item) => typeof item === "number"),
    },
    customFields: {
      name: "Custom Fields",
      description: "List of custom fields associated with the project",
      example: [],
      validator: (value: any) => Array.isArray(value) || value === null,
    },
    externalData: {
      name: "External Data",
      description: "List of external data associated with the project",
      example: [],
      validator: (value: any) => Array.isArray(value) || value === null,
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_project_service_titan" };
