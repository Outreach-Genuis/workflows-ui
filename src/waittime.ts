
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Wait Time",
  "id": "waittime",
  "descripition": "Pauses the workflow execution for a specified duration before proceeding to the next step",
  "inputSchema": {
    "duration": {
      "name": "Duration",
      "description": "Amount of time to wait",
      "validationSchema": /^\d+$/,
      "errorMessage": "Duration must be a positive number",
      "required": true,
      "input": {
        "type": "number",
        "min": 1,
        "max": 1000
      }
    },
    "unit": {
      "name": "Time Unit",
      "description": "Unit of time for the duration",
      "validationSchema": /^(minutes|hours|days)$/,
      "errorMessage": "Invalid time unit",
      "required": true,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "Minutes",
            "value": "minutes"
          },
          {
            "label": "Hours",
            "value": "hours"
          },
          {
            "label": "Days",
            "value": "days"
          }
        ]
      }
    }
  },
  "outputSchema": {},
  "groups": [
    "Control Flow",
    "Utility"
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
   node as "waittime"
  };