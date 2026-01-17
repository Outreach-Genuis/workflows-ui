
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Update Event","id":"certapro_v2_api_update_event","descripition":"Books/updates a calendar event with customer information. Takes an event_uid from the available slots and updates it with customer details.","inputSchema": {
    notes: {
      name: "notes",
      description: "Additional notes",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    address: {
      name: "address",
      description: "Service address",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    zipCode: {
      name: "zipCode",
      description: "Zip code of the customer",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    phone: {
      name: "phone",
      description: "Customer phone number",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    prospectName: {
      name: "prospectName",
      description: "Full name of the prospect/customer",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    email: {
      name: "email",
      description: "Customer email address",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    eventUid: {
      name: "event_uid",
      description: "The event_uid of the slot to book (from getEvents)",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Update Event from API CertaPro V2 API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["CertaPro V2 API","Update Event"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "certapro_v2_api_update_event" };
