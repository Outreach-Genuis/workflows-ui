
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Customer","id":"on_new_customer_service_titan","descripition":"Triggers when a new customer is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The unique identifier for the customer",
      example: 12345,
      validator: (value: any) => typeof value === "number",
    },
    active: {
      name: "Active",
      description: "Indicates if the customer is active",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
    name: {
      name: "Name",
      description: "The full name of the customer",
      example: "John Doe",
      validator: (value: any) => typeof value === "string",
    },
    type: {
      name: "Type",
      description: "The type of customer (e.g., Residential, Commercial)",
      example: "Residential",
      validator: (value: any) => typeof value === "string",
    },
    streetAddress: {
      name: "Street Address",
      description: "The street address of the customer",
      example: "123 Main St",
      validator: (value: any) => typeof value === "string",
    },
    unit: {
      name: "Unit",
      description: "The unit or apartment number of the customer",
      example: "Apt 4B",
      validator: (value: any) =>
        typeof value === "string" || value === null || value === undefined,
    },
    city: {
      name: "City",
      description: "The city of the customer's address",
      example: "Springfield",
      validator: (value: any) => typeof value === "string",
    },
    state: {
      name: "State",
      description: "The state of the customer's address",
      example: "IL",
      validator: (value: any) => typeof value === "string",
    },
    zip: {
      name: "ZIP Code",
      description: "The ZIP code of the customer's address",
      example: "62704",
      validator: (value: any) => typeof value === "string",
    },
    country: {
      name: "Country",
      description: "The country of the customer's address",
      example: "USA",
      validator: (value: any) => typeof value === "string",
    },
    latitude: {
      name: "Latitude",
      description: "The latitude of the customer's location",
      example: 39.7817,
      validator: (value: any) =>
        typeof value === "number" || value === null || value === undefined,
    },
    longitude: {
      name: "Longitude",
      description: "The longitude of the customer's location",
      example: -89.6501,
      validator: (value: any) =>
        typeof value === "number" || value === null || value === undefined,
    },
    customFields: {
      name: "Custom Fields",
      description: "Custom fields associated with the customer",
      example: [
        { typeId: 1, name: "Preferred Contact Method", value: "Email" },
      ],
      validator: (value: any) =>
        Array.isArray(value) &&
        value.every(
          (item) =>
            typeof item.typeId === "number" &&
            (typeof item.name === "string" ||
              item.name === null ||
              item.name === undefined) &&
            (typeof item.value === "string" ||
              item.value === null ||
              item.value === undefined),
        ),
    },
    balance: {
      name: "Balance",
      description: "The current balance of the customer account",
      example: 150.75,
      validator: (value: any) => typeof value === "number",
    },
    taxExempt: {
      name: "Tax Exempt",
      description: "Indicates if the customer is tax exempt",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
    tagTypeIds: {
      name: "Tag Type IDs",
      description: "List of tag type IDs associated with the customer",
      example: [1, 2, 3],
      validator: (value: any) =>
        Array.isArray(value) && value.every((item) => typeof item === "number"),
    },
    doNotMail: {
      name: "Do Not Mail",
      description: "Indicates if the customer has opted out of mailings",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
    doNotService: {
      name: "Do Not Service",
      description: "Indicates if the customer should not be serviced",
      example: false,
      validator: (value: any) => typeof value === "boolean",
    },
    createdOn: {
      name: "Created On",
      description: "The creation timestamp of the customer record",
      example: "2023-10-01T12:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    createdById: {
      name: "Created By ID",
      description: "The ID of the user who created the customer record",
      example: 67890,
      validator: (value: any) => typeof value === "number",
    },
    modifiedOn: {
      name: "Modified On",
      description: "The last modification timestamp of the customer record",
      example: "2023-10-05T15:30:00Z",
      validator: (value: any) => typeof value === "string",
    },
    mergedToId: {
      name: "Merged To ID",
      description:
        "The ID of the customer record this one was merged into, if applicable",
      example: null,
      validator: (value: any) =>
        typeof value === "number" || value === null || value === undefined,
    },
    externalData: {
      name: "External Data",
      description: "External data key-value pairs associated with the customer",
      example: [{ key: "CRM_ID", value: "C12345" }],
      validator: (value: any) =>
        Array.isArray(value) &&
        value.every(
          (item) =>
            typeof item.key === "string" && typeof item.value === "string",
        ),
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_customer_service_titan" };
