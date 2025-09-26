const node = {
  "name": "AddToSmsCampaign",
  "id": "add_to_sms_campaign",
  "descripition": "A description for AddToSmsCampaign",
  "inputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "The phone number to add to the SMS campaign",
      "validationSchema": /^\\+?[1-9]\\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number in E.164 format",
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
   node as "add_to_sms_campaign"
  };