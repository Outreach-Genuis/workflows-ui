
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Cancellation Reasons","id":"servicetitan_api_get_cancellation_reasons","descripition":"Retrieves all available job cancellation reasons.","inputSchema": {
    // no params
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Cancellation Reasons from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Get Cancellation Reasons"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_get_cancellation_reasons" };
