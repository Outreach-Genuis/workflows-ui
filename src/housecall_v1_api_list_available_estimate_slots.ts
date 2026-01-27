
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"List Available Estimate Slots","id":"housecall_v1_api_list_available_estimate_slots","descripition":"Return available estimate slots for the given date with bookable employees.","inputSchema": {
    date: {
      name: "date",
      description: "Date (YYYY-MM-DD) in EST",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool List Available Estimate Slots from API Housecall v1 API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Housecall v1 API","List Available Estimate Slots"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "housecall_v1_api_list_available_estimate_slots" };
