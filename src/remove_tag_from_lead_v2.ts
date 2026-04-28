
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Remove Tag From Lead V2","id":"remove_tag_from_lead_v2","descripition":"Removes a specified tag from a lead identified by email or phone number, with a tag dropdown selector","inputSchema": {
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
      parseLead: function (lead: Lead): string {
        return lead.email;
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
      parseLead: function (lead: Lead): string {
        return lead.phone;
      },
    },
    tag: {
      name: "Tag",
      description: "Tag to be removed from the lead",
      validationSchema: /^\S+$/,
      errorMessage: "Please enter a valid tag name",
      required: true,
      input: {
        type: "custom",
        tag: "tag-dropdown",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {},"groups":["system","Lead Management","Tags"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "remove_tag_from_lead_v2" };
