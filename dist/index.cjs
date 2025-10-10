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
var node = { "name": "Make Call", "id": "make_call", "descripition": "Places an outbound phone call to the specified number with customizable script and voice options", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to call in E.164 format (e.g., +15551234567)",
    validationSchema: /^\+[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format (e.g., +15551234567)",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  agentId: {
    name: "Agent",
    description: "The agent who will handle the call",
    validationSchema: /.*/,
    errorMessage: "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: true,
    input: {
      type: "custom",
      tag: "agent-selector",
      options: {
        allowCreate: true
      }
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phoneNumberSource: {
    name: "Phone Number Source",
    description: "The source of the phone number to use for the outbound call",
    validationSchema: /^(og-pool|bought-random|bought-specific)$/,
    errorMessage: "Phone number source must be one of: og-pool, bought-random, bought-specific",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Pool of Outreachgenius Numbers", value: "og-pool" },
        { label: "Bought Random", value: "bought-random" },
        { label: "Bought Specific", value: "bought-specific" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  specificBoughtNumberId: {
    name: "Specific Bought Number ID",
    description: "The ID of the specific bought number to use if 'Bought Specific' is selected as the source",
    validationSchema: /.*/,
    errorMessage: "Specific Bought Number ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: false,
    input: {
      type: "custom",
      tag: "phone-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputs) => {
      return inputs.phoneNumberSource === "bought-specific";
    }
  },
  extraInstructions: {
    name: "Extra Instructions",
    description: "Additional instructions for the agent",
    validationSchema: /.*/,
    errorMessage: "Extra instructions must be less than 500 characters if provided",
    required: false,
    input: {
      type: "textarea",
      placeholder: "Please be polite and professional.",
      minLength: 0,
      maxLength: 1e3
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  transcription: {
    name: "Call Transcription",
    description: "The transcribed content of the call",
    example: "Hello, this is John speaking. I'm calling about...",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  callResult: {
    name: "Call Result",
    description: "The status or outcome of the call attempt",
    example: "answered",
    validator: function(value) {
      return ["answered", "no_answer", "busy", "failed"].includes(value);
    }
  }
}, "groups": ["Communication", "Phone"], "branches": { "answered": { "id": "answered", "name": "Answered", "description": "Call was answered by the recipient" }, "no_answer": { "id": "no_answer", "name": "No Answer", "description": "Call was not answered after ringing" }, "busy": { "id": "busy", "name": "Busy", "description": "Recipient's line was busy" }, "failed": { "id": "failed", "name": "Failed", "description": "Call failed to connect due to technical issues" } }, "isTriggerNode": false };

// src/waittime.ts
var node2 = { "name": "Wait Time", "id": "waittime", "descripition": "Pauses the workflow execution for a specified duration before proceeding to the next step", "inputSchema": {
  waitType: {
    name: "Wait Type",
    description: "Choose how to specify the wait time",
    validationSchema: /^(duration|datetime)$/,
    errorMessage: "Invalid wait type",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Duration", value: "duration" },
        { label: "Until Datetime", value: "datetime" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  duration: {
    name: "Duration",
    description: "Amount of time to wait (used when Wait Type is Duration)",
    validationSchema: /^\d+$/,
    errorMessage: "Duration must be a positive number",
    required: false,
    input: {
      type: "number",
      min: 1,
      max: 1e3
      // Reasonable max value that works with different units
    },
    parse: function(value) {
      const parsed = Number(value);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error("Duration must be a positive number");
      }
      return parsed;
    }
  },
  unit: {
    name: "Time Unit",
    description: "Unit of time for the duration (used when Wait Type is Duration)",
    validationSchema: /^(minutes|hours|days)$/,
    errorMessage: "Invalid time unit",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Minutes", value: "minutes" },
        { label: "Hours", value: "hours" },
        { label: "Days", value: "days" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  targetDatetime: {
    name: "Target Datetime",
    getVisible: (inputValues) => {
      return inputValues.waitType === "datetime";
    },
    description: "The specific date and time to wait until (ISO format, used when Wait Type is Until Datetime)",
    validationSchema: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/,
    errorMessage: "Invalid datetime format. Please use ISO format (YYYY-MM-DDThh:mm:ss.sssZ)",
    required: false,
    input: {
      type: "datetime"
    },
    parse: function(value) {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
      }
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Control Flow", "Utility"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/extract_with_a_i.ts
var node3 = { "name": "Extract With AI", "id": "extract_with_a_i", "descripition": "Extracts specific information from text using AI analysis based on provided instructions", "inputSchema": {
  rawText: {
    name: "Raw Text",
    description: "The text to extract information from",
    validationSchema: /.*/,
    errorMessage: "Raw text must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Enter the text to analyze"
    },
    parse: (value) => value
  },
  description: {
    name: "Extraction Description",
    description: "Describe what information to extract from the raw text",
    validationSchema: /.*/,
    errorMessage: "Description must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e3,
      minLength: 1,
      placeholder: "Describe what to extract (e.g., 'Extract the name, email, and phone number')"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  extractedData: {
    name: "Extracted Data",
    description: "The data extracted from the raw text",
    example: "Extracted information",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Data", "AI"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/add_to_sms_campaign.ts
var node4 = { "name": "Add To SMS Campaign", "id": "add_to_sms_campaign", "descripition": "Adds a contact to an SMS campaign identified by campaign ID", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to add to the SMS campaign",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim().replace(/\s+/g, "");
    }
  },
  extraInstructions: {
    name: "Extra Instructions",
    description: "Additional instructions for the agent",
    validationSchema: /.*/,
    errorMessage: "Extra instructions must be less than 500 characters if provided",
    required: false,
    input: {
      type: "textarea",
      placeholder: "Please be polite and professional.",
      minLength: 0,
      maxLength: 1e3
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "SMS", "Lead Management"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/get_s_m_s_campaign_messages.ts
var node5 = { "name": "Get SMS Campaign Messages", "id": "get_s_m_s_campaign_messages", "descripition": "Retrieves all messages from a specific SMS campaign by campaign ID", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "Phone number to retrieve SMS campaign messages for",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please provide a valid phone number",
    required: true,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  messages: {
    name: "",
    description: "",
    example: [],
    validator: function(value) {
      return Array.isArray(value);
    }
  }
}, "groups": ["Communication", "SMS", "Data"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/send_email_notification.ts
var node6 = { "name": "Send Email Notification", "id": "send_email_notification", "descripition": "Sends an email message with customizable from, to, cc, bcc fields and SMTP configuration", "inputSchema": {
  useCustomSMTP: {
    name: "Use Custom SMTP",
    description: "Enable to use custom SMTP settings",
    validationSchema: /^(true|false)$/,
    errorMessage: "Please enter true or false",
    required: false,
    input: {
      type: "boolean"
    },
    parse: function(value) {
      return value === "true";
    }
  },
  from: {
    name: "From",
    description: "Sender email address",
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "sender@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  fromName: {
    name: "From Name",
    description: "Sender name",
    validationSchema: /^.+$/,
    errorMessage: "Name cannot be empty",
    required: false,
    input: {
      type: "text",
      placeholder: "John Doe"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  to: {
    name: "To",
    description: "Email recipient address(es)",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: true,
    input: {
      type: "text",
      placeholder: "recipient@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  cc: {
    name: "CC",
    description: "Carbon copy recipient(s)",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "cc@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  bcc: {
    name: "BCC",
    description: "Blind carbon copy recipient(s)",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "bcc@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  subject: {
    name: "Subject",
    description: "Email subject line",
    validationSchema: /.+/,
    errorMessage: "Subject cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "Email Subject"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  body: {
    name: "Body",
    description: "Email body content",
    validationSchema: /[\s\S]*/,
    errorMessage: "Email body cannot be empty",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Write your email content here"
    },
    parse: function(value) {
      return value;
    }
  },
  smtpHost: {
    name: "SMTP Host",
    description: "SMTP server hostname (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid hostname",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "text",
      placeholder: "smtp.example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  smtpPort: {
    name: "SMTP Port",
    description: "SMTP server port (optional)",
    validationSchema: /^\d+$/,
    errorMessage: "Please enter a valid port number",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "number",
      min: 1,
      max: 65535
    },
    parse: function(value) {
      return Number(value);
    }
  },
  smtpUsername: {
    name: "SMTP Username",
    description: "SMTP username for authentication (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid username",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "text",
      placeholder: "username"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  smtpPassword: {
    name: "SMTP Password",
    description: "SMTP password for authentication (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid password",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "password"
    },
    parse: function(value) {
      return value;
    }
  },
  smtpSecure: {
    name: "SMTP Secure",
    description: "Use secure connection (TLS) (optional)",
    validationSchema: /^(true|false)$/,
    errorMessage: "Please enter true or false",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "boolean"
    },
    parse: function(value) {
      return value === "true";
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "Email"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/send_s_m_s_notification.ts
var node7 = { "name": "Send SMS Notification", "id": "send_s_m_s_notification", "descripition": "Sends an SMS message to a specified phone number with customizable content", "inputSchema": {
  to: {
    name: "To",
    description: "Phone number to send the SMS to",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  body: {
    name: "Message",
    description: "The content of the SMS message",
    validationSchema: /^[\s\S]{1,1600}$/,
    errorMessage: "Please enter a valid message (maximum 1600 characters)",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1600,
      minLength: 1,
      placeholder: "Enter your message here"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "SMS"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/add_tag_to_lead.ts
var node8 = { "name": "Add Tag To Lead", "id": "add_tag_to_lead", "descripition": "Assigns a specified tag to a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  tag: {
    name: "Tag",
    description: "Tag to add to the lead",
    validationSchema: /^\S+$/,
    errorMessage: "Please enter a valid tag name",
    required: true,
    input: {
      type: "text",
      placeholder: "lead-tag"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/remove_tag_from_lead.ts
var node9 = { "name": "Remove Tag From Lead", "id": "remove_tag_from_lead", "descripition": "Removes a specified tag from a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  tag: {
    name: "Tag",
    description: "Tag to be removed from the lead",
    validationSchema: /^\S+$/,
    errorMessage: "Please enter a valid tag name",
    required: true,
    input: {
      type: "text",
      placeholder: "lead-tag"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/get_tags.ts
var node10 = { "name": "Get Tags", "id": "get_tags", "descripition": "Retrieves all tags associated with a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  tags: {
    name: "Tags",
    description: "List of tags associated with the lead",
    example: [],
    validator: function(value) {
      return Array.isArray(value);
    }
  }
}, "groups": ["Data", "Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/checkcondition.ts
var node11 = { "name": "Check Condition", "id": "checkcondition", "descripition": "Evaluates a condition comparing values with various operators, including AI-powered question answering", "inputSchema": {
  value: {
    name: "Value",
    description: "The value to check against a condition",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "Value to check"
    },
    parse: function(value) {
      return value;
    }
  },
  condition: {
    name: "Condition",
    description: "The type of comparison to perform",
    validationSchema: /.*/,
    errorMessage: "Please select a valid condition",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Equals", value: "equals" },
        { label: "Not Equals", value: "not_equals" },
        { label: "Greater Than", value: "greater_than" },
        { label: "Less Than", value: "less_than" },
        { label: "Contains", value: "contains" },
        { label: "Not Contains", value: "not_contains" },
        { label: "In", value: "in" },
        { label: "Not In", value: "not_in" },
        { label: "Ask Question AI", value: "ask_question_ai" }
      ]
    },
    parse: function(value) {
      if ([
        "equals",
        "not_equals",
        "greater_than",
        "less_than",
        "contains",
        "not_contains"
      ].includes(value)) {
        return value;
      }
      throw new Error("Invalid condition");
    }
  },
  compareTo: {
    name: "Compare To",
    description: "The value to compare against",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid comparison value",
    required: true,
    input: {
      type: "text",
      placeholder: "Value to compare against"
    },
    parse: function(value) {
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          const arr = JSON.parse(value);
          if (Array.isArray(arr)) {
            return arr;
          }
        } catch (e) {
        }
      }
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        return numValue;
      }
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
      return value;
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Whether the condition was met",
    validator: (value) => typeof value === "boolean",
    example: true
  }
}, "groups": ["Control Flow", "Logic"], "branches": { "match": { "name": "Match", "description": "Condition matched", "id": "match" }, "no_match": { "name": "No Match", "description": "Condition did not match", "id": "no_match" } }, "isTriggerNode": false };

// src/custom_webhook.ts
var node12 = { "name": "Custom Webhook", "id": "custom_webhook", "descripition": "Makes custom HTTP requests to external APIs with configurable methods, headers, and body content", "inputSchema": {
  url: {
    name: "URL",
    description: "The URL to send the request to",
    validationSchema: /^https?:\/\/.+/,
    errorMessage: "Please enter a valid URL starting with http:// or https://",
    required: true,
    input: {
      type: "text",
      placeholder: "https://api.example.com/endpoint"
    },
    parse: function(value) {
      const url = new URL(value.trim());
      const privateIpRegex = /^(127\.0\.0\.1|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})$/;
      if (url.hostname === "localhost" || privateIpRegex.test(url.hostname)) {
        throw new Error("Localhost and private IPs are not allowed");
      }
      return value.trim();
    }
  },
  method: {
    name: "HTTP Method",
    description: "The HTTP method to use for the request",
    validationSchema: /^(GET|POST|PUT|DELETE|PATCH)$/,
    errorMessage: "Please select a valid HTTP method",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "GET", value: "GET" },
        { label: "POST", value: "POST" },
        { label: "PUT", value: "PUT" },
        { label: "DELETE", value: "DELETE" },
        { label: "PATCH", value: "PATCH" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  headers: {
    name: "Headers",
    description: "HTTP headers to include in the request",
    validationSchema: /^.*$/,
    errorMessage: "Invalid headers format",
    required: false,
    input: {
      type: "textarea",
      maxLength: 1e3,
      minLength: 2,
      placeholder: '{"Authorization": "Bearer token", "Content-Type": "application/json"}'
    },
    parse: function(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return {};
      }
    }
  },
  body: {
    name: "Request Body",
    description: "The body of the request (for POST, PUT, PATCH)",
    validationSchema: /^.*$/,
    errorMessage: "Invalid request body",
    required: false,
    input: {
      type: "textarea",
      maxLength: 5e3,
      minLength: 0,
      placeholder: '{"key": "value"}'
    },
    parse: function(value) {
      return value;
    }
  },
  contentType: {
    name: "Content-Type",
    description: "The content type of the request body",
    validationSchema: /^[\w\-\/+.]+$/,
    errorMessage: "Please enter a valid content type",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "application/json", value: "application/json" },
        { label: "application/xml", value: "application/xml" },
        { label: "text/plain", value: "text/plain" },
        { label: "text/html", value: "text/html" },
        {
          label: "application/x-www-form-urlencoded",
          value: "application/x-www-form-urlencoded"
        },
        { label: "multipart/form-data", value: "multipart/form-data" }
      ]
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  responseStatus: {
    name: "Response Status",
    description: "HTTP status code of the response",
    example: 200,
    validator: function(value) {
      return Number.isInteger(value) && value >= 100 && value < 600;
    }
  },
  responseBody: {
    name: "Response Body",
    description: "Body of the HTTP response",
    example: '{ "success": true }',
    validator: function(value) {
      return typeof value === "string";
    }
  }
}, "groups": ["HTTP", "Integration"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/webhook_trigger.ts
var node13 = { "name": "Webhook", "id": "webhook_trigger", "descripition": "Starts a workflow when data is received from an external webhook, extracting contact information", "inputSchema": {}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Integration"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/inbound_call_trigger.ts
var node14 = { "name": "Inbound Call Trigger", "id": "inbound_call_trigger", "descripition": "Triggers a workflow when an inbound call is received, providing caller details and call transcription", "inputSchema": {}, "outputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number of the inbound caller",
    example: "+14155552671",
    validator: function(value) {
      return /^\+[0-9]{10,15}$/.test(value);
    }
  },
  transcription: {
    name: "Call Transcription",
    description: "The transcribed text from the inbound call",
    example: "Hello, I'm calling about your services.",
    validator: function(value) {
      return value.trim().length > 0 && value.length <= 1e4;
    }
  }
}, "groups": ["Triggers", "Communication", "Phone"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/get_uploaded_leads_trigger.ts
var node15 = { "name": "Get Uploaded Leads Trigger", "id": "get_uploaded_leads_trigger", "descripition": "Triggers a workflow when new leads are uploaded, with options for scheduling and limiting the number of leads", "inputSchema": {
  numLeadsToFetch: {
    name: "Number of Leads to Fetch",
    description: "The maximum number of leads to fetch at once",
    validationSchema: /^[1-9][0-9]*$/,
    errorMessage: "Must be a positive integer",
    required: true,
    input: {
      type: "number",
      min: 1,
      max: 1e3
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  startHour: {
    name: "Start Hour",
    description: "The hour to start fetching leads (0-23)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Must be a number between 0 and 23",
    required: true,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  endHour: {
    name: "End Hour",
    description: "The hour to stop fetching leads (0-23)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Must be a number between 0 and 23",
    required: true,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  daysOfWeek: {
    name: "Days of Week",
    description: "Days to fetch leads (0=Sunday to 6=Saturday)",
    validationSchema: /^([0-6](,[0-6])*)$/,
    errorMessage: "Must be comma-separated values between 0 and 6",
    required: true,
    input: {
      type: "multiselect",
      options: [
        { label: "Sunday", value: "0" },
        { label: "Monday", value: "1" },
        { label: "Tuesday", value: "2" },
        { label: "Wednesday", value: "3" },
        { label: "Thursday", value: "4" },
        { label: "Friday", value: "5" },
        { label: "Saturday", value: "6" }
      ]
    },
    parse: function(value) {
      return value.split(",").map((v) => parseInt(v.trim(), 10));
    }
  }
}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the lead",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.trim().length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the lead",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.trim().length > 0;
    }
  },
  email: {
    name: "Email",
    description: "The email address of the lead",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone",
    description: "The phone number of the lead",
    example: "+1234567890",
    validator: function(value) {
      return typeof value === "string" && value.trim().length > 0;
    }
  },
  otherFields: {
    name: "Other Fields",
    description: "Additional fields associated with the lead",
    example: { company: "Acme Inc", position: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Data", "Lead Management"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_tag_added.ts
var node16 = { "name": "On Tag Added", "id": "on_tag_added", "descripition": "Triggers a workflow when a tag is added to a lead, providing lead information", "inputSchema": {}, "outputSchema": {
  tag: {
    name: "Tag",
    description: "The tag that was added to the lead",
    example: "VIP",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/run_once_trigger.ts
var node17 = { "name": "Run Once", "id": "run_once_trigger", "descripition": "A trigger node that runs only once when the workflow is activated", "inputSchema": {}, "outputSchema": {}, "groups": ["Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/split_for_test.ts
var node18 = { "name": "Split For Test", "id": "split_for_test", "descripition": "Split workflow execution between testA and testB branches based on a ratio", "inputSchema": {
  splitRatio: {
    description: "Ratio to split between testA and testB (0-1, represents fraction going to testA)",
    required: true,
    name: "",
    validationSchema: /^0(\.\d+)?$|^1(\.0+)?$/,
    errorMessage: "",
    input: {
      type: "number",
      min: 0,
      max: 1,
      step: 0.01,
      default: 0.5
    },
    parse: function(value) {
      throw new Error("Function not implemented.");
    }
  }
}, "outputSchema": {
  splitResult: {
    name: "Split Result",
    description: "Result of the split",
    example: "test_a",
    validator: function(value) {
      return ["test_a", "test_b"].includes(value);
    }
  }
}, "groups": ["Control Flow"], "branches": { "test_a": { "id": "test_a", "name": "TestA", "description": "First branch of the split" }, "test_b": { "id": "test_b", "name": "TestB", "description": "Second branch of the split" } }, "isTriggerNode": false };

// src/store_variable.ts
var node19 = { "name": "Store Variable", "id": "store_variable", "descripition": "Stores a variable for later use", "inputSchema": {
  uniqueKey: {
    name: "Unique Key",
    description: "A unique key to identify the variable across different workflow runs. For example, if you use {{phone number}} variable of a lead as the unique key, the variable will be unique per phone number.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid unique key",
    required: true,
    input: {
      type: "text",
      placeholder: "myUniqueKey"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableName: {
    name: "Variable Name",
    description: "The name of the variable to get",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid variable name",
    required: true,
    input: {
      type: "text",
      placeholder: "myVariable"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableValue: {
    name: "Value",
    description: "The value to store in the variable",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "myValue"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Variables", "Control Flow"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/get_variable.ts
var node20 = { "name": "Get Variable", "id": "get_variable", "descripition": "Gets the value of a stored variable", "inputSchema": {
  uniqueKey: {
    name: "Unique Key",
    description: "A unique key to identify the variable across different workflow runs. For example, if you use {{phone number}} variable of a lead as the unique key, the variable will be unique per phone number.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid unique key",
    required: true,
    input: {
      type: "text",
      placeholder: "myUniqueKey"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableName: {
    name: "Variable Name",
    description: "The name of the variable to get",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid variable name",
    required: true,
    input: {
      type: "text",
      placeholder: "myVariable"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  defaultValue: {
    name: "Default Value",
    description: "Default value if the variable doesn't exist",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid default value",
    required: false,
    input: {
      type: "text",
      placeholder: "defaultValue"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {
  variableValue: {
    name: "Variable Value",
    description: "The value of the variable",
    example: "Some value",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Variables", "Control Flow"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/on_website_vistor_indentified.ts
var node21 = { "name": "On Website Visitor Identified", "id": "on_website_vistor_indentified", "descripition": "Triggers when an anonymous Website visitor is identified via our Pixel Tag", "inputSchema": {}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Trigger", "Website"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_lead_service_titan.ts
var node22 = { "name": "ServiceTitan New Lead", "id": "on_new_lead_service_titan", "descripition": "Triggers when a new lead is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the lead",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  status: {
    name: "Status",
    description: "The status of the lead",
    example: "New",
    validator: (value) => typeof value === "string"
  },
  priority: {
    name: "Priority",
    description: "The priority of the lead",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead",
    example: 456,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the lead",
    example: 789,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the lead",
    example: 101,
    validator: (value) => typeof value === "number" || value === null
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type associated with the lead",
    example: 202,
    validator: (value) => typeof value === "number" || value === null
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the lead",
    example: 303,
    validator: (value) => typeof value === "number"
  },
  followUpDate: {
    name: "Follow Up Date",
    description: "The follow-up date for the lead",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the lead",
    example: 404,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the lead was created",
    example: "2023-10-01T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the lead was last modified",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "The tag type IDs associated with the lead",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number") || value === null
  },
  dismissingReasonId: {
    name: "Dismissing Reason ID",
    description: "The ID of the reason for dismissing the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the lead",
    example: "Customer interested in HVAC services.",
    validator: (value) => typeof value === "string" || value === null
  },
  callReasonId: {
    name: "Call Reason ID",
    description: "The ID of the reason for the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  callId: {
    name: "Call ID",
    description: "The ID of the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  manualCallId: {
    name: "Manual Call ID",
    description: "The ID of the manual call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  leadUrl: {
    name: "Lead URL",
    description: "The URL of the lead in ServiceTitan",
    example: "https://app.servicetitan.com/leads/123",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCustomerName: {
    name: "Lead Customer Name",
    description: "The name of the customer associated with the lead",
    example: "Jane Smith",
    validator: (value) => typeof value === "string" || value === null
  },
  leadPhone: {
    name: "Lead Phone",
    description: "The phone number of the lead",
    example: "555-123-4567",
    validator: (value) => typeof value === "string" || value === null
  },
  leadEmail: {
    name: "Lead Email",
    description: "The email address of the lead",
    example: "johndoe@email.com",
    validator: (value) => typeof value === "string" || value === null
  },
  leadStreet: {
    name: "Lead Street",
    description: "The street address of the lead",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  leadUnit: {
    name: "Lead Unit",
    description: "The unit or apartment number of the lead",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCity: {
    name: "Lead City",
    description: "The city of the lead",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  leadState: {
    name: "Lead State",
    description: "The state of the lead",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  leadZip: {
    name: "Lead ZIP Code",
    description: "The ZIP code of the lead",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCountry: {
    name: "Lead Country",
    description: "The country of the lead",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_job_service_titan.ts
var node23 = { "name": "ServiceTitan New Job", "id": "on_new_job_service_titan", "descripition": "Triggers when a new job is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The job ID",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobNumber: {
    name: "Job Number",
    description: "The job number",
    example: "J-1001",
    validator: (value) => typeof value === "string"
  },
  projectId: {
    name: "Project ID",
    description: "The associated project ID, if any",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the job",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the job",
    example: 98765,
    validator: (value) => typeof value === "number"
  },
  jobStatus: {
    name: "Job Status",
    description: "The current status of the job",
    example: "Completed",
    validator: (value) => typeof value === "string"
  },
  completedOn: {
    name: "Completed On",
    description: "The date and time when the job was completed, if applicable",
    example: "2023-10-01T15:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the job",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type",
    example: 33445,
    validator: (value) => typeof value === "number"
  },
  priority: {
    name: "Priority",
    description: "The priority level of the job",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the job",
    example: 55667,
    validator: (value) => typeof value === "number"
  },
  appointmentCount: {
    name: "Appointment Count",
    description: "The number of appointments associated with the job",
    example: 2,
    validator: (value) => typeof value === "number"
  },
  firstAppointmentId: {
    name: "First Appointment ID",
    description: "The ID of the first appointment associated with the job",
    example: 77889,
    validator: (value) => typeof value === "number"
  },
  lastAppointmentId: {
    name: "Last Appointment ID",
    description: "The ID of the last appointment associated with the job",
    example: 99001,
    validator: (value) => typeof value === "number"
  },
  recallForId: {
    name: "Recall For ID",
    description: "The ID of the job this job is a recall for, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  warrantyId: {
    name: "Warranty ID",
    description: "The ID of the warranty associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  jobGeneratedLeadSource: {
    name: "Job Generated Lead Source",
    description: "Details about the lead source that generated the job, if applicable",
    example: null,
    validator: (value) => typeof value === "object" || value === null
  },
  noCharge: {
    name: "No Charge",
    description: "Indicates if the job is marked as no charge",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  notificationsEnabled: {
    name: "Notifications Enabled",
    description: "Indicates if notifications are enabled for the job",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the job record",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the job record",
    example: 22334,
    validator: (value) => typeof value === "number"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the job record",
    example: "2023-10-05T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "List of tag type IDs associated with the job",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  leadCallId: {
    name: "Lead Call ID",
    description: "The ID of the lead call associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  partnerLeadCallId: {
    name: "Partner Lead Call ID",
    description: "The ID of the partner lead call associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  soldById: {
    name: "Sold By ID",
    description: "The ID of the user who sold the job, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  customerPo: {
    name: "Customer PO",
    description: "The customer purchase order associated with the job, if any",
    example: "PO-12345",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceId: {
    name: "Invoice ID",
    description: "The ID of the invoice associated with the job",
    example: 44556,
    validator: (value) => typeof value === "number"
  },
  membershipId: {
    name: "Membership ID",
    description: "The ID of the membership associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount for the job, if available",
    example: 250.75,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the job",
    example: "AC repair and maintenance",
    validator: (value) => typeof value === "string" || value === null
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the job",
    example: [{ fieldId: 1, value: "Custom Value" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.fieldId === "number" && (typeof item.value === "string" || item.value === null || item.value === void 0)
    )
  },
  externalData: {
    name: "External Data",
    description: "External data associated with the job",
    example: [{ source: "API", data: "Some external data" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.source === "string" && (typeof item.data === "string" || item.data === null || item.data === void 0)
    )
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_invoice_service_titan.ts
var node24 = { "name": "ServiceTitan New Invoice", "id": "on_new_invoice_service_titan", "descripition": "Triggers when a new invoice is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the invoice",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  syncStatus: {
    name: "Sync Status",
    description: "The sync status of the invoice",
    example: "Synced",
    validator: (value) => typeof value === "string" || value === null
  },
  referenceNumber: {
    name: "Reference Number",
    description: "The reference number of the invoice",
    example: "INV-1001",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceDate: {
    name: "Invoice Date",
    description: "The date the invoice was created",
    example: "2023-10-01",
    validator: (value) => typeof value === "string" || value === null
  },
  dueDate: {
    name: "Due Date",
    description: "The due date for the invoice",
    example: "2023-10-15",
    validator: (value) => typeof value === "string" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount of the invoice",
    example: "150.00",
    validator: (value) => typeof value === "string" || value === null
  },
  balance: {
    name: "Balance",
    description: "The remaining balance of the invoice",
    example: "50.00",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceTypeId: {
    name: "Invoice Type ID",
    description: "The type ID of the invoice",
    example: 1,
    validator: (value) => typeof value === "number" || value === null
  },
  invoiceTypeName: {
    name: "Invoice Type Name",
    description: "The type name of the invoice",
    example: "Standard",
    validator: (value) => typeof value === "string" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the invoice",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the customer associated with the invoice",
    example: "John Doe",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressStreet: {
    name: "Customer Address Street",
    description: "The street address of the customer",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressUnit: {
    name: "Customer Address Unit",
    description: "The unit or apartment number of the customer's address",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressCity: {
    name: "Customer Address City",
    description: "The city of the customer's address",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressState: {
    name: "Customer Address State",
    description: "The state of the customer's address",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressZip: {
    name: "Customer Address ZIP Code",
    description: "The ZIP code of the customer's address",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressCountry: {
    name: "Customer Address Country",
    description: "The country of the customer's address",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  },
  paidOn: {
    name: "Paid On",
    description: "The date the invoice was paid",
    example: "2023-10-10",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_estimate_service_titan.ts
var node25 = { "name": "ServiceTitan New Estimate", "id": "on_new_estimate_service_titan", "descripition": "Triggers when a new estimate is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the estimate",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobId: {
    name: "Job ID",
    description: "The ID of the job associated with the estimate, if any",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  projectId: {
    name: "Project ID",
    description: "The ID of the project associated with the estimate, if any",
    example: 54321,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the estimate, if any",
    example: 98765,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the estimate, if any",
    example: 11223,
    validator: (value) => typeof value === "number" || value === null
  },
  name: {
    name: "Name",
    description: "The name of the estimate",
    example: "Estimate for AC Repair",
    validator: (value) => typeof value === "string" || value === null
  },
  jobNumber: {
    name: "Job Number",
    description: "The job number associated with the estimate, if any",
    example: "JOB-001",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the estimate",
    example: { value: 1, name: "Draft" },
    validator: (value) => typeof value === "object" || value === null
  },
  reviewStatus: {
    name: "Review Status",
    description: "The review status of the estimate",
    example: "NeedsApproval",
    validator: (value) => ["None", "NeedsApproval", "Approved", "NotApproved"].includes(value) || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the estimate",
    example: "This estimate covers the cost of AC repair.",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the estimate was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the estimate was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
  },
  soldOn: {
    name: "Sold On",
    description: "The date and time when the estimate was sold, if applicable",
    example: "2023-10-07T09:00:00.000Z",
    validator: (value) => typeof value === "string" || value === null
  },
  soldBy: {
    name: "Sold By",
    description: "The ID of the user who sold the estimate, if applicable",
    example: 33445,
    validator: (value) => typeof value === "number" || value === null
  },
  active: {
    name: "Active",
    description: "Indicates whether the estimate is active or has been archived",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  subtotal: {
    name: "Subtotal",
    description: "The subtotal amount of the estimate",
    example: 1500.75,
    validator: (value) => typeof value === "number"
  },
  tax: {
    name: "Tax",
    description: "The tax amount applied to the estimate",
    example: 120.06,
    validator: (value) => typeof value === "number"
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the estimate, if any",
    example: 55667,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitName: {
    name: "Business Unit Name",
    description: "The name of the business unit associated with the estimate, if any",
    example: "HVAC Services",
    validator: (value) => typeof value === "string" || value === null
  },
  isRecommended: {
    name: "Is Recommended",
    description: "Indicates whether the estimate is a recommended option",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  budgetCodeId: {
    name: "Budget Code ID",
    description: "The ID of the budget code associated with the estimate, if any",
    example: 77889,
    validator: (value) => typeof value === "number" || value === null
  },
  isChangeOrder: {
    name: "Is Change Order",
    description: "Indicates whether the estimate is a change order to an existing job or project",
    example: false,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_customer_service_titan.ts
var node26 = { "name": "ServiceTitan New Customer", "id": "on_new_customer_service_titan", "descripition": "Triggers when a new customer is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the customer",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  active: {
    name: "Active",
    description: "Indicates if the customer is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  name: {
    name: "Name",
    description: "The full name of the customer",
    example: "John Doe",
    validator: (value) => typeof value === "string"
  },
  type: {
    name: "Type",
    description: "The type of customer (e.g., Residential, Commercial)",
    example: "Residential",
    validator: (value) => typeof value === "string"
  },
  streetAddress: {
    name: "Street Address",
    description: "The street address of the customer",
    example: "123 Main St",
    validator: (value) => typeof value === "string"
  },
  unit: {
    name: "Unit",
    description: "The unit or apartment number of the customer",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null || value === void 0
  },
  city: {
    name: "City",
    description: "The city of the customer's address",
    example: "Springfield",
    validator: (value) => typeof value === "string"
  },
  state: {
    name: "State",
    description: "The state of the customer's address",
    example: "IL",
    validator: (value) => typeof value === "string"
  },
  zip: {
    name: "ZIP Code",
    description: "The ZIP code of the customer's address",
    example: "62704",
    validator: (value) => typeof value === "string"
  },
  country: {
    name: "Country",
    description: "The country of the customer's address",
    example: "USA",
    validator: (value) => typeof value === "string"
  },
  latitude: {
    name: "Latitude",
    description: "The latitude of the customer's location",
    example: 39.7817,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  longitude: {
    name: "Longitude",
    description: "The longitude of the customer's location",
    example: -89.6501,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the customer",
    example: [
      { typeId: 1, name: "Preferred Contact Method", value: "Email" }
    ],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.typeId === "number" && (typeof item.name === "string" || item.name === null || item.name === void 0) && (typeof item.value === "string" || item.value === null || item.value === void 0)
    )
  },
  balance: {
    name: "Balance",
    description: "The current balance of the customer account",
    example: 150.75,
    validator: (value) => typeof value === "number"
  },
  taxExempt: {
    name: "Tax Exempt",
    description: "Indicates if the customer is tax exempt",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "List of tag type IDs associated with the customer",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  doNotMail: {
    name: "Do Not Mail",
    description: "Indicates if the customer has opted out of mailings",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  doNotService: {
    name: "Do Not Service",
    description: "Indicates if the customer should not be serviced",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the customer record",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the customer record",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the customer record",
    example: "2023-10-05T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  mergedToId: {
    name: "Merged To ID",
    description: "The ID of the customer record this one was merged into, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  externalData: {
    name: "External Data",
    description: "External data key-value pairs associated with the customer",
    example: [{ key: "CRM_ID", value: "C12345" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.key === "string" && typeof item.value === "string"
    )
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_appoinment_service_titan.ts
var node27 = { "name": "ServiceTitan New Appoinment", "id": "on_new_appoinment_service_titan", "descripition": "Triggers when a new appointment is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The appointment ID",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobId: {
    name: "Job ID",
    description: "The associated job ID",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  appointmentNumber: {
    name: "Appointment Number",
    description: "The appointment number",
    example: "APT-001",
    validator: (value) => typeof value === "string" || value === null
  },
  start: {
    name: "Start",
    description: "The start time of the appointment",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string"
  },
  end: {
    name: "End",
    description: "The end time of the appointment",
    example: "2023-10-01T11:00:00Z",
    validator: (value) => typeof value === "string"
  },
  arrivalWindowStart: {
    name: "Arrival Window Start",
    description: "The start of the arrival window",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  arrivalWindowEnd: {
    name: "Arrival Window End",
    description: "The end of the arrival window",
    example: "2023-10-01T10:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the appointment",
    example: "Scheduled",
    validator: (value) => typeof value === "string"
  },
  specialInstructions: {
    name: "Special Instructions",
    description: "Any special instructions for the appointment",
    example: "Customer prefers morning visits",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the appointment",
    example: "2023-09-25T08:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the appointment",
    example: "2023-09-26T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the associated customer",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  unused: {
    name: "Unused",
    description: "Indicates if the appointment is unused",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the appointment",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  isConfirmed: {
    name: "Is Confirmed",
    description: "Indicates if the appointment is confirmed",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_job_or_project_note_service_titan.ts
var node28 = { "name": "ServiceTitan New Job Or Project Note", "id": "on_new_job_or_project_note_service_titan", "descripition": "Triggers when a new note is added to a job or project in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  entityType: {
    name: "Note Type",
    description: "Select whether to trigger on Job Notes or Project Notes",
    required: true,
    validationSchema: /^(Job|Project)$/,
    errorMessage: "Note Type must be either 'Job' or 'Project'",
    input: {
      type: "select",
      options: [
        { label: "Job", value: "Job" },
        { label: "Project", value: "Project" }
      ]
    },
    parse: (value) => value
  },
  entityId: {
    name: "Entity ID",
    description: "The ID of the Job or Project to monitor for new notes (e.g., Job ID or Project ID)",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Entity ID must be a valid number",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  text: {
    name: "Text",
    description: "The content of the note",
    example: "This is a sample note text.",
    validator: (value) => typeof value === "string"
  },
  isPinned: {
    name: "Is Pinned",
    description: "Indicates if the note is pinned",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the note",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the note was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
    // Accept any value, further validation can be done if needed
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the note was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
    // Accept any value, further validation can be done if needed
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_lead_note_service_titan.ts
var node29 = { "name": "ServiceTitan New Lead Note", "id": "on_new_lead_note_service_titan", "descripition": "Triggers when a new note is added to a lead in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the note",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  text: {
    name: "Text",
    description: "The content of the note",
    example: "This is a note.",
    validator: (value) => typeof value === "string"
  },
  isPinned: {
    name: "Is Pinned",
    description: "Indicates if the note is pinned",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the note",
    example: 456,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The timestamp when the note was created",
    example: "2023-10-01T12:34:56Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The timestamp when the note was last modified",
    example: "2023-10-02T12:34:56Z",
    validator: (value) => typeof value === "string"
  },
  leadId: {
    name: "Lead ID",
    description: "The ID of the associated lead",
    example: 789,
    validator: (value) => typeof value === "number"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_call_service_titan.ts
var node30 = { "name": "ServiceTitan New Call", "id": "on_new_call_service_titan", "descripition": "Triggers when a new call is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  createdOn: {
    name: "Created On",
    description: "The date and time when the call was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  active: {
    name: "Active",
    description: "Indicates if the call is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  id: {
    name: "ID",
    description: "The unique identifier for the call",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  receivedOn: {
    name: "Received On",
    description: "The date and time when the call was received",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  duration: {
    name: "Duration",
    description: "The duration of the call",
    example: "00:05:30",
    validator: (value) => true
  },
  from: {
    name: "From",
    description: "The caller's phone number",
    example: "+1234567890",
    validator: (value) => typeof value === "string"
  },
  to: {
    name: "To",
    description: "The recipient's phone number",
    example: "+0987654321",
    validator: (value) => typeof value === "string"
  },
  direction: {
    name: "Direction",
    description: "The direction of the call (inbound/outbound)",
    example: "inbound",
    validator: (value) => typeof value === "string"
  },
  callType: {
    name: "Call Type",
    description: "The type of the call",
    example: null,
    validator: (value) => typeof value === "string" || value === null
  },
  reasonId: {
    name: "Reason ID",
    description: "The ID of the reason for the call",
    example: 1,
    validator: (value) => typeof value === "number"
  },
  reasonName: {
    name: "Reason Name",
    description: "The name of the reason for the call",
    example: "General Inquiry",
    validator: (value) => typeof value === "string"
  },
  reasonLead: {
    name: "Reason Lead",
    description: "Indicates if the reason is a lead",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  reasonActive: {
    name: "Reason Active",
    description: "Indicates if the reason is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  recordingUrl: {
    name: "Recording URL",
    description: "The URL of the call recording",
    example: "https://example.com/recording.mp3",
    validator: (value) => typeof value === "string"
  },
  voiceMailUrl: {
    name: "Voice Mail URL",
    description: "The URL of the voicemail",
    example: "https://example.com/voicemail.mp3",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the call record",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  createdByName: {
    name: "Created By Name",
    description: "The name of the user who created the call record",
    example: "John Doe",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the associated customer",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the associated customer",
    example: "Acme Corp",
    validator: (value) => typeof value === "string"
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the associated campaign",
    example: 98765,
    validator: (value) => typeof value === "number"
  },
  campaignName: {
    name: "Campaign Name",
    description: "The name of the associated campaign",
    example: "Spring Sale",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the call record was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
  },
  agentId: {
    name: "Agent ID",
    description: "The ID of the agent who handled the call",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  agentName: {
    name: "Agent Name",
    description: "The name of the agent who handled the call",
    example: "Jane Smith",
    validator: (value) => typeof value === "string"
  },
  agentExternalId: {
    name: "Agent External ID",
    description: "The external ID of the agent",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  sid: {
    name: "SID",
    description: "The SID of the call",
    example: null,
    validator: (value) => typeof value === "string" || value === null
  },
  tags: {
    name: "Tags",
    description: "Tags associated with the call",
    example: ["important", "follow-up"],
    validator: (value) => Array.isArray(value) || value === null || typeof value === "string" && value.length === 0
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_updated_call_service_titan.ts
var node31 = { "name": "ServiceTitan Updated Call", "id": "on_updated_call_service_titan", "descripition": "Triggers when a call is updated in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_updated_estimate_service_titan.ts
var node32 = { "name": "ServiceTitan Updated Estimate", "id": "on_updated_estimate_service_titan", "descripition": "Triggers when an estimate is updated in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_project_service_titan.ts
var node33 = { "name": "ServiceTitan New Project", "id": "on_new_project_service_titan", "descripition": "Triggers when a new project is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the project",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  number: {
    name: "Number",
    description: "The project number",
    example: "PRJ-001",
    validator: (value) => typeof value === "string" || value === null
  },
  name: {
    name: "Name",
    description: "The name of the project",
    example: "New Project",
    validator: (value) => typeof value === "string" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the project",
    example: "This is a summary of the project.",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the project",
    example: "In Progress",
    validator: (value) => typeof value === "string" || value === null
  },
  statusId: {
    name: "Status ID",
    description: "The ID of the project's status",
    example: 1,
    validator: (value) => typeof value === "number" || value === null
  },
  subStatus: {
    name: "Sub Status",
    description: "The sub-status of the project",
    example: "On Hold",
    validator: (value) => typeof value === "string" || value === null
  },
  subStatusId: {
    name: "Sub Status ID",
    description: "The ID of the project's sub-status",
    example: 2,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the project",
    example: 456,
    validator: (value) => typeof value === "number"
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the project",
    example: 789,
    validator: (value) => typeof value === "number"
  },
  projectTypeId: {
    name: "Project Type ID",
    description: "The type ID of the project",
    example: 3,
    validator: (value) => typeof value === "number" || value === null
  },
  projectManagerIds: {
    name: "Project Manager IDs",
    description: "The IDs of the project managers",
    example: [101, 102],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  businessUnitIds: {
    name: "Business Unit IDs",
    description: "The IDs of the business units associated with the project",
    example: [201, 202],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  startDate: {
    name: "Start Date",
    description: "The start date of the project",
    example: "2023-10-01",
    validator: (value) => typeof value === "string" || value === null
  },
  targetCompletionDate: {
    name: "Target Completion Date",
    description: "The target completion date of the project",
    example: "2023-12-31",
    validator: (value) => typeof value === "string" || value === null
  },
  actualCompletionDate: {
    name: "Actual Completion Date",
    description: "The actual completion date of the project",
    example: "2024-01-15",
    validator: (value) => typeof value === "string" || value === null
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the project",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the project",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  jobIds: {
    name: "Job IDs",
    description: "List of job IDs associated with the project",
    example: [301, 302, 303],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  customFields: {
    name: "Custom Fields",
    description: "List of custom fields associated with the project",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  externalData: {
    name: "External Data",
    description: "List of external data associated with the project",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/on_new_payment_service_titan.ts
var node34 = { "name": "ServiceTitan New Payment", "id": "on_new_payment_service_titan", "descripition": "Triggers when a new payment is created in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the payment",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  syncStatus: {
    name: "Sync Status",
    description: "The sync status of the payment",
    example: "Synced",
    validator: (value) => typeof value === "string" || value === null
  },
  referenceNumber: {
    name: "Reference Number",
    description: "The reference number of the payment",
    example: "REF12345",
    validator: (value) => typeof value === "string" || value === null
  },
  date: {
    name: "Date",
    description: "The date of the payment",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  type: {
    name: "Type",
    description: "The type of the payment",
    example: "Credit Card",
    validator: (value) => typeof value === "string" || value === null
  },
  typeId: {
    name: "Type ID",
    description: "The type ID of the payment",
    example: "CC",
    validator: (value) => typeof value === "string" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount of the payment",
    example: "100.00",
    validator: (value) => typeof value === "string" || value === null
  },
  unappliedAmount: {
    name: "Unapplied Amount",
    description: "The unapplied amount of the payment",
    example: "0.00",
    validator: (value) => typeof value === "string" || value === null
  },
  memo: {
    name: "Memo",
    description: "The memo of the payment",
    example: "Payment for invoice INV-1001",
    validator: (value) => typeof value === "string" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the payment",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the customer associated with the payment",
    example: "John Doe",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the payment",
    example: "BU123",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitName: {
    name: "Business Unit Name",
    description: "The name of the business unit associated with the payment",
    example: "Main Office",
    validator: (value) => typeof value === "string" || value === null
  },
  batchId: {
    name: "Batch ID",
    description: "The ID of the batch associated with the payment",
    example: "BATCH001",
    validator: (value) => typeof value === "string" || value === null
  },
  batchNumber: {
    name: "Batch Number",
    description: "The number of the batch associated with the payment",
    example: "1001",
    validator: (value) => typeof value === "string" || value === null
  },
  createdBy: {
    name: "Created By",
    description: "The user who created the payment",
    example: "admin",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountId: {
    name: "General Ledger Account ID",
    description: "The ID of the general ledger account associated with the payment",
    example: "GL123",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountNumber: {
    name: "General Ledger Account Number",
    description: "The number of the general ledger account associated with the payment",
    example: "4000",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountName: {
    name: "General Ledger Account Name",
    description: "The name of the general ledger account associated with the payment",
    example: "Accounts Receivable",
    validator: (value) => typeof value === "string" || value === null
  },
  appliedTo: {
    name: "Applied To",
    description: "Details of invoices or credits the payment is applied to",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the payment",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  authCode: {
    name: "Auth Code",
    description: "The authorization code for the payment",
    example: "AUTH12345",
    validator: (value) => typeof value === "string" || value === null
  },
  checkNumber: {
    name: "Check Number",
    description: "The check number if the payment was made by check",
    example: "CHK1001",
    validator: (value) => typeof value === "string" || value === null
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the payment was last modified",
    example: "2023-10-02T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the payment was created",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  active: {
    name: "Active",
    description: "Indicates whether the payment is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/apply_tag_service_titan.ts
var node35 = { "name": "Apply Tag Service Titan", "id": "apply_tag_service_titan", "descripition": "Applies a tag to a customer in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tagTypeId: {
    name: "Tag ID from ServiceTitan",
    description: "The ID of the tag to apply",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tag ID is invalid",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  customerId: {
    name: "Customer ID from ServiceTitan",
    description: "The ID of the customer to apply the tag to",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Customer ID is invalid",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/add_note_to_lead_service_titan.ts
var node36 = { "name": "Add Note To Lead Service Titan", "id": "add_note_to_lead_service_titan", "descripition": "Adds a note to a lead in ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  leadId: {
    name: "Lead ID",
    description: "The ID of the lead to add a note to",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Lead ID must be a valid number",
    input: {
      type: "number",
      max: 2147483647,
      min: 1
    },
    parse: (value) => parseInt(value, 10)
  },
  text: {
    name: "Note Text",
    description: "The content of the note to be added",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Note text is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Notes"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/get_lead_service_titan.ts
var node37 = { "name": "Get Lead Service Titan", "id": "get_lead_service_titan", "descripition": "Get details of a specific lead from ServiceTitan", "inputSchema": {
  clientId: {
    name: "Client ID",
    description: "Your ServiceTitan Client ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  clientSecret: {
    name: "Client Secret",
    description: "Your ServiceTitan Client Secret",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Client Secret is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  tenantId: {
    name: "Tenant ID",
    description: "Your ServiceTitan Tenant ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tenant ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead (optional)",
    required: false,
    validationSchema: /^\d+$/,
    errorMessage: "Customer ID must be a number",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  leadId: {
    name: "Lead ID",
    description: "The ID of the lead to retrieve (optional)",
    required: false,
    validationSchema: /^\d+$/,
    errorMessage: "Lead ID must be a number",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  phone: {
    name: "Phone",
    description: "The phone number of the lead to retrieve (optional)",
    required: false,
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Phone must be a valid phone number",
    input: {
      type: "text"
    },
    parse: (value) => value.trim()
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the lead",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  status: {
    name: "Status",
    description: "The status of the lead",
    example: "New",
    validator: (value) => typeof value === "string"
  },
  priority: {
    name: "Priority",
    description: "The priority of the lead",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead",
    example: 456,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the lead",
    example: 789,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the lead",
    example: 101,
    validator: (value) => typeof value === "number" || value === null
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type associated with the lead",
    example: 202,
    validator: (value) => typeof value === "number" || value === null
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the lead",
    example: 303,
    validator: (value) => typeof value === "number"
  },
  followUpDate: {
    name: "Follow Up Date",
    description: "The follow-up date for the lead",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the lead",
    example: 404,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the lead was created",
    example: "2023-10-01T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the lead was last modified",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "The tag type IDs associated with the lead",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number") || value === null
  },
  dismissingReasonId: {
    name: "Dismissing Reason ID",
    description: "The ID of the reason for dismissing the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the lead",
    example: "Customer interested in HVAC services.",
    validator: (value) => typeof value === "string" || value === null
  },
  callReasonId: {
    name: "Call Reason ID",
    description: "The ID of the reason for the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  callId: {
    name: "Call ID",
    description: "The ID of the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  manualCallId: {
    name: "Manual Call ID",
    description: "The ID of the manual call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  leadUrl: {
    name: "Lead URL",
    description: "The URL of the lead in ServiceTitan",
    example: "https://app.servicetitan.com/leads/123",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCustomerName: {
    name: "Lead Customer Name",
    description: "The name of the customer associated with the lead",
    example: "Jane Smith",
    validator: (value) => typeof value === "string" || value === null
  },
  leadPhone: {
    name: "Lead Phone",
    description: "The phone number of the lead",
    example: "555-123-4567",
    validator: (value) => typeof value === "string" || value === null
  },
  leadEmail: {
    name: "Lead Email",
    description: "The email address of the lead",
    example: "johndoe@email.com",
    validator: (value) => typeof value === "string" || value === null
  },
  leadStreet: {
    name: "Lead Street",
    description: "The street address of the lead",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  leadUnit: {
    name: "Lead Unit",
    description: "The unit or apartment number of the lead",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCity: {
    name: "Lead City",
    description: "The city of the lead",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  leadState: {
    name: "Lead State",
    description: "The state of the lead",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  leadZip: {
    name: "Lead ZIP Code",
    description: "The ZIP code of the lead",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCountry: {
    name: "Lead Country",
    description: "The country of the lead",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Leads"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false };

// src/on_email_received.ts
var node38 = { "name": "Email Received", "id": "on_email_received", "descripition": "Triggers when a new email is received in the connected email account.\n It automatically extracts key information like lead's name, email, phone number, and any other fields present in the email body.", "inputSchema": {}, "outputSchema": {
  from: {
    name: "From",
    description: "The email address of the sender",
    example: "example@gmail.com",
    validator: (value) => {
      if (typeof value !== "string") return false;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    }
  },
  subject: {
    name: "Subject",
    description: "The subject of the email",
    example: "Meeting Reminder",
    validator: (value) => typeof value === "string"
  },
  body: {
    name: "Body",
    description: "The plain text body of the email",
    example: "Don't forget about our meeting tomorrow at 10 AM.",
    validator: (value) => typeof value === "string"
  },
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true };

// src/process_variable.ts
var node39 = { "name": "Process Variable", "id": "process_variable", "descripition": "Processes a variable with various string, number, and JSON operations", "inputSchema": {
  value: {
    name: "Value",
    description: "The value to process",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "Value to process"
    },
    parse: function(value) {
      return value;
    }
  },
  operation: {
    name: "Operation",
    description: "The type of operation to perform on the value",
    validationSchema: /.*/,
    errorMessage: "Please select a valid operation",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "To Uppercase", value: "to_uppercase" },
        { label: "To Lowercase", value: "to_lowercase" },
        { label: "Capitalize", value: "capitalize" },
        { label: "Trim", value: "trim" },
        { label: "Substring", value: "substring" },
        { label: "Replace", value: "replace" },
        { label: "Split", value: "split" },
        { label: "Join", value: "join" },
        { label: "Length", value: "length" },
        { label: "Number Operation", value: "number_operation" },
        { label: "Parse JSON", value: "parse_json" },
        { label: "Stringify JSON", value: "stringify_json" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  additionalValue: {
    name: "Additional Value",
    description: "Additional value needed for operations like replace, split, join, etc.",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      const op = currentValues["operation"];
      return op === "replace" || op === "split" || op === "join" || op === "number_operation";
    },
    errorMessage: "Please provide a valid value",
    required: false,
    input: {
      type: "text",
      placeholder: "Additional value"
    },
    parse: function(value) {
      return value;
    }
  },
  startIndex: {
    name: "Start Index",
    description: "Starting index for operations like substring",
    validationSchema: /^\d+$/,
    errorMessage: "Please provide a valid number",
    getVisible: (currentValues) => {
      return currentValues["operation"] === "substring";
    },
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  endIndex: {
    name: "End Index",
    description: "Ending index for operations like substring",
    validationSchema: /^\d+$/,
    errorMessage: "Please provide a valid number",
    getVisible: (currentValues) => {
      return currentValues["operation"] === "substring";
    },
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  mathOperation: {
    name: "Math Operation",
    description: "Type of mathematical operation to perform",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "number_operation";
    },
    errorMessage: "Please select a valid math operation",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Add", value: "add" },
        { label: "Subtract", value: "subtract" },
        { label: "Multiply", value: "multiply" },
        { label: "Divide", value: "divide" },
        { label: "Modulo", value: "modulo" },
        { label: "Round", value: "round" },
        { label: "Floor", value: "floor" },
        { label: "Ceiling", value: "ceil" }
      ]
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "The result of the processing operation",
    validator: (value) => true,
    // Accept any type based on the operation
    example: "processed result"
  }
}, "groups": ["Data Processing", "Utilities"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" }, "error": { "id": "error", "name": "Error", "description": "An error occurred during execution" } }, "isTriggerNode": false };

// src/index.ts
var nodes = { make_call: node, waittime: node2, extract_with_a_i: node3, add_to_sms_campaign: node4, get_s_m_s_campaign_messages: node5, send_email_notification: node6, send_s_m_s_notification: node7, add_tag_to_lead: node8, remove_tag_from_lead: node9, get_tags: node10, checkcondition: node11, custom_webhook: node12, webhook_trigger: node13, inbound_call_trigger: node14, get_uploaded_leads_trigger: node15, on_tag_added: node16, run_once_trigger: node17, split_for_test: node18, store_variable: node19, get_variable: node20, on_website_vistor_indentified: node21, on_new_lead_service_titan: node22, on_new_job_service_titan: node23, on_new_invoice_service_titan: node24, on_new_estimate_service_titan: node25, on_new_customer_service_titan: node26, on_new_appoinment_service_titan: node27, on_new_job_or_project_note_service_titan: node28, on_new_lead_note_service_titan: node29, on_new_call_service_titan: node30, on_updated_call_service_titan: node31, on_updated_estimate_service_titan: node32, on_new_project_service_titan: node33, on_new_payment_service_titan: node34, apply_tag_service_titan: node35, add_note_to_lead_service_titan: node36, get_lead_service_titan: node37, on_email_received: node38, process_variable: node39 };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  nodes
});
