
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Run Another Workflow","id":"run_another_workflow","descripition":"A description for RunAnotherWorkflow","inputSchema": {
    workflowCode: {
      name: "Workflow Code",
      description:
        "The unique code of the workflow to run, check ManualTrigger node on the target workflow for the code",
      validationSchema: /.*/,
      errorMessage: "Please enter a valid workflow Code",
      required: true,
      input: {
        type: "text",
        placeholder: "Enter workflow Code",
      },
      parse: function (value: string): string {
        return value;
      },
    },
    phone: {
      name: "Phone Number",
      description: "The phone number to send notifications to",
      validationSchema: /^\+?[1-9]\d{1,14}$/,
      errorMessage: "Please enter a valid phone number in E.164 format",
      required: false,
      input: {
        type: "text",
        placeholder: "Enter phone number (optional)",
      },
      parse: function (value: string): string {
        return value;
      },
    },
    extraInfo: {
      name: "Extra Information",
      description: "Any additional information to include",
      validationSchema: /.*/,
      errorMessage: "",
      required: false,
      input: {
        type: "text",
        placeholder: "Enter extra information (optional)",
      },
      parse: function (value: string): string {
        return value;
      },
    },
  },"outputSchema": {},"groups":["Advanced"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "run_another_workflow" };
