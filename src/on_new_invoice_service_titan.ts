
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Invoice","id":"on_new_invoice_service_titan","descripition":"Triggers when a new invoice is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The unique identifier for the invoice",
      example: 12345,
      validator: (value: any) => typeof value === "number",
    },
    syncStatus: {
      name: "Sync Status",
      description: "The sync status of the invoice",
      example: "Synced",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    referenceNumber: {
      name: "Reference Number",
      description: "The reference number of the invoice",
      example: "INV-1001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    invoiceDate: {
      name: "Invoice Date",
      description: "The date the invoice was created",
      example: "2023-10-01",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    dueDate: {
      name: "Due Date",
      description: "The due date for the invoice",
      example: "2023-10-15",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    total: {
      name: "Total",
      description: "The total amount of the invoice",
      example: "150.00",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    balance: {
      name: "Balance",
      description: "The remaining balance of the invoice",
      example: "50.00",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    invoiceTypeId: {
      name: "Invoice Type ID",
      description: "The type ID of the invoice",
      example: 1,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    invoiceTypeName: {
      name: "Invoice Type Name",
      description: "The type name of the invoice",
      example: "Standard",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the customer associated with the invoice",
      example: 67890,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    customerName: {
      name: "Customer Name",
      description: "The name of the customer associated with the invoice",
      example: "John Doe",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerAddressStreet: {
      name: "Customer Address Street",
      description: "The street address of the customer",
      example: "123 Main St",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerAddressUnit: {
      name: "Customer Address Unit",
      description: "The unit or apartment number of the customer's address",
      example: "Apt 4B",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerAddressCity: {
      name: "Customer Address City",
      description: "The city of the customer's address",
      example: "Springfield",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerAddressState: {
      name: "Customer Address State",
      description: "The state of the customer's address",
      example: "IL",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerAddressZip: {
      name: "Customer Address ZIP Code",
      description: "The ZIP code of the customer's address",
      example: "62704",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerAddressCountry: {
      name: "Customer Address Country",
      description: "The country of the customer's address",
      example: "USA",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    paidOn: {
      name: "Paid On",
      description: "The date the invoice was paid",
      example: "2023-10-10",
      validator: (value: any) => typeof value === "string" || value === null,
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_invoice_service_titan" };
