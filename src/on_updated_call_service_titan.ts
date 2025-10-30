
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";

const node = {"name":"ServiceTitan Updated Call","id":"on_updated_call_service_titan","descripition":"Triggers when a call is updated in ServiceTitan","inputSchema": {},"outputSchema": {},"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true} as Node;

export { node as "on_updated_call_service_titan" };
