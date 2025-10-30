
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Check Condition","id":"checkcondition","descripition":"Evaluates a condition comparing values with various operators, including AI-powered question answering","inputSchema": {
    value: {
      name: "Value",
      description: "The value to check against a condition",
      validationSchema: /.*/,
      errorMessage: "Please provide a valid value",
      required: true,
      input: {
        type: "text",
        placeholder: "Value to check",
      },
      parse: function (value: string) {
        // Try to parse as Date
        try {
          const date = new Date(value);
          if (!isNaN(date.getTime())) {
            return date;
          }
        } catch (e) {
          // Not a valid date, proceed to other checks
        }
        // Try to parse as number
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          return numValue;
        }
        // Try to parse as boolean
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        // Try to parse as JSON array
        if (value.startsWith("[") && value.endsWith("]")) {
          try {
            const arr = JSON.parse(value);
            if (Array.isArray(arr)) {
              return arr;
            }
          } catch (e) {
            // Not a valid JSON array, proceed to return as string
          }
        }
        // Return as string
        return value;
      },
    },
    condition: {
      name: "Condition",
      description: "The type of comparison to perform",
      validationSchema: /.*/,
      errorMessage: "Please select a valid condition",
      required: true,
      input: {
        type: "select",
        options: [
          { label: "Equals", value: "equals" },
          { label: "Not Equals", value: "not_equals" },
          { label: "Greater Than", value: "greater_than" },
          { label: "Less Than", value: "less_than" },
          { label: "Contains", value: "contains" },
          { label: "Not Contains", value: "not_contains" },
          { label: "In", value: "in" },
          { label: "Not In", value: "not_in" },
          { label: "Ask Question AI", value: "ask_question_ai" },
        ],
      },
      parse: function (
        value: string,
      ):
        | "equals"
        | "not_equals"
        | "greater_than"
        | "less_than"
        | "contains"
        | "not_contains"
        | "in"
        | "not_in"
        | "ask_question_ai" {
        if (
          [
            "equals",
            "not_equals",
            "greater_than",
            "less_than",
            "contains",
            "not_contains",
            "in",
            "not_in",
            "ask_question_ai",
          ].includes(value)
        ) {
          return value as
            | "equals"
            | "not_equals"
            | "greater_than"
            | "less_than"
            | "contains"
            | "not_contains"
            | "in"
            | "not_in"
            | "ask_question_ai";
        }
        throw new Error("Invalid condition");
      },
    },
    compareTo: {
      name: "Compare To",
      description: "The value to compare against",
      validationSchema: /.*/,
      errorMessage: "Please provide a valid comparison value",
      required: true,
      input: {
        type: "text",
        placeholder: "Value to compare against",
      },
      parse: function (value: string): string | number | boolean | string[] {
        // try to parse as JSON array
        if (value.startsWith("[") && value.endsWith("]")) {
          try {
            const arr = JSON.parse(value);
            if (Array.isArray(arr)) {
              return arr;
            }
          } catch (e) {
            // Not a valid JSON array, proceed to other checks
          }
        }
        // Try to parse as number
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          return numValue;
        }
        // Try to parse as boolean
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        // Return as string
        return value;
      },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Whether the condition was met",
      validator: (value: any) => typeof value === "boolean",
      example: true,
    },
  },"groups":["Control Flow","Logic"],"branches":{"match":{"name":"Match","description":"Condition matched","id":"match"},"no_match":{"name":"No Match","description":"Condition did not match","id":"no_match"}},"isTriggerNode":false} as Node;

export { node as "checkcondition" };
