
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Add Call Summary Note","id":"servicetitan_api_add_call_summary_note","descripition":"Adds a call summary note to a job by appending to the existing job summary. Includes timestamp and formatted call details.","inputSchema": {
    additionalDetails: {
      name: "additionalDetails",
      description: "Any additional details to include in the note (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    callSummary: {
      name: "callSummary",
      description: "Summary of what happened during the call.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    jobId: {
      name: "jobId",
      description: "The job ID to add the note to.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Add Call Summary Note from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Add Call Summary Note"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_add_call_summary_note" };
