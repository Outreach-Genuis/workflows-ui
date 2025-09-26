const node = {
  "name": "GetTags",
  "id": "get_tags",
  "descripition": "Retrieve tags associated with a lead",
  "inputSchema": {
    "email": {
      "name": "Email",
      "description": "Email address of the lead",
      "validationSchema": /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      "errorMessage": "Please enter a valid email address",
      "required": false
    },
    "phone": {
      "name": "Phone",
      "description": "Phone number of the lead",
      "validationSchema": /^\\+?[1-9]\\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number",
      "required": false
    }
  },
  "outputSchema": {
    "tags": {
      "name": "Tags",
      "description": "List of tags associated with the lead",
      "example": []
    }
  },
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
   node as "get_tags"
  };