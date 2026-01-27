
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get All Service Agents","id":"serviceminder_api_get_all_service_agents","descripition":"Retrieve all service agents/technicians available for appointments.","inputSchema": {
    // no params
  },"outputSchema": {
    result: {
      name: "Result",
      description:
        "Output of tool Get All Service Agents from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Get All Service Agents"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "serviceminder_api_get_all_service_agents" };
