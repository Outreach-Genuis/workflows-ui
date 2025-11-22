
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Customer","id":"housecall_v1_api_get_customer","descripition":"Retrieve a customer by ID from Housecall.","inputSchema": {
    id: {
      name: "id",
      description: "The UUID of the customer to retrieve",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Customer from API Housecall v1 API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Housecall v1 API","Get Customer"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "housecall_v1_api_get_customer" };
