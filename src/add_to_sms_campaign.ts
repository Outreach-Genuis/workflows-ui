
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Add To SMS Campaign",
  "id": "add_to_sms_campaign",
  "descripition": "Adds a contact to an SMS campaign identified by campaign ID",
  "inputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "The phone number to add to the SMS campaign",
      "validationSchema": /^\+?[1-9]\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number in E.164 format",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "+15551234567"
      }
    }
  },
  "outputSchema": {},
  "groups": [
    "Communication",
    "SMS",
    "Lead Management"
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
   node as "add_to_sms_campaign"
  };