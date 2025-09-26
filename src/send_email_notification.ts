const node = {
  "name": "SendEmailNotification",
  "id": "send_email_notification",
  "descripition": "A description for SendEmailNotification",
  "inputSchema": {
    "from": {
      "name": "From",
      "description": "Sender email address",
      "validationSchema": /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": false
    },
    "fromName": {
      "name": "From Name",
      "description": "Sender name",
      "validationSchema": /^.+$/,
      "errorMessage": "Name cannot be empty",
      "required": false
    },
    "to": {
      "name": "To",
      "description": "Email recipient address(es)",
      "validationSchema": /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": true
    },
    "cc": {
      "name": "CC",
      "description": "Carbon copy recipient(s)",
      "validationSchema": /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": false
    },
    "bcc": {
      "name": "BCC",
      "description": "Blind carbon copy recipient(s)",
      "validationSchema": /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      "errorMessage": "Invalid email format",
      "required": false
    },
    "subject": {
      "name": "Subject",
      "description": "Email subject line",
      "validationSchema": /.+/,
      "errorMessage": "Subject cannot be empty",
      "required": true
    },
    "body": {
      "name": "Body",
      "description": "Email body content",
      "validationSchema": /[\\s\\S]*/,
      "errorMessage": "Email body cannot be empty",
      "required": true
    },
    "smtpHost": {
      "name": "SMTP Host",
      "description": "SMTP server hostname (optional)",
      "validationSchema": /^.*$/,
      "errorMessage": "Please enter a valid hostname",
      "required": false
    },
    "smtpPort": {
      "name": "SMTP Port",
      "description": "SMTP server port (optional)",
      "validationSchema": /^\\d+$/,
      "errorMessage": "Please enter a valid port number",
      "required": false
    },
    "smtpUsername": {
      "name": "SMTP Username",
      "description": "SMTP username for authentication (optional)",
      "validationSchema": /^.*$/,
      "errorMessage": "Please enter a valid username",
      "required": false
    },
    "smtpPassword": {
      "name": "SMTP Password",
      "description": "SMTP password for authentication (optional)",
      "validationSchema": /^.*$/,
      "errorMessage": "Please enter a valid password",
      "required": false
    },
    "smtpSecure": {
      "name": "SMTP Secure",
      "description": "Use secure connection (TLS) (optional)",
      "validationSchema": /^(true|false)$/,
      "errorMessage": "Please enter true or false",
      "required": false
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
   node as "send_email_notification"
  };