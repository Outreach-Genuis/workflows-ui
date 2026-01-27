
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Service Titan Unpaid Invoices","id":"get_service_titan_accounts_receievables","descripition":"Retrieves unpaid invoices from ServiceTitan that are past a specified number of days due.","inputSchema": {
    daysPastDue: {
      name: "Days Past Due",
      description: "Number of days an invoice is past due",
      required: true,
      validationSchema: /^\d+$/,
      errorMessage: "Days Past Due must be a valid number",
      input: {
        type: "number",
        max: 2147483647,
        min: 0,
      },
      parse: (value: string) => parseInt(value, 10),
    },
    // checkEveryNDays: {
    //   name: "Check Every N Days",
    //   description: "Frequency in days to check for unpaid invoices",
    //   required: true,
    //   validationSchema: /^\d+$/,
    //   errorMessage: "Check Every N Days must be a valid number",
    //   input: {
    //     type: "number",
    //     max: 2147483647,
    //     min: 1,
    //   },
    //   parse: (value: string) => parseInt(value, 10),
    // },
  },"outputSchema": {
    invoiceId: {
      name: "Invoice ID",
      description: "The ID of the unpaid invoice",
      example: "INV12345",
      validator: (value: any) => typeof value === "string",
    },
    customerId: {
      name: "Customer ID",
      description: "The ID of the customer associated with the invoice",
      example: "CUST67890",
      validator: (value: any) => typeof value === "string",
    },
    amountDue: {
      name: "Amount Due",
      description: "The total amount due on the invoice",
      example: 250.75,
      validator: (value: any) => typeof value === "number",
    },
    dueDate: {
      name: "Due Date",
      description: "The due date of the invoice",
      example: "2024-12-31",
      validator: (value: any) => typeof value === "string",
    },
    jobDescription: {
      name: "Job Description",
      description: "Description of the job associated with the invoice",
      example: "We went to the customer's location to fix the plumbing issue.",
      validator: (value: any) => typeof value === "string",
    },
    businessUnitId: {
      name: "Business Unit ID",
      description: "The ID of the business unit associated with the invoice",
      example: "BU123",
      validator: (value: any) => typeof value === "string",
    },
    employeeId: {
      name: "Employee ID",
      description: "The ID of the employee who created the invoice",
      example: "EMP456",
      validator: (value: any) => typeof value === "string",
    },
    itemsDescription: {
      name: "Items Description",
      description: "Description of the items or services on the invoice",
      example: "Plumbing repair, parts replacement",
      validator: (value: any) => typeof value === "string",
    },
  },"groups":["ServiceTitan"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "get_service_titan_accounts_receievables" };
