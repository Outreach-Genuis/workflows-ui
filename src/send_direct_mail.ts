
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Send Direct Mail","id":"send_direct_mail","descripition":"Sends a physical direct mail using a service provider","inputSchema": {
    productId: {
      name: "Product ID",
      description: "ID of the physical mail product to send",
      validationSchema: /.+/,
      errorMessage: "Product ID cannot be empty",
      required: true,
      input: {
        type: "custom",
        tag: "direct-mail-product-selector",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    handwritingStyle: {
      name: "Handwriting Style",
      description: "Style of handwriting to use for the letter",
      validationSchema: /.+/,
      errorMessage: "Handwriting style cannot be empty",
      required: true,
      input: {
        type: "custom",
        tag: "handwriting-style-selector",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    customMessage: {
      name: "Custom Message",
      description: "The message content for the direct mail",
      validationSchema: /.+/,
      errorMessage: "Message content cannot be empty",
      required: true,
      input: {
        type: "custom",
        tag: "font-target-textarea",
      },
      parse: function (value: string): string {
        return value;
      },
    },
    signoff: {
      name: "Signoff",
      description: "Optional message signoff (e.g., 'Best regards')",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid signoff",
      required: true,
      input: {
        type: "custom",
        tag: "font-target-textarea",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    shippingDate: {
      name: "Shipping Date",
      description: "Optional requested shipping date (YYYY-MM-DD)",
      validationSchema: /^$|^\d{4}-\d{2}-\d{2}$/,
      errorMessage: "Please use YYYY-MM-DD format for date",
      required: false,
      input: {
        type: "text",
        placeholder: "2023-12-25",
        default: "01/01/2020",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    returnAddressName: {
      name: "Return Address Name",
      description: "Name for the return address",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid name",
      required: true,
      input: {
        type: "text",
        placeholder: "John Doe",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    returnAddress: {
      name: "Return Address",
      description: "Street address for return",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid address",
      required: true,
      input: {
        type: "text",
        placeholder: "123 Main St",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    returnAddress2: {
      name: "Return Address Line 2",
      description: "Additional address information for return",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid address",
      required: false,
      input: {
        type: "text",
        placeholder: "Apt 4B",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    returnAddressCity: {
      name: "Return Address City",
      description: "City for the return address",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid city",
      required: true,
      input: {
        type: "text",
        placeholder: "San Francisco",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    returnAddressState: {
      name: "Return Address State",
      description: "State/province for the return address",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid state",
      required: true,
      input: {
        type: "text",
        placeholder: "CA",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    returnAddressZip: {
      name: "Return Address ZIP",
      description: "ZIP/Postal code for the return address",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid ZIP code",
      required: true,
      input: {
        type: "text",
        placeholder: "94103",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    returnAddressCountry: {
      name: "Return Address Country",
      description: "Country for the return address",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid country",
      required: true,
      input: {
        type: "text",
        placeholder: "USA",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientFirstName: {
      name: "Recipient First Name",
      description: "First name of the recipient",
      validationSchema: /.+/,
      errorMessage: "First name cannot be empty",
      required: true,
      input: {
        type: "text",
        placeholder: "John",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientLastName: {
      name: "Recipient Last Name",
      description: "Last name of the recipient",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid last name",
      required: true,
      input: {
        type: "text",
        placeholder: "Smith",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientEmail: {
      name: "Recipient Email",
      description: "Email address of the recipient",
      validationSchema: /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Invalid email format",
      required: false,
      input: {
        type: "text",
        placeholder: "recipient@example.com",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientPhone: {
      name: "Recipient Phone",
      description: "Phone number of the recipient",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid phone number",
      required: false,
      input: {
        type: "text",
        placeholder: "+1 555-123-4567",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientAddress: {
      name: "Recipient Address",
      description: "Street address of the recipient",
      validationSchema: /.+/,
      errorMessage: "Address cannot be empty",
      required: true,
      input: {
        type: "text",
        placeholder: "456 Oak St",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientAddress2: {
      name: "Recipient Address Line 2",
      description: "Additional address information for the recipient",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid address",
      required: false,
      input: {
        type: "text",
        placeholder: "Suite 7C",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientCity: {
      name: "Recipient City",
      description: "City of the recipient",
      validationSchema: /.+/,
      errorMessage: "City cannot be empty",
      required: true,
      input: {
        type: "text",
        placeholder: "Chicago",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientState: {
      name: "Recipient State",
      description: "State/province of the recipient",
      validationSchema: /.+/,
      errorMessage: "State cannot be empty",
      required: true,
      input: {
        type: "text",
        placeholder: "IL",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientCountry: {
      name: "Recipient Country",
      description: "Country of the recipient",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid country",
      required: true,
      input: {
        type: "text",
        placeholder: "USA",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientZip: {
      name: "Recipient ZIP",
      description: "ZIP/Postal code of the recipient",
      validationSchema: /.+/,
      errorMessage: "ZIP code cannot be empty",
      required: true,
      input: {
        type: "text",
        placeholder: "60601",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientCompany: {
      name: "Recipient Company",
      description: "Company name of the recipient",
      validationSchema: /^.*$/,
      errorMessage: "Please enter a valid company name",
      required: false,
      input: {
        type: "text",
        placeholder: "ACME Inc.",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientCustom1: {
      name: "Recipient Custom Field 1",
      description: "First custom field for recipient data",
      validationSchema: /^.*$/,
      errorMessage: "Please enter valid text",
      required: false,
      input: {
        type: "text",
        placeholder: "Custom data 1",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientCustom2: {
      name: "Recipient Custom Field 2",
      description: "Second custom field for recipient data",
      validationSchema: /^.*$/,
      errorMessage: "Please enter valid text",
      required: false,
      input: {
        type: "text",
        placeholder: "Custom data 2",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
    recipientCustom3: {
      name: "Recipient Custom Field 3",
      description: "Third custom field for recipient data",
      validationSchema: /^.*$/,
      errorMessage: "Please enter valid text",
      required: false,
      input: {
        type: "text",
        placeholder: "Custom data 3",
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {},"groups":["Communication","Direct Mail"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":7.5} as Node;

export { node as "send_direct_mail" };
