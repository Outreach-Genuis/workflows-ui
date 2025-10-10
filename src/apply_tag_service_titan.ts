
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"Apply Tag Service Titan","id":"apply_tag_service_titan","descripition":"Applies a tag to a customer in ServiceTitan","inputSchema": {
    clientId: {
      name: "Client ID",
      description: "Your ServiceTitan Client ID",
      required: true,
      validationSchema: /.*/,
      errorMessage: "Client ID is invalid",
      input: {
        type: "text",
      },
      parse: (value: string) => value,
    },
    clientSecret: {
      name: "Client Secret",
      description: "Your ServiceTitan Client Secret",
      required: true,
      validationSchema: /.*/,
      errorMessage: "Client Secret is invalid",
      input: {
        type: "text",
      },
      parse: (value: string) => value,
    },
    tenantId: {
      name: "Tenant ID",
      description: "Your ServiceTitan Tenant ID",
      required: true,
      validationSchema: /.*/,
      errorMessage: "Tenant ID is invalid",
      input: {
        type: "text",
      },
      parse: (value: string) => value,
    },
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
  },"outputSchema": {},"groups":["ServiceTitan","Tags"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false} as Node;

export { node as "apply_tag_service_titan" };
