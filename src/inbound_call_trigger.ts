
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Inbound Call Trigger",
  "id": "inbound_call_trigger",
  "descripition": "Triggers a workflow when an inbound call is received, providing caller details and call transcription",
  "inputSchema": {},
  "outputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "The phone number of the inbound caller",
      "example": "+14155552671"
    },
    "transcription": {
      "name": "Call Transcription",
      "description": "The transcribed text from the inbound call",
      "example": "Hello, I'm calling about your services."
    }
  },
  "groups": [
    "Triggers",
    "Communication",
    "Phone"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  },
  "isTriggerNode": true
} as Node;
  
  export {
   node as "inbound_call_trigger"
  };