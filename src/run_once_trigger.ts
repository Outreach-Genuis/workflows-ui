
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Run Once","id":"run_once_trigger","descripition":"A trigger node that runs only once when the workflow is activated","inputSchema": {},"outputSchema": {},"groups":["system","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "run_once_trigger" };
