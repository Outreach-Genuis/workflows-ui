
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Book Slot","id":"you_can_book_me_api_book_slot","descripition":"Records a booking selection — captures the chosen calendar, slot owner, time, and customer details. Does not write the event to the underlying calendar; that is handled downstream.","inputSchema": {
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
    ownerEmail: {
      name: "ownerEmail",
      description: "Email of the calendar owner for the selected slot (from getAvailableSlots).",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    ownerName: {
      name: "ownerName",
      description: "Name of the calendar owner for the selected slot (from getAvailableSlots).",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    calendarId: {
      name: "calendarId",
      description: "Cronofy calendar id of the selected slot (from getAvailableSlots).",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    startTime: {
      name: "startTime",
      description: "Start time of the chosen slot (ISO 8601, e.g. '2026-05-01T14:00:00-04:00'). Must be one of the slots returned by getAvailableSlots.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Book Slot from API You Can Book Me API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["You Can Book Me API","Book Slot"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "you_can_book_me_api_book_slot" };
