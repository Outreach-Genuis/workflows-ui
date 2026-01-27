
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Custom Webhook","id":"custom_webhook","descripition":"Makes custom HTTP requests to external APIs with configurable methods, headers, and body content","inputSchema": {
    url: {
      name: "URL",
      description: "The URL to send the request to",
      validationSchema: /^https?:\/\/.+/,
      errorMessage:
        "Please enter a valid URL starting with http:// or https://",
      required: true,
      input: {
        type: "text",
        placeholder: "https://api.example.com/endpoint",
      },
      parse: function (value: string): string {
        const url = new URL(value.trim());
        const privateIpRegex =
          /^(127\.0\.0\.1|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})$/;
        if (url.hostname === "localhost" || privateIpRegex.test(url.hostname)) {
          throw new Error("Localhost and private IPs are not allowed");
        }
        return value.trim();
      },
    },
    method: {
      name: "HTTP Method",
      description: "The HTTP method to use for the request",
      validationSchema: /^(GET|POST|PUT|DELETE|PATCH)$/,
      errorMessage: "Please select a valid HTTP method",
      required: true,
      input: {
        type: "select",
        options: [
          { label: "GET", value: "GET" },
          { label: "POST", value: "POST" },
          { label: "PUT", value: "PUT" },
          { label: "DELETE", value: "DELETE" },
          { label: "PATCH", value: "PATCH" },
        ],
      },
      parse: function (
        value: string,
      ): "GET" | "POST" | "PUT" | "DELETE" | "PATCH" {
        return value as "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
      },
    },
    headers: {
      name: "Headers",
      description: "HTTP headers to include in the request",
      validationSchema: /^.*$/,
      errorMessage: "Invalid headers format",
      required: false,
      input: {
        type: "textarea",
        maxLength: 1000,
        minLength: 2,
        placeholder:
          '{"Authorization": "Bearer token", "Content-Type": "application/json"}',
      },
      parse: function (value: string): { [key: string]: string } {
        try {
          return JSON.parse(value);
        } catch (e) {
          return {};
        }
      },
    },
    body: {
      name: "Request Body",
      description: "The body of the request (for POST, PUT, PATCH)",
      validationSchema: /^.*$/,
      errorMessage: "Invalid request body",
      required: false,
      input: {
        type: "textarea",
        maxLength: 5000,
        minLength: 0,
        placeholder: '{"key": "value"}',
      },
      parse: function (value: string): string {
        return value;
      },
    },
    contentType: {
      name: "Content-Type",
      description: "The content type of the request body",
      validationSchema: /^[\w\-\/+.]+$/,
      errorMessage: "Please enter a valid content type",
      required: false,
      input: {
        type: "select",
        options: [
          { label: "application/json", value: "application/json" },
          { label: "application/xml", value: "application/xml" },
          { label: "text/plain", value: "text/plain" },
          { label: "text/html", value: "text/html" },
          {
            label: "application/x-www-form-urlencoded",
            value: "application/x-www-form-urlencoded",
          },
          { label: "multipart/form-data", value: "multipart/form-data" },
        ],
      },
      parse: function (value: string): string {
        return value.trim();
      },
    },
  },"outputSchema": {
    responseStatus: {
      name: "Response Status",
      description: "HTTP status code of the response",
      example: 200,
      validator: function (value: number): boolean {
        return Number.isInteger(value) && value >= 100 && value < 600;
      },
    },
    responseBody: {
      name: "Response Body",
      description: "Body of the HTTP response",
      example: '{ "success": true }',
      validator: function (value: string): boolean {
        return typeof value === "string";
      },
    },
  },"groups":["HTTP","Integration"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "custom_webhook" };
