
  import { InputField, OutputField, Branches } from "./types/Schema";
  import { Node } from "./types/Node";
  
  const node = {
  "name": "Custom Webhook",
  "id": "custom_webhook",
  "descripition": "Makes custom HTTP requests to external APIs with configurable methods, headers, and body content",
  "inputSchema": {
    "url": {
      "name": "URL",
      "description": "The URL to send the request to",
      "validationSchema": /^https?:\/\/.+/,
      "errorMessage": "Please enter a valid URL starting with http:// or https://",
      "required": true,
      "input": {
        "type": "text",
        "placeholder": "https://api.example.com/endpoint"
      }
    },
    "method": {
      "name": "HTTP Method",
      "description": "The HTTP method to use for the request",
      "validationSchema": /^(GET|POST|PUT|DELETE|PATCH)$/,
      "errorMessage": "Please select a valid HTTP method",
      "required": true,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "GET",
            "value": "GET"
          },
          {
            "label": "POST",
            "value": "POST"
          },
          {
            "label": "PUT",
            "value": "PUT"
          },
          {
            "label": "DELETE",
            "value": "DELETE"
          },
          {
            "label": "PATCH",
            "value": "PATCH"
          }
        ]
      }
    },
    "headers": {
      "name": "Headers",
      "description": "HTTP headers to include in the request",
      "validationSchema": /^.*$/,
      "errorMessage": "Invalid headers format",
      "required": false,
      "input": {
        "type": "textarea",
        "maxLength": 1000,
        "minLength": 2,
        "placeholder": "{\"Authorization\": \"Bearer token\", \"Content-Type\": \"application/json\"}"
      }
    },
    "body": {
      "name": "Request Body",
      "description": "The body of the request (for POST, PUT, PATCH)",
      "validationSchema": /^.*$/,
      "errorMessage": "Invalid request body",
      "required": false,
      "input": {
        "type": "textarea",
        "maxLength": 5000,
        "minLength": 0,
        "placeholder": "{\"key\": \"value\"}"
      }
    },
    "contentType": {
      "name": "Content-Type",
      "description": "The content type of the request body",
      "validationSchema": /^[\w\-\/+.]+$/,
      "errorMessage": "Please enter a valid content type",
      "required": false,
      "input": {
        "type": "select",
        "options": [
          {
            "label": "application/json",
            "value": "application/json"
          },
          {
            "label": "application/xml",
            "value": "application/xml"
          },
          {
            "label": "text/plain",
            "value": "text/plain"
          },
          {
            "label": "text/html",
            "value": "text/html"
          },
          {
            "label": "application/x-www-form-urlencoded",
            "value": "application/x-www-form-urlencoded"
          },
          {
            "label": "multipart/form-data",
            "value": "multipart/form-data"
          }
        ]
      }
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
  },
  "isTriggerNode": false
} as Node;
  
  export {
   node as "custom_webhook"
  };