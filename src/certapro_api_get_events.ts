
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Events","id":"certapro_api_get_events","descripition":"Retrieves available calendar events/slots filtered by the configured filterName. Events are filtered to only show slots where the summary matches the filter (e.g., \"ALL\" for available slots).","inputSchema": {
    zipCode: {
      name: "zipCode",
      description: "Zip code of the customer",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Events from API CertaPro API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["CertaPro API","Get Events"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "certapro_api_get_events" };
