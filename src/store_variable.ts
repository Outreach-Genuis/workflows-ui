
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Store Variable","id":"store_variable","descripition":"Stores a variable for later use","inputSchema": {
    uniqueKey: {
      name: "Unique Key",
      description:
        "A unique key to identify the variable across different workflow runs. For example, if you use {{phone number}} variable of a lead as the unique key, the variable will be unique per phone number.",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid unique key",
      required: true,
      input: {
        type: "text",
        placeholder: "myUniqueKey",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    variableName: {
      name: "Variable Name",
      description: "The name of the variable to get",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid variable name",
      required: true,
      input: {
        type: "text",
        placeholder: "myVariable",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    variableValue: {
      name: "Value",
      description: "The value to store in the variable",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid value",
      required: true,
      input: {
        type: "text",
        placeholder: "myValue",
      },
      parse: function (value: string): string {
        return value;
      },
    },
  },"outputSchema": {},"groups":["Variables","Control Flow"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "store_variable" };
