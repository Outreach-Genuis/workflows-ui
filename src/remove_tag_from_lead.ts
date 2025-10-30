
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Remove Tag From Lead","id":"remove_tag_from_lead","descripition":"Removes a specified tag from a lead identified by email or phone number","inputSchema": {
    email: {
      name: "Email",
      description: "Email address of the lead",
      validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Please enter a valid email address",
      required: false,
      input: {
        type: "text",
        placeholder: "john.doe@example.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    phone: {
      name: "Phone",
      description: "Phone number of the lead",
      validationSchema: /^\+?[1-9]\d{1,14}$/,
      errorMessage: "Please enter a valid phone number",
      required: false,
      input: {
        type: "text",
        placeholder: "+1234567890",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    tag: {
      name: "Tag",
      description: "Tag to be removed from the lead",
      validationSchema: /^\S+$/,
      errorMessage: "Please enter a valid tag name",
      required: true,
      input: {
        type: "text",
        placeholder: "lead-tag",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {},"groups":["Lead Management","Tags"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false} as Node;

export { node as "remove_tag_from_lead" };
