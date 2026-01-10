
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"holiday-check-v1","id":"public_holiday_api_holiday_check_v1","descripition":"Checks if today is a public holiday in the given timezone. Returns an object where success is true and the message contains the holiday name (or 'Specified By Date') if it is a holiday. If it is not a holiday, success is false and the message provides the reason or status.","inputSchema": {
    dateToCheck: {
      name: "dateToCheck",
      description: "The date to check for a public holiday in YYYY-MM-DD format",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool holiday-check-v1 from API Public Holiday API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Public Holiday API","holiday-check-v1"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "public_holiday_api_holiday_check_v1" };
