
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Search Contacts","id":"hubspot_crm_api_search_contacts","descripition":"Search for contacts in HubSpot using various criteria.","inputSchema": {
    limit: {
      name: "limit",
      description: "Maximum number of results",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    phone: {
      name: "phone",
      description: "Search by phone number",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    lastname: {
      name: "lastname",
      description: "Search by last name",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    firstname: {
      name: "firstname",
      description: "Search by first name",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
    email: {
      name: "email",
      description: "Search by email",
      required: false,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Search Contacts from API HubSpot CRM API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["HubSpot CRM API","Search Contacts"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "hubspot_crm_api_search_contacts" };
