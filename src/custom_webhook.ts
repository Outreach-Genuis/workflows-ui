const node = {
  "name": "CustomWebhook",
  "id": "custom_webhook",
  "descripition": "Make custom HTTP requests to external APIs",
  "inputSchema": {
    "url": {
      "name": "URL",
      "description": "The URL to send the request to",
      "validationSchema": /^https?:\\/\\/.+/,
      "errorMessage": "Please enter a valid URL starting with http:// or https://",
      "required": true
    },
    "method": {
      "name": "HTTP Method",
      "description": "The HTTP method to use for the request",
      "validationSchema": /^(GET|POST|PUT|DELETE|PATCH)$/,
      "errorMessage": "Please select a valid HTTP method",
      "required": true
    },
    "headers": {
      "name": "Headers",
      "description": "HTTP headers to include in the request",
      "validationSchema": /^.*$/,
      "errorMessage": "Invalid headers format",
      "required": false
    },
    "body": {
      "name": "Request Body",
      "description": "The body of the request (for POST, PUT, PATCH)",
      "validationSchema": /^.*$/,
      "errorMessage": "Invalid request body",
      "required": false
    },
    "contentType": {
      "name": "Content-Type",
      "description": "The content type of the request body",
      "validationSchema": /^[\\w\\-\\/+.]+$/,
      "errorMessage": "Please enter a valid content type",
      "required": false
    }
  },
  "outputSchema": {
    "responseStatus": {
      "name": "Response Status",
      "description": "HTTP status code of the response",
      "example": 200
    },
    "responseBody": {
      "name": "Response Body",
      "description": "Body of the HTTP response",
      "example": "{ \"success\": true }"
    }
  },
  "groups": [
    "HTTP",
    "Integration"
  ],
  "branches": {
    "success": {
      "id": "success",
      "name": "Success",
      "description": "Successful execution"
    }
  }
} as const;
  
  export {
   node as "custom_webhook"
  };