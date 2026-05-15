
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Categorise Call","id":"categorise_call","descripition":"Categorises a call transcript into one of up to 6 user-defined categories using AI","inputSchema": {
    calltranscript: {
      name: "Call Transcript",
      description: "The call transcript to categorise",
      validationSchema: /.+/,
      errorMessage: "Call transcript is required",
      required: true,
      input: {
        type: "textarea",
        maxLength: 50000,
        minLength: 1,
        placeholder: "Paste the call transcript here",
      },
      parse: (value: string): string => value,
    },
    category1: {
      name: "Category 1",
      description: "Name of the first category",
      validationSchema: /.+/,
      errorMessage: "Category 1 is required",
      required: true,
      input: {
        type: "text",
        placeholder: "e.g. Sales Inquiry",
      },
      parse: (value: string): string => value.trim(),
    },
    description1: {
      name: "Description 1",
      description: "Description of what qualifies as Category 1",
      validationSchema: /.+/,
      errorMessage: "Description 1 is required",
      required: true,
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 1,
        placeholder: "Describe when a call should be classified as Category 1",
      },
      parse: (value: string): string => value.trim(),
    },
    category2: {
      name: "Category 2",
      description: "Name of the second category",
      validationSchema: /.+/,
      errorMessage: "Category 2 is required",
      required: true,
      input: {
        type: "text",
        placeholder: "e.g. Support Request",
      },
      parse: (value: string): string => value.trim(),
    },
    description2: {
      name: "Description 2",
      description: "Description of what qualifies as Category 2",
      validationSchema: /.+/,
      errorMessage: "Description 2 is required",
      required: true,
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 1,
        placeholder: "Describe when a call should be classified as Category 2",
      },
      parse: (value: string): string => value.trim(),
    },
    category3: {
      name: "Category 3",
      description: "Name of the third category",
      validationSchema: /.*/,
      errorMessage: "Invalid category name",
      required: false,
      input: {
        type: "text",
        placeholder: "e.g. Billing Issue",
      },
      parse: (value: string): string => value.trim(),
    },
    description3: {
      name: "Description 3",
      description: "Description of what qualifies as Category 3",
      validationSchema: /.*/,
      errorMessage: "Invalid description",
      required: false,
      getVisible: (currentValues) => !!currentValues["category3"],
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 0,
        placeholder: "Describe when a call should be classified as Category 3",
      },
      parse: (value: string): string => value.trim(),
    },
    category4: {
      name: "Category 4",
      description: "Name of the fourth category",
      validationSchema: /.*/,
      errorMessage: "Invalid category name",
      required: false,
      input: {
        type: "text",
        placeholder: "e.g. Appointment Booking",
      },
      parse: (value: string): string => value.trim(),
    },
    description4: {
      name: "Description 4",
      description: "Description of what qualifies as Category 4",
      validationSchema: /.*/,
      errorMessage: "Invalid description",
      required: false,
      getVisible: (currentValues) => !!currentValues["category4"],
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 0,
        placeholder: "Describe when a call should be classified as Category 4",
      },
      parse: (value: string): string => value.trim(),
    },
    category5: {
      name: "Category 5",
      description: "Name of the fifth category",
      validationSchema: /.*/,
      errorMessage: "Invalid category name",
      required: false,
      input: {
        type: "text",
        placeholder: "e.g. Complaint",
      },
      parse: (value: string): string => value.trim(),
    },
    description5: {
      name: "Description 5",
      description: "Description of what qualifies as Category 5",
      validationSchema: /.*/,
      errorMessage: "Invalid description",
      required: false,
      getVisible: (currentValues) => !!currentValues["category5"],
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 0,
        placeholder: "Describe when a call should be classified as Category 5",
      },
      parse: (value: string): string => value.trim(),
    },
    category6: {
      name: "Category 6",
      description: "Name of the sixth category",
      validationSchema: /.*/,
      errorMessage: "Invalid category name",
      required: false,
      input: {
        type: "text",
        placeholder: "e.g. General Inquiry",
      },
      parse: (value: string): string => value.trim(),
    },
    description6: {
      name: "Description 6",
      description: "Description of what qualifies as Category 6",
      validationSchema: /.*/,
      errorMessage: "Invalid description",
      required: false,
      getVisible: (currentValues) => !!currentValues["category6"],
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 0,
        placeholder: "Describe when a call should be classified as Category 6",
      },
      parse: (value: string): string => value.trim(),
    },
  },"outputSchema": {
    category: {
      name: "Category",
      description: "The category the call was classified into",
      example: "Sales Inquiry",
      validator: (value: any): boolean => typeof value === "string",
    },
    reasoning: {
      name: "Reasoning",
      description: "The AI reasoning for the categorisation",
      example: "The caller asked about pricing and product features",
      validator: (value: any): boolean => typeof value === "string",
    },
    matchedbranch: {
      name: "Matched Branch",
      description: "The branch key that was matched (category1-category6)",
      example: "category1",
      validator: (value: any): boolean => typeof value === "string",
    },
  },"groups":["system","AI","Phone"],"branches":{"category1":{"id":"category1","name":"Category 1","description":"Call matched Category 1"},"category2":{"id":"category2","name":"Category 2","description":"Call matched Category 2"},"category3":{"id":"category3","name":"Category 3","description":"Call matched Category 3"},"category4":{"id":"category4","name":"Category 4","description":"Call matched Category 4"},"category5":{"id":"category5","name":"Category 5","description":"Call matched Category 5"},"category6":{"id":"category6","name":"Category 6","description":"Call matched Category 6"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "categorise_call" };
