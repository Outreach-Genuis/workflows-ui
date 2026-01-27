
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Available Technicians","id":"servicetitan_api_get_available_technicians","descripition":"Retrieves both regular available technicians with their free time slots AND the on-call technician for a specific date.","inputSchema": {
    summary: {
      name: "summary",
      description: "Job summary to determine business unit for filtering technicians. Only used when filter_technicians_by_business_unit is enabled.",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    date: {
      name: "date",
      description: "Target date in YYYY-MM-DD format (optional, defaults to today).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Available Technicians from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Get Available Technicians"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_get_available_technicians" };
