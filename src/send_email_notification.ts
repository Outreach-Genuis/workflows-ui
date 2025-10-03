
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
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
        "maxLength": 10000,
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
} as Node;
  
  export {
   node as "send_email_notification"
  };