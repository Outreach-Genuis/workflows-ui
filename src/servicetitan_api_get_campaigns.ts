
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Campaigns","id":"servicetitan_api_get_campaigns","descripition":"Retrieves all active campaigns from ServiceTitan.","inputSchema": {
    // no params
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Campaigns from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Get Campaigns"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_get_campaigns" };
