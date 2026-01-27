
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Cancel Reasons","id":"serviceminder_api_get_cancel_reasons","descripition":"Get available cancellation reasons for appointments.","inputSchema": {
    // no params
  },"outputSchema": {
    result: {
      name: "Result",
      description:
        "Output of tool Get Cancel Reasons from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Get Cancel Reasons"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "serviceminder_api_get_cancel_reasons" };
