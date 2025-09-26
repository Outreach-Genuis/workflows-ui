const node = {
  "name": "MakeCall",
  "id": "make_call",
  "descripition": "A description for MakeCall",
  "inputSchema": {
    "phone": {
      "name": "Phone Number",
      "description": "The phone number to call in E.164 format (e.g., +15551234567)",
      "validationSchema": /^\\+[1-9]\\d{1,14}$/,
      "errorMessage": "Please enter a valid phone number in E.164 format (e.g., +15551234567)",
      "required": true
    },
    "agentId": {
      "name": "Agent ID",
      "description": "The ID of the agent who will handle the call",
      "validationSchema": /.*/,
      "errorMessage": "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
      "required": true
    }
  },
  "outputSchema": {
    "transcription": {
      "name": "Call Transcription",
      "description": "The transcribed content of the call",
      "example": "Hello, this is John speaking. I'm calling about..."
    },
    "callResult": {
      "name": "Call Result",
      "description": "The status or outcome of the call attempt",
      "example": "answered"
    }
  },
  "groups": [],
  "branches": {
    "answered": {
      "id": "answered",
      "name": "Answered",
      "description": "Call was answered by the recipient"
    },
    "no_answer": {
      "id": "no_answer",
      "name": "No Answer",
      "description": "Call was not answered after ringing"
    },
    "busy": {
      "id": "busy",
      "name": "Busy",
      "description": "Recipient's line was busy"
    },
    "failed": {
      "id": "failed",
      "name": "Failed",
      "description": "Call failed to connect due to technical issues"
    }
  }
} as const;
  
  export {
   node as "make_call"
  };