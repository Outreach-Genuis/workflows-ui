const node = {
  "name": "GetUploadedLeadsTrigger",
  "id": "get_uploaded_leads_trigger",
  "descripition": "A description for GetUploadedLeadsTrigger",
  "inputSchema": {
    "numLeadsToFetch": {
      "name": "Number of Leads to Fetch",
      "description": "The maximum number of leads to fetch at once",
      "validationSchema": /^[1-9][0-9]*$/,
      "errorMessage": "Must be a positive integer",
      "required": true
    },
    "startHour": {
      "name": "Start Hour",
      "description": "The hour to start fetching leads (0-23)",
      "validationSchema": /^([0-9]|1[0-9]|2[0-3])$/,
      "errorMessage": "Must be a number between 0 and 23",
      "required": true
    },
    "endHour": {
      "name": "End Hour",
      "description": "The hour to stop fetching leads (0-23)",
      "validationSchema": /^([0-9]|1[0-9]|2[0-3])$/,
      "errorMessage": "Must be a number between 0 and 23",
      "required": true
    },
    "daysOfWeek": {
      "name": "Days of Week",
      "description": "Days to fetch leads (0=Sunday to 6=Saturday)",
      "validationSchema": /^([0-6](,[0-6])*)$/,
      "errorMessage": "Must be comma-separated values between 0 and 6",
      "required": true
    }
  },
  "outputSchema": {
    "firstName": {
      "name": "First Name",
      "description": "The first name of the lead",
      "example": "John"
    },
    "lastName": {
      "name": "Last Name",
      "description": "The last name of the lead",
      "example": "Doe"
    },
    "email": {
      "name": "Email",
      "description": "The email address of the lead",
      "example": "john.doe@example.com"
    },
    "phone": {
      "name": "Phone",
      "description": "The phone number of the lead",
      "example": "+1234567890"
    },
    "otherFields": {
      "name": "Other Fields",
      "description": "Additional fields associated with the lead",
      "example": {
        "company": "Acme Inc",
        "position": "Manager"
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
   node as "get_uploaded_leads_trigger"
  };