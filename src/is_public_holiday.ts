
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Is Public Holiday","id":"is_public_holiday","descripition":"Check if current date is a public holiday in the US","inputSchema": {
    holidays: {
      name: "Holidays",
      description: "List of public holidays in the US",
      validationSchema: /.*/,
      errorMessage: "Please provide a valid list of holidays",
      required: true,
      input: {
        type: "multiselect",
        options: [
          { label: "New Year's Day", value: "new_years_day" },
          { label: "Independence Day", value: "independence_day" },
          { label: "Labor Day", value: "labor_day" },
          { label: "Thanksgiving Day", value: "thanksgiving" },
          { label: "Christmas", value: "christmas" },
        ],
      },
      parse: function (
        value: string,
      ): (
        | "new_years_day"
        | "independence_day"
        | "labor_day"
        | "thanksgiving"
        | "christmas"
      )[] {
        console.log("Parsing holidays:", value);
        const parsed = JSON.parse(value) as (
          | "new_years_day"
          | "independence_day"
          | "labor_day"
          | "thanksgiving"
          | "christmas"
        )[];
        console.log("Parsed holidays:", parsed);
        return parsed;
      },
    },
    timeZone: {
      name: "Time Zone",
      description: "Time zone for the date",
      validationSchema: /.*/,
      errorMessage: "Please provide a valid time zone",
      required: true,
      input: {
        type: "select",
        options: [
          { label: "Eastern Time", value: "America/New_York" },
          { label: "Central Time", value: "America/Chicago" },
          { label: "Mountain Time", value: "America/Denver" },
          { label: "Mountain Time (No DST)", value: "America/Phoenix" },
          { label: "Pacific Time", value: "America/Los_Angeles" },
        ],
      },
      parse: function (
        value: string,
      ):
        | "America/New_York"
        | "America/Chicago"
        | "America/Denver"
        | "America/Phoenix"
        | "America/Los_Angeles" {
        console.log("Parsing time zone:", value);
        if (
          [
            "America/New_York",
            "America/Chicago",
            "America/Denver",
            "America/Phoenix",
            "America/Los_Angeles",
          ].includes(value)
        ) {
          return value as
            | "America/New_York"
            | "America/Chicago"
            | "America/Denver"
            | "America/Phoenix"
            | "America/Los_Angeles";
        }
        throw new Error("Invalid time zone");
      },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Indicates if the date is a public holiday",
      required: true,
      example: true,
      validator: (value: unknown) => typeof value === "boolean",
    },
  },"groups":[],"branches":{"match":{"name":"Match","description":"Condition matched","id":"match"},"no_match":{"name":"No Match","description":"Condition did not match","id":"no_match"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "is_public_holiday" };
