
import { InputField, OutputField, Branches } from "./types/Schema";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"Get Geo Address","id":"address_validation_api_get_geo_address","descripition":"Geocodes an address using Google Maps Geocoding API. Takes a street address or ZIP code and returns geocoded address suggestions. Uses optional city, state, and country MCP properties to streamline search when provided.","inputSchema": {
    street: {
      name: "street",
      description: "Street address or ZIP code to geocode.",
      required: true,
      validationSchema: /.*/,
      errorMessage: "",
      input: { type: "text" },
      parse: (value: string) => { try { return (z.string()).parse(value); } catch { return value; } },
    },
  },"outputSchema": {
    result: {
      name: "Result",
      description: "Output of tool Get Geo Address from API Address Validation API",
      example: "",
      validator: (value: any) => true,
    },
  },"groups":["Address Validation API","Get Geo Address"],"branches":{"success":{"id":"success","name":"Success","description":"Successful execution"}},"isTriggerNode":false,"cost":0} as Node;

export { node as "address_validation_api_get_geo_address" };
