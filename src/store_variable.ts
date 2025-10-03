
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Store Variable",
  "id": "store_variable",
  "descripition": "Stores a variable for later use",
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
    },
    "variableValue": {
      "name": "Default Value",
      "description": "Default value if the variable doesn't exist",
      "validationSchema": /.*/,
      "errorMessage": "Please enter a valid default value",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "Default value"
      }
    }
  },
  "outputSchema": {},
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
   node as "store_variable"
  };