
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Get Uploaded Leads Trigger",
  "id": "get_uploaded_leads_trigger",
  "descripition": "Triggers a workflow when new leads are uploaded, with options for scheduling and limiting the number of leads",
  "inputSchema": {
    "numLeadsToFetch": {
      "name": "Number of Leads to Fetch",
      "description": "The maximum number of leads to fetch at once",
      "validationSchema": /^[1-9][0-9]*$/,
      "errorMessage": "Must be a positive integer",
      "required": true,
      "input": {
        "type": "number",
        "min": 1,
        "max": 1000
      }
    },
    "startHour": {
      "name": "Start Hour",
      "description": "The hour to start fetching leads (0-23)",
      "validationSchema": /^([0-9]|1[0-9]|2[0-3])$/,
      "errorMessage": "Must be a number between 0 and 23",
      "required": true,
      "input": {
        "type": "number",
        "min": 0,
        "max": 23
      }
    },
    "endHour": {
      "name": "End Hour",
      "description": "The hour to stop fetching leads (0-23)",
      "validationSchema": /^([0-9]|1[0-9]|2[0-3])$/,
      "errorMessage": "Must be a number between 0 and 23",
      "required": true,
      "input": {
        "type": "number",
        "min": 0,
        "max": 23
      }
    },
    "daysOfWeek": {
      "name": "Days of Week",
      "description": "Days to fetch leads (0=Sunday to 6=Saturday)",
      "validationSchema": /^([0-6](,[0-6])*)$/,
      "errorMessage": "Must be comma-separated values between 0 and 6",
      "required": true,
      "input": {
        "type": "multiselect",
        "options": [
          {
            "label": "Sunday",
            "value": "0"
          },
          {
            "label": "Monday",
            "value": "1"
          },
          {
            "label": "Tuesday",
            "value": "2"
          },
          {
            "label": "Wednesday",
            "value": "3"
          },
          {
            "label": "Thursday",
            "value": "4"
          },
          {
            "label": "Friday",
            "value": "5"
          },
          {
            "label": "Saturday",
            "value": "6"
          }
        ]
      }
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
  "groups": [
    "Triggers",
    "Data",
    "Lead Management"
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
   node as "get_uploaded_leads_trigger"
  };