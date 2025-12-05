
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Apply Tag Service Titan","id":"apply_tag_service_titan","descripition":"Applies a tag to a customer in ServiceTitan","inputSchema": {
    tagTypeId: {
      name: "Tag ID from ServiceTitan",
      description: "The ID of the tag to apply",
      required: true,
      validationSchema: /.*/,
      errorMessage: "Tag ID is invalid",
      input: {
        type: "number",
        min: 1,
        max: 2147483647,
      },
      parse: (value: string) => parseInt(value, 10),
    },
    customerId: {
      name: "Customer ID from ServiceTitan",
      description: "The ID of the customer to apply the tag to",
      required: true,
      validationSchema: /.*/,
      errorMessage: "Customer ID is invalid",
      input: {
        type: "number",
        min: 1,
        max: 2147483647,
      },
      parse: (value: string) => parseInt(value, 10),
    },
  },"outputSchema": {},"groups":["ServiceTitan","Tags"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "apply_tag_service_titan" };
