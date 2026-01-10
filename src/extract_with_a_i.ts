
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Extract With AI","id":"extract_with_a_i","descripition":"Extracts specific information from text using AI analysis based on provided instructions","inputSchema": {
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
    description: {
      name: "Extraction Description",
      description: "Describe what information to extract from the raw text",
      validationSchema: /.*/,
      errorMessage: "Description must be a string",
      required: true,
      input: {
        type: "textarea",
        maxLength: 10000,
        minLength: 1,
        placeholder:
          "Describe what to extract (e.g., 'Extract the name, email, and phone number')",
      },
      parse: (value: string): string => value,
    },
  },"outputSchema": {
    extractedData: {
      name: "Extracted Data",
      description: "The data extracted from the raw text",
      example: "Extracted information",
      validator: (value: any): boolean => typeof value === "string",
    },
  },"groups":["Data","AI"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "extract_with_a_i" };
