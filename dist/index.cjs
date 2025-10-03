"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  nodes: () => nodes
});
module.exports = __toCommonJS(index_exports);

// src/make_call.ts
var node = {
  "name": "Make Call",
  "id": "make_call",
  "descripition": "Places an outbound phone call to the specified number with customizable script and voice options",
  "inputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "The phone number to call in E.164 format (e.g., +15551234567)",
      "validationSchema": /^\+[1-9]\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number in E.164 format (e.g., +15551234567)",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "+15551234567"
      }
    },
    "agentId": {
      "name": "Agent",
      "description": "The agent who will handle the call",
      "validationSchema": /.*/,
      "errorMessage": "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
      "required": true,
      "input": {
        "type": "custom",
        "tag": "agent-selector",
        "options": {
          "allowCreate": true
        }
      }
    }
  },
  "outputSchema": {
    "transcription": {
      "name": "Call Transcription",
      "description": "The transcribed content of the call",
      "example": "Hello, this is John speaking. I'm calling about..."
    },
    "callResult": {
      "name": "Call Result",
      "description": "The status or outcome of the call attempt",
      "example": "answered"
    }
  },
  "groups": [
    "Communication",
    "Phone"
  ],
  "branches": {
    "answered": {
      "id": "answered",
      "name": "Answered",
      "description": "Call was answered by the recipient"
    },
    "no_answer": {
      "id": "no_answer",
      "name": "No Answer",
      "description": "Call was not answered after ringing"
    },
    "busy": {
      "id": "busy",
      "name": "Busy",
      "description": "Recipient's line was busy"
    },
    "failed": {
      "id": "failed",
      "name": "Failed",
      "description": "Call failed to connect due to technical issues"
    }
  },
  "isTriggerNode": false
};

// src/waittime.ts
var node2 = {
  "name": "Wait Time",
  "id": "waittime",
  "descripition": "Pauses the workflow execution for a specified duration before proceeding to the next step",
  "inputSchema": {
    "duration": {
      "name": "Duration",
      "description": "Amount of time to wait",
      "validationSchema": /^\d+$/,
      "errorMessage": "Duration must be a positive number",
      "required": true,
      "input": {
        "type": "number",
        "min": 1,
        "max": 1e3
      }
    },
    "unit": {
      "name": "Time Unit",
      "description": "Unit of time for the duration",
      "validationSchema": /^(minutes|hours|days)$/,
      "errorMessage": "Invalid time unit",
      "required": true,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "Minutes",
            "value": "minutes"
          },
          {
            "label": "Hours",
            "value": "hours"
          },
          {
            "label": "Days",
            "value": "days"
          }
        ]
      }
    }
  },
  "outputSchema": {},
  "groups": [
    "Control Flow",
    "Utility"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/extract_with_a_i.ts
var node3 = {
  "name": "Extract With AI",
  "id": "extract_with_a_i",
  "descripition": "Extracts specific information from text using AI analysis based on provided instructions",
  "inputSchema": {
    "rawText": {
      "name": "Raw Text",
      "description": "The text to extract information from",
      "validationSchema": /.*/,
      "errorMessage": "Raw text must be a string",
      "required": true,
      "input": {
        "type": "textarea",
        "maxLength": 1e4,
        "minLength": 1,
        "placeholder": "Enter the text to analyze"
      }
    },
    "description": {
      "name": "Extraction Description",
      "description": "Describe what information to extract from the raw text",
      "validationSchema": /.*/,
      "errorMessage": "Description must be a string",
      "required": true,
      "input": {
        "type": "textarea",
        "maxLength": 1e3,
        "minLength": 1,
        "placeholder": "Describe what to extract (e.g., 'Extract the name, email, and phone number')"
      }
    }
  },
  "outputSchema": {
    "extractedData": {
      "name": "Extracted Data",
      "description": "The data extracted from the raw text",
      "example": "Extracted information"
    }
  },
  "groups": [
    "Data",
    "AI"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/add_to_sms_campaign.ts
var node4 = {
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
};

// src/get_s_m_s_campaign_messages.ts
var node5 = {
  "name": "Get SMS Campaign Messages",
  "id": "get_s_m_s_campaign_messages",
  "descripition": "Retrieves all messages from a specific SMS campaign by campaign ID",
  "inputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "Phone number to retrieve SMS campaign messages for",
      "validationSchema": /^\+?[1-9]\d{1,14}$/,
      "errorMessage": "Please provide a valid phone number",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "+1234567890"
      }
    }
  },
  "outputSchema": {
    "messages": {
      "name": "",
      "description": "",
      "example": []
    }
  },
  "groups": [
    "Communication",
    "SMS",
    "Data"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/send_email_notification.ts
var node6 = {
  "name": "Send Email Notification",
  "id": "send_email_notification",
  "descripition": "Sends an email message with customizable from, to, cc, bcc fields and SMTP configuration",
  "inputSchema": {
    "from": {
      "name": "From",
      "description": "Sender email address",
      "validationSchema": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "sender@example.com"
      }
    },
    "fromName": {
      "name": "From Name",
      "description": "Sender name",
      "validationSchema": /^.+$/,
      "errorMessage": "Name cannot be empty",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "John Doe"
      }
    },
    "to": {
      "name": "To",
      "description": "Email recipient address(es)",
      "validationSchema": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "recipient@example.com"
      }
    },
    "cc": {
      "name": "CC",
      "description": "Carbon copy recipient(s)",
      "validationSchema": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "cc@example.com"
      }
    },
    "bcc": {
      "name": "BCC",
      "description": "Blind carbon copy recipient(s)",
      "validationSchema": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "bcc@example.com"
      }
    },
    "subject": {
      "name": "Subject",
      "description": "Email subject line",
      "validationSchema": /.+/,
      "errorMessage": "Subject cannot be empty",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "Email Subject"
      }
    },
    "body": {
      "name": "Body",
      "description": "Email body content",
      "validationSchema": /[\s\S]*/,
      "errorMessage": "Email body cannot be empty",
      "required": true,
      "input": {
        "type": "textarea",
        "maxLength": 1e4,
        "minLength": 1,
        "placeholder": "Write your email content here"
      }
    },
    "smtpHost": {
      "name": "SMTP Host",
      "description": "SMTP server hostname (optional)",
      "validationSchema": /^.*$/,
      "errorMessage": "Please enter a valid hostname",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "smtp.example.com"
      }
    },
    "smtpPort": {
      "name": "SMTP Port",
      "description": "SMTP server port (optional)",
      "validationSchema": /^\d+$/,
      "errorMessage": "Please enter a valid port number",
      "required": false,
      "input": {
        "type": "number",
        "min": 1,
        "max": 65535
      }
    },
    "smtpUsername": {
      "name": "SMTP Username",
      "description": "SMTP username for authentication (optional)",
      "validationSchema": /^.*$/,
      "errorMessage": "Please enter a valid username",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "username"
      }
    },
    "smtpPassword": {
      "name": "SMTP Password",
      "description": "SMTP password for authentication (optional)",
      "validationSchema": /^.*$/,
      "errorMessage": "Please enter a valid password",
      "required": false,
      "input": {
        "type": "password"
      }
    },
    "smtpSecure": {
      "name": "SMTP Secure",
      "description": "Use secure connection (TLS) (optional)",
      "validationSchema": /^(true|false)$/,
      "errorMessage": "Please enter true or false",
      "required": false,
      "input": {
        "type": "boolean"
      }
    }
  },
  "outputSchema": {},
  "groups": [
    "Communication",
    "Email"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/send_s_m_s_notification.ts
var node7 = {
  "name": "Send SMS Notification",
  "id": "send_s_m_s_notification",
  "descripition": "Sends an SMS message to a specified phone number with customizable content",
  "inputSchema": {
    "to": {
      "name": "To",
      "description": "Phone number to send the SMS to",
      "validationSchema": /^\+?[1-9]\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "+15551234567"
      }
    },
    "body": {
      "name": "Message",
      "description": "The content of the SMS message",
      "validationSchema": /^[\s\S]{1,1600}$/,
      "errorMessage": "Please enter a valid message (maximum 1600 characters)",
      "required": true,
      "input": {
        "type": "textarea",
        "maxLength": 1600,
        "minLength": 1,
        "placeholder": "Enter your message here"
      }
    }
  },
  "outputSchema": {},
  "groups": [
    "Communication",
    "SMS"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/add_tag_to_lead.ts
var node8 = {
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
};

// src/remove_tag_from_lead.ts
var node9 = {
  "name": "Remove Tag From Lead",
  "id": "remove_tag_from_lead",
  "descripition": "Removes a specified tag from a lead identified by email or phone number",
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
};

// src/get_tags.ts
var node10 = {
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
};

// src/checkcondition.ts
var node11 = {
  "name": "Check Condition",
  "id": "checkcondition",
  "descripition": "Evaluates a condition comparing values with various operators, including AI-powered question answering",
  "inputSchema": {
    "value": {
      "name": "Value",
      "description": "The value to check against a condition",
      "validationSchema": /.*/,
      "errorMessage": "Please provide a valid value",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "Value to check"
      }
    },
    "condition": {
      "name": "Condition",
      "description": "The type of comparison to perform",
      "validationSchema": /.*/,
      "errorMessage": "Please select a valid condition",
      "required": true,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "Equals",
            "value": "equals"
          },
          {
            "label": "Not Equals",
            "value": "not_equals"
          },
          {
            "label": "Greater Than",
            "value": "greater_than"
          },
          {
            "label": "Less Than",
            "value": "less_than"
          },
          {
            "label": "Contains",
            "value": "contains"
          },
          {
            "label": "Not Contains",
            "value": "not_contains"
          },
          {
            "label": "In",
            "value": "in"
          },
          {
            "label": "Not In",
            "value": "not_in"
          },
          {
            "label": "Ask Question AI",
            "value": "ask_question_ai"
          }
        ]
      }
    },
    "compareTo": {
      "name": "Compare To",
      "description": "The value to compare against",
      "validationSchema": /.*/,
      "errorMessage": "Please provide a valid comparison value",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "Value to compare against"
      }
    }
  },
  "outputSchema": {
    "result": {
      "name": "Result",
      "description": "Whether the condition was met",
      "example": true
    }
  },
  "groups": [
    "Control Flow",
    "Logic"
  ],
  "branches": {
    "match": {
      "name": "Match",
      "description": "Condition matched",
      "id": "match"
    },
    "no_match": {
      "name": "No Match",
      "description": "Condition did not match",
      "id": "no_match"
    }
  },
  "isTriggerNode": false
};

// src/custom_webhook.ts
var node12 = {
  "name": "Custom Webhook",
  "id": "custom_webhook",
  "descripition": "Makes custom HTTP requests to external APIs with configurable methods, headers, and body content",
  "inputSchema": {
    "url": {
      "name": "URL",
      "description": "The URL to send the request to",
      "validationSchema": /^https?:\/\/.+/,
      "errorMessage": "Please enter a valid URL starting with http:// or https://",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "https://api.example.com/endpoint"
      }
    },
    "method": {
      "name": "HTTP Method",
      "description": "The HTTP method to use for the request",
      "validationSchema": /^(GET|POST|PUT|DELETE|PATCH)$/,
      "errorMessage": "Please select a valid HTTP method",
      "required": true,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "GET",
            "value": "GET"
          },
          {
            "label": "POST",
            "value": "POST"
          },
          {
            "label": "PUT",
            "value": "PUT"
          },
          {
            "label": "DELETE",
            "value": "DELETE"
          },
          {
            "label": "PATCH",
            "value": "PATCH"
          }
        ]
      }
    },
    "headers": {
      "name": "Headers",
      "description": "HTTP headers to include in the request",
      "validationSchema": /^.*$/,
      "errorMessage": "Invalid headers format",
      "required": false,
      "input": {
        "type": "textarea",
        "maxLength": 1e3,
        "minLength": 2,
        "placeholder": '{"Authorization": "Bearer token", "Content-Type": "application/json"}'
      }
    },
    "body": {
      "name": "Request Body",
      "description": "The body of the request (for POST, PUT, PATCH)",
      "validationSchema": /^.*$/,
      "errorMessage": "Invalid request body",
      "required": false,
      "input": {
        "type": "textarea",
        "maxLength": 5e3,
        "minLength": 0,
        "placeholder": '{"key": "value"}'
      }
    },
    "contentType": {
      "name": "Content-Type",
      "description": "The content type of the request body",
      "validationSchema": /^[\w\-\/+.]+$/,
      "errorMessage": "Please enter a valid content type",
      "required": false,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "application/json",
            "value": "application/json"
          },
          {
            "label": "application/xml",
            "value": "application/xml"
          },
          {
            "label": "text/plain",
            "value": "text/plain"
          },
          {
            "label": "text/html",
            "value": "text/html"
          },
          {
            "label": "application/x-www-form-urlencoded",
            "value": "application/x-www-form-urlencoded"
          },
          {
            "label": "multipart/form-data",
            "value": "multipart/form-data"
          }
        ]
      }
    }
  },
  "outputSchema": {
    "responseStatus": {
      "name": "Response Status",
      "description": "HTTP status code of the response",
      "example": 200
    },
    "responseBody": {
      "name": "Response Body",
      "description": "Body of the HTTP response",
      "example": '{ "success": true }'
    }
  },
  "groups": [
    "HTTP",
    "Integration"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/webhook_trigger.ts
var node13 = {
  "name": "Webhook Trigger",
  "id": "webhook_trigger",
  "descripition": "Starts a workflow when data is received from an external webhook, extracting contact information",
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
    "Triggers",
    "Integration"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": true
};

// src/inbound_call_trigger.ts
var node14 = {
  "name": "Inbound Call Trigger",
  "id": "inbound_call_trigger",
  "descripition": "Triggers a workflow when an inbound call is received, providing caller details and call transcription",
  "inputSchema": {},
  "outputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "The phone number of the inbound caller",
      "example": "+14155552671"
    },
    "transcription": {
      "name": "Call Transcription",
      "description": "The transcribed text from the inbound call",
      "example": "Hello, I'm calling about your services."
    }
  },
  "groups": [
    "Triggers",
    "Communication",
    "Phone"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": true
};

// src/get_uploaded_leads_trigger.ts
var node15 = {
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
        "max": 1e3
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
};

// src/on_tag_added.ts
var node16 = {
  "name": "On Tag Added",
  "id": "on_tag_added",
  "descripition": "Triggers a workflow when a tag is added to a lead, providing lead information",
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
  "groups": [
    "Triggers",
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
  "isTriggerNode": true
};

// src/run_once_trigger.ts
var node17 = {
  "name": "Run Once Trigger",
  "id": "run_once_trigger",
  "descripition": "A trigger node that runs only once when the workflow is activated",
  "inputSchema": {},
  "outputSchema": {},
  "groups": [
    "Triggers"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": true
};

// src/split_for_test.ts
var node18 = {
  "name": "Split For Test",
  "id": "split_for_test",
  "descripition": "Split workflow execution between testA and testB branches based on a ratio",
  "inputSchema": {
    "splitRatio": {
      "description": "Ratio to split between testA and testB (0-1, represents fraction going to testA)",
      "required": true,
      "name": "",
      "validationSchema": /^0(\.\d+)?$|^1(\.0+)?$/,
      "errorMessage": "",
      "input": {
        "type": "number",
        "min": 0,
        "max": 1,
        "step": 0.01,
        "default": 0.5
      }
    }
  },
  "outputSchema": {
    "splitResult": {
      "name": "Split Result",
      "description": "Result of the split",
      "example": "test_a"
    }
  },
  "groups": [
    "Control Flow"
  ],
  "branches": {
    "test_a": {
      "id": "test_a",
      "name": "TestA",
      "description": "First branch of the split"
    },
    "test_b": {
      "id": "test_b",
      "name": "TestB",
      "description": "Second branch of the split"
    }
  },
  "isTriggerNode": false
};

// src/store_variable.ts
var node19 = {
  "name": "Store Variable",
  "id": "store_variable",
  "descripition": "Stores a variable for later use",
  "inputSchema": {
    "variableName": {
      "name": "Variable Name",
      "description": "The name of the variable to get",
      "validationSchema": /.*/,
      "errorMessage": "Please enter a valid variable name",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "myVariable"
      }
    },
    "variableValue": {
      "name": "Default Value",
      "description": "Default value if the variable doesn't exist",
      "validationSchema": /.*/,
      "errorMessage": "Please enter a valid default value",
      "required": false,
      "input": {
        "type": "text",
        "placeholder": "Default value"
      }
    }
  },
  "outputSchema": {},
  "groups": [
    "Variables",
    "Control Flow"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/get_variable.ts
var node20 = {
  "name": "Get Variable",
  "id": "get_variable",
  "descripition": "Gets the value of a stored variable",
  "inputSchema": {
    "variableName": {
      "name": "Variable Name",
      "description": "The name of the variable to get",
      "validationSchema": /.*/,
      "errorMessage": "Please enter a valid variable name",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "myVariable"
      }
    }
  },
  "outputSchema": {
    "variableValue": {
      "name": "Variable Value",
      "description": "The value of the variable",
      "example": "Some value"
    }
  },
  "groups": [
    "Variables",
    "Control Flow"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": false
};

// src/on_website_vistor_indentified.ts
var node21 = {
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
};

// src/index.ts
var nodes = { make_call: node, waittime: node2, extract_with_a_i: node3, add_to_sms_campaign: node4, get_s_m_s_campaign_messages: node5, send_email_notification: node6, send_s_m_s_notification: node7, add_tag_to_lead: node8, remove_tag_from_lead: node9, get_tags: node10, checkcondition: node11, custom_webhook: node12, webhook_trigger: node13, inbound_call_trigger: node14, get_uploaded_leads_trigger: node15, on_tag_added: node16, run_once_trigger: node17, split_for_test: node18, store_variable: node19, get_variable: node20, on_website_vistor_indentified: node21 };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  nodes
});
