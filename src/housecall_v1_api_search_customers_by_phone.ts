
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Search Customers By Phone","id":"housecall_v1_api_search_customers_by_phone","descripition":"Find existing customers using a phone number provided during the call.","inputSchema": {
    phone: {
      name: "phone",
      description: "Phone number (partial or full) used to search",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Search Customers By Phone from API Housecall v1 API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Housecall v1 API","Search Customers By Phone"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "housecall_v1_api_search_customers_by_phone" };
