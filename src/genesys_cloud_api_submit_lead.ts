
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Submit Lead","id":"genesys_cloud_api_submit_lead","descripition":"Submits a new lead to CertaPro with customer information, job details, and selected appointment. Returns a confirmation number on success.","inputSchema": {
    appointmentId: {
      name: "appointmentId",
      description: "ID of the selected appointment slot from getAppointmentSlots",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    notes: {
      name: "notes",
      description: "Additional notes about the job",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    jobType: {
      name: "jobType",
      description: "Type of painting job: Interior, Exterior, or Both",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.any()).parse(value); } catch { return value; } },
    },
    emailAddress: {
      name: "emailAddress",
      description: "Customer's email address",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    zipcode: {
      name: "zipcode",
      description: "Zip code for the job location",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    state: {
      name: "state",
      description: "State for the job location",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    city: {
      name: "city",
      description: "City for the job location",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    streetAddress: {
      name: "streetAddress",
      description: "Street address for the job",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    phoneNumber: {
      name: "phoneNumber",
      description: "Customer's phone number",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    lastName: {
      name: "lastName",
      description: "Customer's last name",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    firstName: {
      name: "firstName",
      description: "Customer's first name",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Submit Lead from API Genesys Cloud API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Genesys Cloud API","Submit Lead"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "genesys_cloud_api_submit_lead" };
