
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Tag Added","id":"on_tag_added","descripition":"Triggers a workflow when a tag is added to a lead, providing lead information","inputSchema": {},"outputSchema": {
    tag: {
      name: "Tag",
      description: "The tag that was added to the lead",
      example: "VIP Customer",
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
    street_address: {
      name: "Street Address",
      description: "The street address of the person",
      example: "123 Main St",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    apartment_suite: {
      name: "Apartment/Suite",
      description: "The apartment or suite number",
      example: "Apt 4B",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    city: {
      name: "City",
      description: "The city of the person's address",
      example: "New York",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    state: {
      name: "State",
      description: "The state of the person's address",
      example: "NY",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    zip_code: {
      name: "Zip Code",
      description: "The zip code of the person's address",
      example: "10001",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    country: {
      name: "Country",
      description: "The country of the person's address",
      example: "USA",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    website: {
      name: "Website",
      description: "The person's website",
      example: "https://example.com",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    social_links: {
      name: "Social Links",
      description: "Links to the person's social media profiles",
      example: "https://linkedin.com/in/johndoe",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    birth_date: {
      name: "Birth Date",
      description: "The person's birth date",
      example: "1990-01-01",
      validator: function (value: string): boolean {
        return typeof value === "string"; // Further date format validation can be added
      },
    },
    gender: {
      name: "Gender",
      description: "The person's gender",
      example: "Male",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    language: {
      name: "Language",
      description: "The person's preferred language",
      example: "English",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    industry: {
      name: "Industry",
      description: "The industry the person works in",
      example: "Technology",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    company_size: {
      name: "Company Size",
      description: "The size of the person's company",
      example: "51-200 employees",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    annual_revenue: {
      name: "Annual Revenue",
      description: "The annual revenue of the person's company",
      example: "$10M - $50M",
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
    department: {
      name: "Department",
      description: "The department the person works in",
      example: "Marketing",
      validator: function (value: string): boolean {
        return typeof value === "string";
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
  },"groups":["Triggers","Lead Management","Tags"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_tag_added" };
