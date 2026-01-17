
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get All Services","id":"serviceminder_api_get_all_services","descripition":"Retrieve all available services for booking appointments.","inputSchema": {
    includeParts: {
      name: "includeParts",
      description: "Include service parts information",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => {
        try {
          return z.string().parse(value);
        } catch {
          return value;
        }
      },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get All Services from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Get All Services"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "serviceminder_api_get_all_services" };
