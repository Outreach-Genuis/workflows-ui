
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Job","id":"psa_api_get_job","descripition":"Retrieve job details by ID from PSA system.","inputSchema": {
    jobId: {
      name: "jobId",
      description: "The ID of the job to retrieve",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Job from API PSA API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["PSA API","Get Job"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "psa_api_get_job" };
