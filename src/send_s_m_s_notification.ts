const node = {
  "name": "SendSMSNotification",
  "id": "send_s_m_s_notification",
  "descripition": "A description for SendSMSNotification",
  "inputSchema": {
    "to": {
      "name": "To",
      "description": "Phone number to send the SMS to",
      "validationSchema": /^\\+?[1-9]\\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number",
      "required": true
    },
    "body": {
      "name": "Message",
      "description": "The content of the SMS message",
      "validationSchema": /^.{1,1600}$/,
      "errorMessage": "Please enter a valid message (maximum 1600 characters)",
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
   node as "send_s_m_s_notification"
  };