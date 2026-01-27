
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Manual Trigger","id":"manual_trigger","descripition":"A description for ManualTrigger","inputSchema": {},"outputSchema": {
    phone: {
      name: "Phone Number",
      description: "The phone number to send notifications to",
      required: false,
      example: "+1234567890",
      validator: (value: string) => {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneRegex.test(value);
      },
    },
    extraInfo: {
      name: "Extra Information",
      description: "Any extra information to pass along",
      required: false,
      example: "",
      validator: (value: string) => true,
    },
  },"groups":["Advanced","Triggers"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "manual_trigger" };
