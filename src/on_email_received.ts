
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Email Received","id":"on_email_received","descripition":"Triggers when a new email is received in the connected email account.\n It automatically extracts key information like lead's name, email, phone number, and any other fields present in the email body.","inputSchema": {},"outputSchema": {
    from: {
      name: "From",
      description: "The email address of the sender",
      example: "example@gmail.com",
      validator: (value: any) => {
        if (typeof value !== "string") return false;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(value);
      },
    },
    subject: {
      name: "Subject",
      description: "The subject of the email",
      example: "Meeting Reminder",
      validator: (value: any) => typeof value === "string",
    },
    body: {
      name: "Body",
      description: "The plain text body of the email",
      example: "Don't forget about our meeting tomorrow at 10 AM.",
      validator: (value: any) => typeof value === "string",
    },
    firstName: {
      name: "First Name",
      description: "The first name of the person",
      example: "John",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    lastName: {
      name: "Last Name",
      description: "The last name of the person",
      example: "Doe",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    email: {
      name: "Email",
      description: "Email address of the person",
      example: "john.doe@example.com",
      validator: function (value: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return typeof value === "string" && emailRegex.test(value);
      },
    },
    phone: {
      name: "Phone Number",
      description: "Contact phone number",
      example: "+15551234567",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
    },
    otherFields: {
      name: "Additional Information",
      description: "Any other information provided by the webhook",
      example: { company: "Acme Inc", role: "Manager" },
      validator: function (value: Record<string, any>): boolean {
        return typeof value === "object" && value !== null;
      },
    },
  },"groups":[],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true} as Node;

export { node as "on_email_received" };
