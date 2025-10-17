
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Get Constant","id":"get_constant","descripition":"Returns various useful constants like time information, system values, and random data","inputSchema": {
    constantType: {
      name: "Constant Type",
      description: "The type of constant value to return",
      validationSchema: /.*/,
      errorMessage: "Please select a valid constant type",
      required: true,
      input: {
        type: "select",
        options: [
          { label: "Current Date (ISO)", value: "current_date_iso" },
          { label: "Current Time (ISO)", value: "current_time_iso" },
          { label: "Current DateTime (ISO)", value: "current_datetime_iso" },
          {
            label: "Unix Timestamp (seconds)",
            value: "unix_timestamp_seconds",
          },
          {
            label: "Unix Timestamp (milliseconds)",
            value: "unix_timestamp_ms",
          },
          { label: "Day of Week (0-6)", value: "day_of_week" },
          { label: "Day of Week (name)", value: "day_of_week_name" },
          { label: "Month (1-12)", value: "month_number" },
          { label: "Month (name)", value: "month_name" },
          { label: "Year", value: "year" },
          { label: "Hour (0-23)", value: "hour" },
          { label: "Minute (0-59)", value: "minute" },
          { label: "Second (0-59)", value: "second" },
          // { label: "Random UUID", value: "random_uuid" },
          // { label: "Random Number (0-1)", value: "random_number" },
          { label: "Random Integer (1-100)", value: "random_integer_100" },
          // { label: "Random Boolean", value: "random_boolean" },
        ],
        default: {
          label: "Current DateTime (ISO)",
          value: "current_datetime_iso",
        },
      },
      parse: (value: string) => value,
    },
  },"outputSchema": {
    value: {
      name: "Value",
      description: "The constant value",
      example: "2023-05-17T10:30:00.000Z",
      validator: () => true,
      required: true,
    },
  },"groups":["Utilities"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false} as Node;

export { node as "get_constant" };
