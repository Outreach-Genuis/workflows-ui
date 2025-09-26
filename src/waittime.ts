const node = {
  "name": "WaitTime",
  "id": "waittime",
  "descripition": "A description for WaitTime",
  "inputSchema": {
    "duration": {
      "name": "Wait Duration",
      "description": "Time to wait in milliseconds",
      "validationSchema": /^\\d+$/,
      "errorMessage": "Duration must be a positive number",
      "required": true
    }
  },
  "outputSchema": {},
  "groups": [],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  }
} as const;
  
  export {
   node as "waittime"
  };