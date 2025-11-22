
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Service Titan Recurring Service Estimates","id":"get_service_titan_recurring_service_estimates","descripition":"A description for GetServiceTitanRecurringServiceEstimates","inputSchema": {},"outputSchema": {},"groups":["ServiceTitan"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_service_titan_recurring_service_estimates" };
