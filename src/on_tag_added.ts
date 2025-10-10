
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"On Tag Added","id":"on_tag_added","descripition":"Triggers a workflow when a tag is added to a lead, providing lead information","inputSchema": {},"outputSchema": {
    tag: {
      name: "Tag",
      description: "The tag that was added to the lead",
      example: "VIP",
      validator: function (value: string): boolean {
        return typeof value === "string" && value.length > 0;
      },
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
  },"groups":["Triggers","Lead Management","Tags"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true} as Node;

export { node as "on_tag_added" };
