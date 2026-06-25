
import { InputField, OutputField, Branches } from "./types/Schema";
import type { Lead } from "./types/Lead";
import { Node } from "./types/Node";
import {z} from "zod";

const node = {"name":"On Book Slot Called","id":"on_youcanbookme_api_book_slot_called","descripition":"Triggers when Book Slot is called via MCP API (YouCanBookMe API)","inputSchema": {},"outputSchema": {
    callerPhone: {
      name: "Caller Phone",
      description: "Phone number of the caller (from MCP session)",
      example: "+14155552671",
      validator: (value: any) => true,
    },
    dealId: {
      name: "dealId",
      description: "Input parameter: OPTIONAL. CRM Deal ID to attach to the booking. → YCBM 'Deal ID' (DEAL_ID). Omitted when not provided.",
      example: "",
      validator: (value: any) => true,
    },
    previousCustomer: {
      name: "previousCustomer",
      description: "Input parameter: OPTIONAL. → YCBM 'Previous Customer' (PREV_CUSTOMER). One of: 'Yes - At least one previous won deal', 'No - Past bids but no won deals', 'No History - No past deals/bids'.",
      example: "",
      validator: (value: any) => true,
    },
    referredBy: {
      name: "referredBy",
      description: "Input parameter: OPTIONAL. Name of the person who referred the customer. → YCBM 'Referred By:' (REFERRAL).",
      example: "",
      validator: (value: any) => true,
    },
    hospitalityNotes: {
      name: "hospitalityNotes",
      description: "Input parameter: OPTIONAL. Suggestions for what the estimator can bring (e.g. dog toy, sports swag). → YCBM 'Unreasonable Hospitality' (HOSPITALITY).",
      example: "",
      validator: (value: any) => true,
    },
    personalDetails: {
      name: "personalDetails",
      description: "Input parameter: OPTIONAL. Personal details captured during the call (interests, life events, etc.) for unreasonable-hospitality follow-up. → YCBM 'Personal Details' (PERSONAL_DETAILS).",
      example: "",
      validator: (value: any) => true,
    },
    schedulingIncentive: {
      name: "schedulingIncentive",
      description: "Input parameter: OPTIONAL. Customer's response to the scheduling incentive pre-close. → YCBM 'Scheduling Incentive' (SCHED_INCENTIVE). One of: 'Yes - Ready to Sign at Appt', 'No - Not Ready to Sign at Appt', 'Unsure - Timeline', 'Unsure - Budget', 'Unsure - Trust'.",
      example: "",
      validator: (value: any) => true,
    },
    secondHomeowner: {
      name: "secondHomeowner",
      description: "Input parameter: OPTIONAL. Whether a second homeowner will attend. → YCBM '2nd Homeowner' (SECOND_HOMEOWNER). One of: 'Yes - Will be at appt', 'No - Not available', 'N/A - No other decision maker'.",
      example: "",
      validator: (value: any) => true,
    },
    propertyOwner: {
      name: "propertyOwner",
      description: "Input parameter: OPTIONAL. Whether the caller is the property owner. → YCBM 'Property Owner' (PROPERTY_OWNER). 'Yes, I am' or 'No, I am not'.",
      example: "",
      validator: (value: any) => true,
    },
    revenueType: {
      name: "revenueType",
      description: "Input parameter: OPTIONAL. → YCBM 'Revenue Type' (REVENUE_TYPE). 'Painting' or 'Coating'.",
      example: "",
      validator: (value: any) => true,
    },
    divisionType: {
      name: "divisionType",
      description: "Input parameter: OPTIONAL. Division/Type tag. → YCBM 'Division/Type' (DIVISION_TYPE). One of: RES - EXT, RES - INT, RES - INT/EXT, FLR - EXT, FLR - INT, FLR - INT/EXT.",
      example: "",
      validator: (value: any) => true,
    },
    builtBefore1978: {
      name: "builtBefore1978",
      description: "Input parameter: OPTIONAL. Whether the home was built before 1978 (lead-paint screening). → YCBM 'House Built Before 1978?' (BUILT). 'Yes' or 'No'.",
      example: "",
      validator: (value: any) => true,
    },
    gateCode: {
      name: "gateCode",
      description: "Input parameter: OPTIONAL. Gate code or access instructions if the home is in a gated community. → YCBM 'Gate Code' (GATE_CODE).",
      example: "",
      validator: (value: any) => true,
    },
    companyName: {
      name: "companyName",
      description: "Input parameter: OPTIONAL. Customer company name. → YCBM 'Company Name' (COMPANY_NAME).",
      example: "",
      validator: (value: any) => true,
    },
    state: {
      name: "state",
      description: "Input parameter: OPTIONAL. Job site state. → YCBM 'Job Site State' (STATE). The booking page currently only accepts 'CA'. Defaults to 'CA' when not provided. Send it when you have the customer's state.",
      example: "",
      validator: (value: any) => true,
    },
    projectTimeline: {
      name: "projectTimeline",
      description: "Input parameter: COMPULSORY. Customer's timeline. → YCBM 'When are you looking to get this done?' (PROJECT_TIMELINE). One of: ASAP, Within the next 2 weeks, Sometime in the next month, Sometime this year, Just getting ideas and budget.",
      example: "",
      validator: (value: any) => true,
    },
    projectType: {
      name: "projectType",
      description: "Input parameter: COMPULSORY. One or more project types (multi-select). → YCBM 'Project Type' (PROJECT_TYPE). FLR = Concrete Coating, EXTP = Exterior Painting, INTP = Interior Painting. Example: [\"INTP\", \"EXTP\"].",
      example: [],
      validator: (value: any) => true,
    },
    description: {
      name: "description",
      description: "Input parameter: COMPULSORY. Free-form project description capturing the painting / coating qualification answers (scope, surfaces, problem areas, etc.). → YCBM 'Please describe your project' (DESCRIPTION).",
      example: "",
      validator: (value: any) => true,
    },
    zip: {
      name: "zip",
      description: "Input parameter: COMPULSORY. Job site zip code. → YCBM 'Job Site Zip Code' (ZIP).",
      example: "",
      validator: (value: any) => true,
    },
    city: {
      name: "city",
      description: "Input parameter: COMPULSORY. Job site city. → YCBM 'Job Site City' (CITY).",
      example: "",
      validator: (value: any) => true,
    },
    address: {
      name: "address",
      description: "Input parameter: COMPULSORY. Job site street address. → YCBM 'Job Site Address' (ADDRESS).",
      example: "",
      validator: (value: any) => true,
    },
    source: {
      name: "source",
      description: "Input parameter: COMPULSORY. How the customer heard about us. → YCBM 'How did you hear about us?' (SOURCE). One of: Brand, Online, Social Media, Direct Mail, Email / Text, Referral, Repeat Client, Biz Dev, Other.",
      example: "",
      validator: (value: any) => true,
    },
    phone: {
      name: "phone",
      description: "Input parameter: COMPULSORY. Customer mobile phone number (validated as mobile by YCBM). → YCBM 'Phone' (PHONE).",
      example: "",
      validator: (value: any) => true,
    },
    email: {
      name: "email",
      description: "Input parameter: COMPULSORY. Customer email address (validated as email by YCBM). → YCBM 'Email' (EMAIL).",
      example: "",
      validator: (value: any) => true,
    },
    lastName: {
      name: "lastName",
      description: "Input parameter: COMPULSORY. Customer last name. → YCBM 'Last Name' (LNAME).",
      example: "",
      validator: (value: any) => true,
    },
    firstName: {
      name: "firstName",
      description: "Input parameter: COMPULSORY. Customer first name. → YCBM 'First Name' (FNAME).",
      example: "",
      validator: (value: any) => true,
    },
    teamMemberId: {
      name: "teamMemberId",
      description: "Input parameter: COMPULSORY. The teamMemberId from the chosen slot, exactly as returned by getAvailableSlots. The booking will be made against this estimator.",
      example: "",
      validator: (value: any) => true,
    },
    startsAt: {
      name: "startsAt",
      description: "Input parameter: COMPULSORY. The startsAt token of the chosen slot, exactly as returned by getAvailableSlots (millisecond unix timestamp as string).",
      example: "",
      validator: (value: any) => true,
    },
    result: {
      name: "Result",
      description: "Output of tool Book Slot from API YouCanBookMe API",
      example: "",
      validator: (value: any) => true,
    },
    error: {
      name: "Error",
      description: "Error message if the tool call failed, null on success",
      example: null,
      validator: (value: any) => true,
    },
  },"groups":["YouCanBookMe API","Triggers","MCP"],"branches":{"success":{"id":"success","name":"Success","description":"Tool call completed successfully"},"failure":{"id":"failure","name":"Failure","description":"Tool call failed with an error"}},"isTriggerNode":true,"cost":0} as Node;

export { node as "on_youcanbookme_api_book_slot_called" };
