
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"ServiceTitan Updated Estimate","id":"on_updated_estimate_service_titan","descripition":"Triggers when an estimate is updated in ServiceTitan","inputSchema": {
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
  },"outputSchema": {},"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true} as Node;

export { node as "on_updated_estimate_service_titan" };
