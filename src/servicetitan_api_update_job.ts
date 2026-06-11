
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Update Job","id":"servicetitan_api_update_job","descripition":"Updates an existing job in ServiceTitan.","inputSchema": {
    appointments: {
      name: "appointments",
      description: "Array of appointment objects (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.array(z.any())).parse(value); } catch { return []; } },
    },
    summary: {
      name: "summary",
      description: "Job summary (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    priority: {
      name: "priority",
      description: "Job priority (optional).",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.any()).parse(value); } catch { return value; } },
    },
    jobId: {
      name: "jobId",
      description: "The job ID to update.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "number", min: -2147483648, max: 2147483647 },
      parse: (value: string) => { try { return (z.coerce.number()).parse(value); } catch { return 0; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Update Job from API ServiceTitan API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceTitan API","Update Job"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "servicetitan_api_update_job" };
