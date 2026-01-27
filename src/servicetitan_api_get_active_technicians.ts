
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Active Technicians","id":"servicetitan_api_get_active_technicians","descripition":"Retrieves all active technicians from ServiceTitan Settings API.","inputSchema": {
    // no params
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Active Technicians from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Get Active Technicians"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_get_active_technicians" };
