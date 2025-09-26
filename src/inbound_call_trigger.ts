const node = {
  "name": "InboundCallTrigger",
  "id": "inbound_call_trigger",
  "descripition": "A description for InboundCallTrigger",
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
  "groups": [],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  }
} as const;
  
  export {
   node as "inbound_call_trigger"
  };