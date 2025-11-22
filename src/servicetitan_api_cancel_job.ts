
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Cancel Job","id":"servicetitan_api_cancel_job","descripition":"Cancels a job in ServiceTitan.","inputSchema": {
    memo: {
      name: "memo",
      description: "Cancellation memo/notes (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    reasonId: {
      name: "reasonId",
      description: "The cancellation reason ID.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    jobId: {
      name: "jobId",
      description: "The job ID to cancel.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Cancel Job from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Cancel Job"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_cancel_job" };
