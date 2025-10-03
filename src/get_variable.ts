
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Get Variable",
  "id": "get_variable",
  "descripition": "Gets the value of a stored variable",
  "inputSchema": {
    "variableName": {
      "name": "Variable Name",
      "description": "The name of the variable to get",
      "validationSchema": /.*/,
      "errorMessage": "Please enter a valid variable name",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "myVariable"
      }
    }
  },
  "outputSchema": {
    "variableValue": {
      "name": "Variable Value",
      "description": "The value of the variable",
      "example": "Some value"
    }
  },
  "groups": [
    "Variables",
    "Control Flow"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
} as Node;
  
  export {
   node as "get_variable"
  };