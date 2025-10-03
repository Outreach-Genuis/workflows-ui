
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "On Website Visitor Identified",
  "id": "on_website_vistor_indentified",
  "descripition": "Triggers when an anonymous Website visitor is identified via our Pixel Tag",
  "inputSchema": {},
  "outputSchema": {
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
  "groups": [
    "Trigger",
    "Website"
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
   node as "on_website_vistor_indentified"
  };