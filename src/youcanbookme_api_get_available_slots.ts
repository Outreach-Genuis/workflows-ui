
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Available Slots","id":"youcanbookme_api_get_available_slots","descripition":"Returns available booking slots for estimators who (a) serve the caller's job-site area and (b) cover the requested specialty. Slots from all matching estimators are merged. Each slot includes a 'startsAt' token AND a 'teamMemberId' — both MUST be passed back unchanged to bookSlot.","inputSchema": {
    specialty: {
      name: "specialty",
      description: "COMPULSORY. The specialty needed for this job. 'Residential Painting' for interior/exterior painting jobs (EXTP/INTP). 'Concrete Coating' for floor/coating jobs (FLR).",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.any()).parse(value); } catch { return value; } },
    },
    area: {
      name: "area",
      description: "COMPULSORY. The caller's job-site area or city (e.g. 'Santa Clarita Valley', 'Santa Monica', 'Pasadena', 'Ventura County'). Matched case-insensitively against each estimator's served areas in the teamMemberRouting config.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Available Slots from API YouCanBookMe API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["YouCanBookMe API","Get Available Slots"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "youcanbookme_api_get_available_slots" };
