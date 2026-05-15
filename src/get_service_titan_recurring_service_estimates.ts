
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Service Titan Recurring Service Estimates","id":"get_service_titan_recurring_service_estimates","descripition":"A description for GetServiceTitanRecurringServiceEstimates","inputSchema": {},"outputSchema": {},"groups":["system","ServiceTitan"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "get_service_titan_recurring_service_estimates" };
