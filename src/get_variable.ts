
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Variable","id":"get_variable","descripition":"Gets the value of a stored variable","inputSchema": {
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
    defaultValue: {
      name: "Default Value",
      description: "Default value if the variable doesn't exist",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid default value",
      required: false,
      input: {
        type: "text",
        placeholder: "defaultValue",
      },
      parse: function (value: string): string {
        return value;
      },
    },
  },"outputSchema": {
    variableValue: {
      name: "Variable Value",
      description: "The value of the variable",
      example: "Some value",
      validator: (value: any) => typeof value === "string",
    },
  },"groups":["Variables","Control Flow"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_variable" };
