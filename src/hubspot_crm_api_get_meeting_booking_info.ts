
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Meeting Booking Info","id":"hubspot_crm_api_get_meeting_booking_info","descripition":"Get booking information and availability for a meeting link.","inputSchema": {
    monthOffset: {
      name: "monthOffset",
      description: "Months forward from current month",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    timezone: {
      name: "timezone",
      description: "Timezone (e.g., 'America/New_York') MUST BE IN PROPER TZ DATABASE FORMAT",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Meeting Booking Info from API HubSpot CRM API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["HubSpot CRM API","Get Meeting Booking Info"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "hubspot_crm_api_get_meeting_booking_info" };
