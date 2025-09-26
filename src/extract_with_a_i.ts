const node = {
  "name": "ExtractWithAI",
  "id": "extract_with_a_i",
  "descripition": "A description for ExtractWithAI",
  "inputSchema": {
    "rawText": {
      "name": "Raw Text",
      "description": "The text to extract information from",
      "validationSchema": /.*/,
      "errorMessage": "Raw text must be a string",
      "required": true
    },
    "description": {
      "name": "Extraction Description",
      "description": "Describe what information to extract from the raw text",
      "validationSchema": /.*/,
      "errorMessage": "Description must be a string",
      "required": true
    }
  },
  "outputSchema": {
    "extractedData": {
      "name": "Extracted Data",
      "description": "The data extracted from the raw text",
      "example": "Extracted information"
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
   node as "extract_with_a_i"
  };