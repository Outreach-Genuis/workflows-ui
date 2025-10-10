
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Process Variable","id":"process_variable","descripition":"Processes a variable with various string, number, and JSON operations","inputSchema": {
    value: {
      name: "Value",
      description: "The value to process",
      validationSchema: /.*/,
      errorMessage: "Please provide a valid value",
      required: true,
      input: {
        type: "text",
        placeholder: "Value to process",
      },
      parse: function (value: string): string {
        return value;
      },
    },
    operation: {
      name: "Operation",
      description: "The type of operation to perform on the value",
      validationSchema: /.*/,
      errorMessage: "Please select a valid operation",
      required: true,
      input: {
        type: "select",
        options: [
          { label: "To Uppercase", value: "to_uppercase" },
          { label: "To Lowercase", value: "to_lowercase" },
          { label: "Capitalize", value: "capitalize" },
          { label: "Trim", value: "trim" },
          { label: "Substring", value: "substring" },
          { label: "Replace", value: "replace" },
          { label: "Split", value: "split" },
          { label: "Join", value: "join" },
          { label: "Length", value: "length" },
          { label: "Number Operation", value: "number_operation" },
          { label: "Parse JSON", value: "parse_json" },
          { label: "Stringify JSON", value: "stringify_json" },
        ],
      },
      parse: function (value: string): any {
        return value;
      },
    },
    additionalValue: {
      name: "Additional Value",
      description:
        "Additional value needed for operations like replace, split, join, etc.",
      validationSchema: /.*/,
      getVisible: (currentValues: Record<string, any>) => {
        const op = currentValues["operation"];
        return (
          op === "replace" ||
          op === "split" ||
          op === "join" ||
          op === "number_operation"
        );
      },
      errorMessage: "Please provide a valid value",
      required: false,
      input: {
        type: "text",
        placeholder: "Additional value",
      },
      parse: function (value: string): string {
        return value;
      },
    },
    startIndex: {
      name: "Start Index",
      description: "Starting index for operations like substring",
      validationSchema: /^\d+$/,
      errorMessage: "Please provide a valid number",
      getVisible: (currentValues: Record<string, any>) => {
        return currentValues["operation"] === "substring";
      },
      required: false,
      input: {
        type: "number",
        min: 0,
        max: 1000000,
      },
      parse: function (value: string): number {
        return parseInt(value, 10);
      },
    },
    endIndex: {
      name: "End Index",
      description: "Ending index for operations like substring",
      validationSchema: /^\d+$/,
      errorMessage: "Please provide a valid number",
      getVisible: (currentValues: Record<string, any>) => {
        return currentValues["operation"] === "substring";
      },
      required: false,
      input: {
        type: "number",
        min: 0,
        max: 1000000,
      },
      parse: function (value: string): number {
        return parseInt(value, 10);
      },
    },
    mathOperation: {
      name: "Math Operation",
      description: "Type of mathematical operation to perform",
      validationSchema: /.*/,
      getVisible: (currentValues: Record<string, any>) => {
        return currentValues["operation"] === "number_operation";
      },
      errorMessage: "Please select a valid math operation",
      required: false,
      input: {
        type: "select",
        options: [
          { label: "Add", value: "add" },
          { label: "Subtract", value: "subtract" },
          { label: "Multiply", value: "multiply" },
          { label: "Divide", value: "divide" },
          { label: "Modulo", value: "modulo" },
          { label: "Round", value: "round" },
          { label: "Floor", value: "floor" },
          { label: "Ceiling", value: "ceil" },
        ],
      },
      parse: function (value: string): any {
        return value;
      },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "The result of the processing operation",
      validator: (value: any) => true, // Accept any type based on the operation
      example: "processed result",
    },
  },"groups":["Data Processing","Utilities"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"},"error":{"id":"error","name":"Error","description":"An error occurred during execution"}},"isTriggerNode":false} as Node;

export { node as "process_variable" };
