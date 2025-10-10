
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"On Website Visitor Identified","id":"on_website_vistor_indentified","descripition":"Triggers when an anonymous Website visitor is identified via our Pixel Tag","inputSchema": {},"outputSchema": {
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
  },"groups":["Trigger","Website"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true} as Node;

export { node as "on_website_vistor_indentified" };
