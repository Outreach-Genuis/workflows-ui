
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Events","id":"you_can_book_me_api_get_events","descripition":"Returns available booking slots over the next 14 days for residential calendars whose team tags overlap any of the provided tags. Tag matching is exact and any-match.","inputSchema": {
    tags: {
      name: "tags",
      description: "Comma-separated tags inferred from the call (e.g. 'kitchen,bathroom'). Calendars whose team tags include any of these are considered.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Events from API You Can Book Me API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["You Can Book Me API","Get Events"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "you_can_book_me_api_get_events" };
