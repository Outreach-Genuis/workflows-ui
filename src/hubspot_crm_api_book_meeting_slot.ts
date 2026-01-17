
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Book Meeting Slot","id":"hubspot_crm_api_book_meeting_slot","descripition":"Book a meeting using a time slot ID from the availability results.","inputSchema": {
    locale: {
      name: "locale",
      description: "Locale (e.g., 'en-us')",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    timezone: {
      name: "timezone",
      description: "Timezone",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    email: {
      name: "email",
      description: "Attendee email",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    lastName: {
      name: "lastName",
      description: "Attendee last name",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    firstName: {
      name: "firstName",
      description: "Attendee first name",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    timeSlotId: {
      name: "timeSlotId",
      description: "Time slot ID from availability results",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Book Meeting Slot from API HubSpot CRM API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["HubSpot CRM API","Book Meeting Slot"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "hubspot_crm_api_book_meeting_slot" };
