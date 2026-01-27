
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"ServiceTitan Updated Estimate","id":"on_updated_estimate_service_titan","descripition":"Triggers when an estimate is updated in ServiceTitan","inputSchema": {},"outputSchema": {},"groups":["ServiceTitan","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_updated_estimate_service_titan" };
