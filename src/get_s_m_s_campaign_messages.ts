const node = {
  "name": "GetSMSCampaignMessages",
  "id": "get_s_m_s_campaign_messages",
  "descripition": "A description for GetSMSCampaignMessages",
  "inputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "Phone number to retrieve SMS campaign messages for",
      "validationSchema": /^\\+?[1-9]\\d{1,14}$/,
      "errorMessage": "Please provide a valid phone number",
      "required": true
    }
  },
  "outputSchema": {
    "messages": {
      "name": "",
      "description": "",
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
   node as "get_s_m_s_campaign_messages"
  };