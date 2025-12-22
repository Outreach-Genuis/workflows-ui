
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Cancel Job","id":"servicetitan_api_cancel_job","descripition":"Intelligent job cancellation with automatic invoice cleanup. First checks if the job has any invoice items: if yes, removes them automatically before canceling; if no, proceeds directly to cancellation. This handles the ServiceTitan requirement that jobs with invoice items cannot be canceled directly.","inputSchema": {
    memo: {
      name: "memo",
      description: "Cancellation memo/notes (optional, defaults to 'cancel appointment').",
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
