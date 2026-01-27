
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan New Payment","id":"on_new_payment_service_titan","descripition":"Triggers when a new payment is created in ServiceTitan","inputSchema": {},"outputSchema": {
    id: {
      name: "ID",
      description: "The ID of the payment",
      example: 123,
      validator: (value: any) => typeof value === "number",
    },
    syncStatus: {
      name: "Sync Status",
      description: "The sync status of the payment",
      example: "Synced",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    referenceNumber: {
      name: "Reference Number",
      description: "The reference number of the payment",
      example: "REF12345",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    date: {
      name: "Date",
      description: "The date of the payment",
      example: "2023-10-01T12:00:00Z",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    type: {
      name: "Type",
      description: "The type of the payment",
      example: "Credit Card",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    typeId: {
      name: "Type ID",
      description: "The type ID of the payment",
      example: "CC",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    total: {
      name: "Total",
      description: "The total amount of the payment",
      example: "100.00",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    unappliedAmount: {
      name: "Unapplied Amount",
      description: "The unapplied amount of the payment",
      example: "0.00",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    memo: {
      name: "Memo",
      description: "The memo of the payment",
      example: "Payment for invoice INV-1001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the customer associated with the payment",
      example: 67890,
      validator: (value: any) => typeof value === "number" || value === null,
    },
    customerName: {
      name: "Customer Name",
      description: "The name of the customer associated with the payment",
      example: "John Doe",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    businessUnitId: {
      name: "Business Unit ID",
      description: "The ID of the business unit associated with the payment",
      example: "BU123",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    businessUnitName: {
      name: "Business Unit Name",
      description: "The name of the business unit associated with the payment",
      example: "Main Office",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    batchId: {
      name: "Batch ID",
      description: "The ID of the batch associated with the payment",
      example: "BATCH001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    batchNumber: {
      name: "Batch Number",
      description: "The number of the batch associated with the payment",
      example: "1001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    createdBy: {
      name: "Created By",
      description: "The user who created the payment",
      example: "admin",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    generalLedgerAccountId: {
      name: "General Ledger Account ID",
      description:
        "The ID of the general ledger account associated with the payment",
      example: "GL123",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    generalLedgerAccountNumber: {
      name: "General Ledger Account Number",
      description:
        "The number of the general ledger account associated with the payment",
      example: "4000",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    generalLedgerAccountName: {
      name: "General Ledger Account Name",
      description:
        "The name of the general ledger account associated with the payment",
      example: "Accounts Receivable",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    appliedTo: {
      name: "Applied To",
      description: "Details of invoices or credits the payment is applied to",
      example: [],
      validator: (value: any) => Array.isArray(value) || value === null,
    },
    customFields: {
      name: "Custom Fields",
      description: "Custom fields associated with the payment",
      example: [],
      validator: (value: any) => Array.isArray(value) || value === null,
    },
    authCode: {
      name: "Auth Code",
      description: "The authorization code for the payment",
      example: "AUTH12345",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    checkNumber: {
      name: "Check Number",
      description: "The check number if the payment was made by check",
      example: "CHK1001",
      validator: (value: any) => typeof value === "string" || value === null,
    },
    modifiedOn: {
      name: "Modified On",
      description: "The date and time when the payment was last modified",
      example: "2023-10-02T15:30:00Z",
      validator: (value: any) => typeof value === "string",
    },
    createdOn: {
      name: "Created On",
      description: "The date and time when the payment was created",
      example: "2023-10-01T12:00:00Z",
      validator: (value: any) => typeof value === "string",
    },
    active: {
      name: "Active",
      description: "Indicates whether the payment is active",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
  },"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_new_payment_service_titan" };
