const node = {
  "name": "AddTagToLead",
  "id": "add_tag_to_lead",
  "descripition": "A description for AddTagToLead",
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
    },
    "tag": {
      "name": "Tag",
      "description": "Tag to add to the lead",
      "validationSchema": /^\\S+$/,
      "errorMessage": "Please enter a valid tag name",
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
   node as "add_tag_to_lead"
  };