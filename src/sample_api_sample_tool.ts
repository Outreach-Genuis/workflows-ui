
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Sample Tool","id":"sample_api_sample_tool","descripition":"This is a sample tool within the Sample API.","inputSchema": {
    param1: {
      name: "param1",
      description: "This is a sample parameter.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Sample Tool from API Sample API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Sample API","Sample Tool"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "sample_api_sample_tool" };
