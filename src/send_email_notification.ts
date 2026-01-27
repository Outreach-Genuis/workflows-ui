
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Send Email Notification","id":"send_email_notification","descripition":"Sends an email message with customizable from, to, cc, bcc fields and SMTP configuration","inputSchema": {
    useCustomSMTP: {
      name: "Use Custom SMTP",
      description: "Enable to use custom SMTP settings",
      validationSchema: /^(true|false)$/,
      errorMessage: "Please enter true or false",
      required: false,
      input: {
        type: "boolean",
      },
      parse: function (value: string): boolean {
        return value === "true";
      },
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
        placeholder: "sender@example.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    fromName: {
      name: "From Name",
      description: "Sender name",
      validationSchema: /^.+$/,
      errorMessage: "Name cannot be empty",
      required: false,
      input: {
        type: "text",
        placeholder: "John Doe",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    to: {
      name: "To",
      description: "Email recipient address(es)",
      validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Invalid email format",
      required: true,
      input: {
        type: "text",
        placeholder: "recipient@example.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    cc: {
      name: "CC",
      description: "Carbon copy recipient(s)",
      validationSchema:
        /^\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\s*,\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})*\s*$/,
      errorMessage: "Invalid email format",
      required: false,
      input: {
        type: "text",
        placeholder: "cc@example.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    bcc: {
      name: "BCC",
      description: "Blind carbon copy recipient(s)",
      validationSchema:
        /^\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\s*,\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})*\s*$/,
      errorMessage: "Invalid email format",
      required: false,
      input: {
        type: "text",
        placeholder: "bcc@example.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    subject: {
      name: "Subject",
      description: "Email subject line",
      validationSchema: /.+/,
      errorMessage: "Subject cannot be empty",
      required: true,
      input: {
        type: "text",
        placeholder: "Email Subject",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    body: {
      name: "Body",
      description: "Email body content",
      validationSchema: /[\s\S]*/,
      errorMessage: "Email body cannot be empty",
      required: true,
      input: {
        type: "textarea",
        maxLength: 10000,
        minLength: 1,
        placeholder: "Write your email content here",
      },
      parse: function (value: string): string {
        return value;
      },
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
        placeholder: "smtp.example.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
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
        max: 65535,
      },
      parse: function (value: string): number {
        return Number(value);
      },
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
        placeholder: "username",
      },
      parse: function (value: string): string {
        return value.trim();
      },
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
        type: "password",
      },
      parse: function (value: string): string {
        return value;
      },
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
        type: "boolean",
      },
      parse: function (value: string): boolean {
        return value === "true";
      },
    },
  },"outputSchema": {},"groups":["Communication","Email"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "send_email_notification" };
