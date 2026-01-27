
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Extract Common Field","id":"extract_common_field","descripition":"Extracts common fields like date, email, or phone number from text using predefined patterns.","inputSchema": {
    rawText: {
      name: "Raw Text",
      description: "The text to extract information from",
      validationSchema: /.*/,
      errorMessage: "Raw text must be a string",
      required: true,
      input: {
        type: "textarea",
        maxLength: 10000,
        minLength: 1,
        placeholder: "Enter the text to analyze",
      },
      parse: (value: string): string => value,
    },
    fieldType: {
      name: "Field Type",
      description: "The type of common field to extract",
      validationSchema: /^(date|email|phone|url|ip_address|number)$/,
      errorMessage:
        "Field type must be 'date', 'email', 'phone', 'url', 'ip_address', or 'number'",
      required: true,
      input: {
        type: "select",
        options: [
          { label: "Date", value: "date" },
          { label: "Email", value: "email" },
          { label: "Phone", value: "phone" },
          { label: "URL", value: "url" },
          // { label: "IP Address", value: "ip_address" },
          { label: "Number", value: "number" },
        ],
      },
      parse: (
        value: string,
      ): "date" | "email" | "phone" | "url" | "ip_address" | "number" =>
        value as "date" | "email" | "phone" | "url" | "ip_address" | "number",
    },
  },"outputSchema": {
    extractedData: {
      name: "Extracted Data",
      description:
        "The data extracted from the raw text, formatted consistently",
      example: "Extracted information",
      validator: (value: any): boolean => typeof value === "string",
    },
  },"groups":["Data"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "extract_common_field" };
