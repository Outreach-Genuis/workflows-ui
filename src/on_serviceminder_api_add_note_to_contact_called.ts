
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Add Note to Contact Called","id":"on_serviceminder_api_add_note_to_contact_called","descripition":"Triggers when Add Note to Contact is called via MCP API (ServiceMinder API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    noteBody: {
      name: "noteBody",
      description: "Input parameter: Content of the note",
      example: "",
      validator: (value: any) => true,
    },
    noteTitle: {
      name: "noteTitle",
      description: "Input parameter: Title of the note",
      example: "",
      validator: (value: any) => true,
    },
    contactId: {
      name: "contactId",
      description: "Input parameter: Contact ID to add note to",
      example: 0,
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Add Note to Contact from API ServiceMinder API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["ServiceMinder API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_serviceminder_api_add_note_to_contact_called" };
