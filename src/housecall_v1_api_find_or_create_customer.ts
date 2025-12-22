
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Find Or Create Customer","id":"housecall_v1_api_find_or_create_customer","descripition":"Lookup by phone and create if not found (returns the single customer record).","inputSchema": {
    lastName: {
      name: "last_name",
      description: "Optional last name",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    firstName: {
      name: "first_name",
      description: "Optional first name",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    phone: {
      name: "phone",
      description: "Customer phone number",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Find Or Create Customer from API Housecall v1 API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Housecall v1 API","Find Or Create Customer"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "housecall_v1_api_find_or_create_customer" };
