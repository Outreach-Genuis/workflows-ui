
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Check If Invoice Overdue","id":"check_if_invoice_overdue","descripition":"A description for CheckIfInvoiceOverdue","inputSchema": {
    invoiceId: {
      name: "Invoice ID",
      description: "The ID of the invoice to check",
      required: true,
      validationSchema: /.*/,
      errorMessage: "Invoice ID is invalid",
      input: {
        type: "text",
      },
      parse: (value: string) => value,
    },
    maxDaysOverdue: {
      name: "Max Days Overdue",
      description: "Maximum number of days an invoice can be overdue",
      required: true,
      validationSchema: /^\d+$/,
      errorMessage: "Max Days Overdue must be a valid number",
      input: {
        type: "number",
        max: 2147483647,
        min: 0,
      },
      parse: (value: string) => parseInt(value, 10),
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Indicates if the invoice is overdue",
      example: true,
      validator: (value: any) => typeof value === "boolean",
    },
  },"groups":[],"branches":{"overdue":{"id":"overdue","name":"Overdue","description":"The invoice is overdue"},"not_overdue":{"id":"not_overdue","name":"Not Overdue","description":"The invoice is not overdue"},"invoice_not_found":{"id":"invoice_not_found","name":"Invoice Not Found","description":"The specified invoice was not found"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "check_if_invoice_overdue" };
