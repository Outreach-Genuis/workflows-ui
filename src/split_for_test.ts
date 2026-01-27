
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Split For Test","id":"split_for_test","descripition":"Split workflow execution between testA and testB branches based on a ratio","inputSchema": {
    splitRatio: {
      description:
        "Ratio to split between testA and testB (0-1, represents fraction going to testA)",
      required: true,
      name: "",
      validationSchema: /^0(\.\d+)?$|^1(\.0+)?$/,
      errorMessage: "",
      input: {
        type: "number",
        min: 0,
        max: 1,
        step: 0.01,
        default: 0.5,
      },
      parse: function (value: string): number {
        throw new Error("Function not implemented.");
      },
    },
  },"outputSchema": {
    splitResult: {
      name: "Split Result",
      description: "Result of the split",
      example: "test_a",
      validator: function (value: "test_a" | "test_b"): boolean {
        return ["test_a", "test_b"].includes(value);
      },
    },
  },"groups":["Control Flow"],"branches":{"test_a":{"id":"test_a","name":"TestA","description":"First branch of the split"},"test_b":{"id":"test_b","name":"TestB","description":"Second branch of the split"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "split_for_test" };
