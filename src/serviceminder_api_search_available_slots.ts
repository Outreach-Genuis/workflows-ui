
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Search Available Slots","id":"serviceminder_api_search_available_slots","descripition":"Find available appointment slots for scheduling. Essential for booking appointments.","inputSchema": {
    slotWindowDays: {
      name: "slotWindowDays",
      description: "Number of days to search ahead",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    timeframe: {
      name: "timeframe",
      description: "Preferred time (morning, afternoon, evening)",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    searchDate: {
      name: "searchDate",
      description: "Date to search from (YYYY-MM-DD)",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    duration: {
      name: "duration",
      description: "Duration in minutes",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    contactId: {
      name: "contactId",
      description: "Customer's contact ID",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Search Available Slots from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Search Available Slots"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "serviceminder_api_search_available_slots" };
