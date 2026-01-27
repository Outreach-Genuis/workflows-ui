
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Live Staging Leads","id":"get_live_staging_leads","descripition":"A description for GetLiveStagingLeads","inputSchema": {
    type: {
      name: "Lead Type",
      description: "Type of leads to retrieve",
      validationSchema: /^(City|ZipCode)$/,
      errorMessage: "Please select a valid lead type",
      required: true,
      getVisible: undefined,
      input: {
        type: "select",
        options: [
          { label: "City", value: "City" },
          { label: "Zip Code", value: "ZipCode" },
        ],
        default: { label: "City", value: "City" },
      },
      parse: function (value: string) {
        if (value === "City" || value === "ZipCode") {
          return value as "City" | "ZipCode";
        }
        return "City"; // default value
      },
    },
    cities: {
      name: "Cities",
      description: "List of cities to filter leads by, seperated by commas",
      validationSchema: /^.*$/,
      errorMessage: "Invalid cities format",
      required: false,
      getVisible: (data) => data.type === "City",
      input: {
        type: "text",
      },
      parse: function (value: string): string[] {
        return value
          .split(",")
          .map((city) => city.trim())
          .map((city) => city.toUpperCase());
      },
    },
    zipCodes: {
      name: "Zip Codes",
      description: "Zip Codes to filter leads by, seperated by commas",
      validationSchema: /^(\d{5})(,\s*\d{5})*$/,
      errorMessage: "Invalid zip codes format",
      required: false,
      getVisible: (data) => data.type === "ZipCode",
      input: {
        type: "text",
      },
      parse: function (value: string): string[] {
        return value.split(",").map((zip) => zip.trim());
      },
    },
    category: {
      name: "Category",
      description: "Lead category to filter by",
      validationSchema: /^.*$/,
      errorMessage: "Invalid category format",
      required: false,
      input: {
        type: "select",
        options: [
          { label: "New Movers", value: "NEW_MOVERS" },
          { label: "Pre Movers", value: "PRE_MOVERS" },
          { label: "New Home Owners", value: "NEW_HOME_OWNERS" },
          { label: "New Parents", value: "NEW_PARENTS" },
          { label: "New Married", value: "NEW_MARRIED" },
        ],
        default: { label: "New Movers", value: "NEW_MOVERS" },
      },
      parse: function (value: string) {
        if (
          [
            "NEW_MOVERS",
            "PRE_MOVERS",
            "NEW_HOME_OWNERS",
            "NEW_PARENTS",
            "NEW_MARRIED",
          ].includes(value)
        ) {
          return value as
            | "NEW_MOVERS"
            | "PRE_MOVERS"
            | "NEW_HOME_OWNERS"
            | "NEW_PARENTS"
            | "NEW_MARRIED";
        }
        return "NEW_MOVERS"; // default value
      },
    },
    maxLeads: {
      name: "Max Leads",
      description: "Maximum number of leads to retrieve",
      validationSchema: /^\d+$/,
      errorMessage: "Please enter a valid number less than or equal to 1000",
      required: false,
      input: {
        type: "number",
        min: 1,
        max: 1000,
        step: 1,
        default: 100,
      },
      parse: function (value: string): number {
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? 100 : parsed; // default to 100 if invalid
      },
    },
  },"outputSchema": {
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
  },"groups":["Lead Generation","Data Enrichment","Trigger"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "get_live_staging_leads" };
