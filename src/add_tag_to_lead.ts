
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Add Tag To Lead",
  "id": "add_tag_to_lead",
  "descripition": "Assigns a specified tag to a lead identified by email or phone number",
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
    },
    "tag": {
      "name": "Tag",
      "description": "Tag to add to the lead",
      "validationSchema": /^\S+$/,
      "errorMessage": "Please enter a valid tag name",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "lead-tag"
      }
    }
  },
  "outputSchema": {},
  "groups": [
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
   node as "add_tag_to_lead"
  };