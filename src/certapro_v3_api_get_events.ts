
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Events","id":"certapro_v3_api_get_events","descripition":"Retrieves available calendar slots by finding teams matching the zip code and team type, then filtering each calendar's events using its configured filter rules.","inputSchema": {
    teamType: {
      name: "teamType",
      description: "Team type (residential or commercial). Falls back to the configured default team type if not provided.",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.any()).parse(value); } catch { return value; } },
    },
    zipCode: {
      name: "zipCode",
      description: "Zip code of the customer. Falls back to the configured default zip code if not provided.",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Events from API CertaPro V3 API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["CertaPro V3 API","Get Events"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "certapro_v3_api_get_events" };
