
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Get Tags",
  "id": "get_tags",
  "descripition": "Retrieves all tags associated with a lead identified by email or phone number",
  "inputSchema": {
    "email": {
      "name": "Email",
      "description": "Email address of the lead",
      "validationSchema": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "errorMessage": "Please enter a valid email address",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "john.doe@example.com"
      }
    },
    "phone": {
      "name": "Phone",
      "description": "Phone number of the lead",
      "validationSchema": /^\+?[1-9]\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "+1234567890"
      }
    }
  },
  "outputSchema": {
    "tags": {
      "name": "Tags",
      "description": "List of tags associated with the lead",
      "example": []
    }
  },
  "groups": [
    "Data",
    "Lead Management",
    "Tags"
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
   node as "get_tags"
  };