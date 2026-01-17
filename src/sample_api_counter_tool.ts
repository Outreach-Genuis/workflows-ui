
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Counter Tool","id":"sample_api_counter_tool","descripition":"This tool increments a counter stored in the session.","inputSchema": {
    // no params
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Counter Tool from API Sample API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Sample API","Counter Tool"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "sample_api_counter_tool" };
