const node = {
  "name": "OnTagAdded",
  "id": "on_tag_added",
  "descripition": "A description for OnTagAdded",
  "inputSchema": {},
  "outputSchema": {
    "tag": {
      "name": "Tag",
      "description": "The tag that was added to the lead",
      "example": "VIP"
    },
    "firstName": {
      "name": "First Name",
      "description": "The first name of the person",
      "example": "John"
    },
    "lastName": {
      "name": "Last Name",
      "description": "The last name of the person",
      "example": "Doe"
    },
    "email": {
      "name": "Email",
      "description": "Email address of the person",
      "example": "john.doe@example.com"
    },
    "phone": {
      "name": "Phone Number",
      "description": "Contact phone number",
      "example": "+15551234567"
    },
    "otherFields": {
      "name": "Additional Information",
      "description": "Any other information provided by the webhook",
      "example": {
        "company": "Acme Inc",
        "role": "Manager"
      }
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
   node as "on_tag_added"
  };