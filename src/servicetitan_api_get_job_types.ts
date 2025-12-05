
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Job Types","id":"servicetitan_api_get_job_types","descripition":"Retrieves all active job types from ServiceTitan.","inputSchema": {
    // no params
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Job Types from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Get Job Types"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_get_job_types" };
