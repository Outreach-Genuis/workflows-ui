const node = {
  "name": "CheckCondition",
  "id": "checkcondition",
  "descripition": "A description for CheckCondition",
  "inputSchema": {
    "value": {
      "name": "Value",
      "description": "The value to check against a condition",
      "validationSchema": /.*/,
      "errorMessage": "Please provide a valid value",
      "required": true
    },
    "condition": {
      "name": "Condition",
      "description": "The type of comparison to perform",
      "validationSchema": /.*/,
      "errorMessage": "Please select a valid condition",
      "required": true
    },
    "compareTo": {
      "name": "Compare To",
      "description": "The value to compare against",
      "validationSchema": /.*/,
      "errorMessage": "Please provide a valid comparison value",
      "required": true
    }
  },
  "outputSchema": {
    "result": {
      "name": "Result",
      "description": "Whether the condition was met",
      "example": true
    }
  },
  "groups": [],
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
  }
} as const;
  
  export {
   node as "checkcondition"
  };