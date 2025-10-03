
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Run Once Trigger",
  "id": "run_once_trigger",
  "descripition": "A trigger node that runs only once when the workflow is activated",
  "inputSchema": {},
  "outputSchema": {},
  "groups": [
    "Triggers"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": true
} as Node;
  
  export {
   node as "run_once_trigger"
  };