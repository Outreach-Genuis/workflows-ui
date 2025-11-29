
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Repeat Job","id":"repeat_job","descripition":"A description for RepeatJob","inputSchema": {
    repeatType: {
      name: "Repeat Type",
      description: "Type of repetition",
      required: true,
      validationSchema: /^(Hourly|Daily|Weekly|Monthly)$/,
      errorMessage:
        "Repeat Type must be one of: Hourly, Daily, Weekly, Monthly",
      input: {
        type: "select",
        options: [
          {
            label: "Hourly",
            value: "Hourly",
          },
          {
            label: "Daily",
            value: "Daily",
          },
          {
            label: "Weekly",
            value: "Weekly",
          },
          {
            label: "Monthly",
            value: "Monthly",
          },
        ],
      },
      parse: (value: string) =>
        value as "Hourly" | "Daily" | "Weekly" | "Monthly",
    },
    interval: {
      name: "Interval",
      description: "Interval for repetition",
      required: true,
      validationSchema: /^\d+$/,
      errorMessage: "Interval must be a valid number",
      input: {
        type: "number",
        min: 1,
        max: 1000,
      },
      parse: (value: string) => parseInt(value, 10),
    },
  },"outputSchema": {},"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "repeat_job" };
