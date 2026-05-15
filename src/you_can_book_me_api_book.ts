
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Book","id":"you_can_book_me_api_book","descripition":"Books a calendar event at the chosen start time on the first residential calendar whose team tags overlap the provided tags. Trusts the caller's chosen time without re-checking availability.","inputSchema": {
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
    phone: {
      name: "phone",
      description: "Customer phone number",
      required: false,
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
    prospectName: {
      name: "prospectName",
      description: "Full name of the prospect/customer",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    tags: {
      name: "tags",
      description: "Comma-separated tags inferred from the call. Used to select the calendar.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    startTime: {
      name: "startTime",
      description: "Start time of the slot to book (ISO 8601, e.g. '2026-05-01T14:00:00-04:00').",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Book from API You Can Book Me API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["You Can Book Me API","Book"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "you_can_book_me_api_book" };
