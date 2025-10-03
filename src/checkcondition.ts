
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Check Condition",
  "id": "checkcondition",
  "descripition": "Evaluates a condition comparing values with various operators, including AI-powered question answering",
  "inputSchema": {
    "value": {
      "name": "Value",
      "description": "The value to check against a condition",
      "validationSchema": /.*/,
      "errorMessage": "Please provide a valid value",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "Value to check"
      }
    },
    "condition": {
      "name": "Condition",
      "description": "The type of comparison to perform",
      "validationSchema": /.*/,
      "errorMessage": "Please select a valid condition",
      "required": true,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "Equals",
            "value": "equals"
          },
          {
            "label": "Not Equals",
            "value": "not_equals"
          },
          {
            "label": "Greater Than",
            "value": "greater_than"
          },
          {
            "label": "Less Than",
            "value": "less_than"
          },
          {
            "label": "Contains",
            "value": "contains"
          },
          {
            "label": "Not Contains",
            "value": "not_contains"
          },
          {
            "label": "In",
            "value": "in"
          },
          {
            "label": "Not In",
            "value": "not_in"
          },
          {
            "label": "Ask Question AI",
            "value": "ask_question_ai"
          }
        ]
      }
    },
    "compareTo": {
      "name": "Compare To",
      "description": "The value to compare against",
      "validationSchema": /.*/,
      "errorMessage": "Please provide a valid comparison value",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "Value to compare against"
      }
    }
  },
  "outputSchema": {
    "result": {
      "name": "Result",
      "description": "Whether the condition was met",
      "example": true
    }
  },
  "groups": [
    "Control Flow",
    "Logic"
  ],
  "branches": {
    "match": {
      "name": "Match",
      "description": "Condition matched",
      "id": "match"
    },
    "no_match": {
      "name": "No Match",
      "description": "Condition did not match",
      "id": "no_match"
    }
  },
  "isTriggerNode": false
} as Node;
  
  export {
   node as "checkcondition"
  };