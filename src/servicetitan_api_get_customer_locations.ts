
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Customer Locations","id":"servicetitan_api_get_customer_locations","descripition":"Retrieves location information for a customer from ServiceTitan by customer ID.","inputSchema": {
    customerId: {
      name: "customerId",
      description: "The customer's ID.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Customer Locations from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Get Customer Locations"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_get_customer_locations" };
