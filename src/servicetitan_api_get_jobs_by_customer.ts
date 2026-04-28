
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Jobs by Customer","id":"servicetitan_api_get_jobs_by_customer","descripition":"Retrieves all jobs for a specific customer.","inputSchema": {
    customerId: {
      name: "customerId",
      description: "The customer ID.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "number", min: -2147483648, max: 2147483647 },
      parse: (value: string) => { try { return (z.coerce.number()).parse(value); } catch { return 0; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Jobs by Customer from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Get Jobs by Customer"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_get_jobs_by_customer" };
