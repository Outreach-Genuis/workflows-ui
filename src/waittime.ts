
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Wait Time","id":"waittime","descripition":"Pauses the workflow execution for a specified duration before proceeding to the next step","inputSchema": {
    waitType: {
      name: "Wait Type",
      description: "Choose how to specify the wait time",
      validationSchema: /^(duration|datetime|specificHour)$/,
      errorMessage: "Invalid wait type",
      required: true,
      input: {
        type: "select",
        options: [
          { label: "Duration", value: "duration" },
          { label: "Until Datetime", value: "datetime" },
          { label: "Specific Hour", value: "specificHour" },
        ],
      },
      parse: function (value: string): string {
        return value;
      },
    },
    duration: {
      name: "Duration",
      description: "Amount of time to wait (used when Wait Type is Duration)",
      validationSchema: /^\d+$/,
      errorMessage: "Duration must be a positive number",
      required: false,
      input: {
        type: "number",
        min: 1,
        max: 1000, // Reasonable max value that works with different units
      },
      parse: function (value: string): number {
        const parsed = Number(value);
        if (isNaN(parsed) || parsed < 0) {
          throw new Error("Duration must be a positive number");
        }
        return parsed;
      },
    },
    unit: {
      name: "Time Unit",
      description:
        "Unit of time for the duration (used when Wait Type is Duration)",
      validationSchema: /^(minutes|hours|days)$/,
      errorMessage: "Invalid time unit",
      required: false,
      input: {
        type: "select",
        options: [
          { label: "Minutes", value: "minutes" },
          { label: "Hours", value: "hours" },
          { label: "Days", value: "days" },
        ],
      },
      parse: function (value: string): string {
        return value;
      },
    },
    targetDatetime: {
      name: "Target Datetime",
      getVisible: (inputValues) => {
        return inputValues.waitType === "datetime";
      },
      description:
        "The specific date and time to wait until (ISO format, used when Wait Type is Until Datetime)",
      validationSchema:
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/,
      errorMessage:
        "Invalid datetime format. Please use ISO format (YYYY-MM-DDThh:mm:ss.sssZ)",
      required: false,
      input: {
        type: "datetime",
      },
      parse: function (value: string): string {
        // Check if it's a valid date
        const date = new Date(value);
        if (isNaN(date.getTime())) {
          throw new Error("Invalid date format");
        }
        return value;
      },
    },
    daysFromNow: {
      name: "Days From Now",
      getVisible: (inputValues) => {
        return inputValues.waitType === "specificHour";
      },
      description:
        "Number of days from now (used when Wait Type is Specific Hour)",
      validationSchema: /^\d+$/,
      errorMessage: "Days must be a non-negative number",
      required: false,
      input: {
        type: "number",
        min: 0,
        max: 365, // Reasonable max value for days
      },
      parse: function (value: string): number {
        const parsed = Number(value);
        if (isNaN(parsed) || parsed < 0) {
          throw new Error("Days must be a non-negative number");
        }
        return parsed;
      },
    },
    hourOfDay: {
      name: "Hour of Day",
      getVisible: (inputValues) => {
        return inputValues.waitType === "specificHour";
      },
      description:
        "Hour of the day (0-23) (used when Wait Type is Specific Hour)",
      validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
      errorMessage: "Hour must be between 0 and 23",
      required: false,
      input: {
        type: "number",
        min: 0,
        max: 23,
      },
      parse: function (value: string): number {
        const parsed = Number(value);
        if (isNaN(parsed) || parsed < 0 || parsed > 23) {
          throw new Error("Hour must be between 0 and 23");
        }
        return parsed;
      },
    },
  },"outputSchema": {},"groups":["Control Flow","Utility"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false} as Node;

export { node as "waittime" };
