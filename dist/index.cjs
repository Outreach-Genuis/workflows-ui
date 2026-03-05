"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  nodes: () => nodes
});
module.exports = __toCommonJS(index_exports);

// src/add_note_to_lead_service_titan.ts
var node = { "name": "Add Note To Lead Service Titan", "id": "add_note_to_lead_service_titan", "descripition": "Adds a note to a lead in ServiceTitan", "inputSchema": {
  leadId: {
    name: "Lead ID",
    description: "The ID of the lead to add a note to",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Lead ID must be a valid number",
    input: {
      type: "number",
      max: 2147483647,
      min: 1
    },
    parse: (value) => parseInt(value, 10)
  },
  text: {
    name: "Note Text",
    description: "The content of the note to be added",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Note text is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Notes"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/add_tag_to_lead.ts
var node2 = { "name": "Add Tag To Lead", "id": "add_tag_to_lead", "descripition": "Assigns a specified tag to a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  tag: {
    name: "Tag",
    description: "Tag to add to the lead",
    validationSchema: /^\S+$/,
    errorMessage: "Please enter a valid tag name",
    required: true,
    input: {
      type: "text",
      placeholder: "lead-tag"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/add_to_sms_campaign.ts
var node3 = { "name": "Add To SMS Campaign", "id": "add_to_sms_campaign", "descripition": "Adds a contact to an SMS campaign identified by campaign ID", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to add to the SMS campaign",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim().replace(/\s+/g, "");
    }
  },
  extraInstructions: {
    name: "Extra Instructions",
    description: "Additional instructions for the agent",
    validationSchema: /.*/,
    errorMessage: "Extra instructions must be less than 500 characters if provided",
    required: false,
    input: {
      type: "textarea",
      placeholder: "Please be polite and professional.",
      minLength: 0,
      maxLength: 1e3
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "SMS", "Lead Management"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// ../../node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../../node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return __spreadValues(__spreadValues({}, first), second);
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// ../../node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../../node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// ../../node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// ../../node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = __spreadProps(__spreadValues({}, issueData), {
    path: fullPath
  });
  if (issueData.message !== void 0) {
    return __spreadProps(__spreadValues({}, issueData), {
      path: fullPath,
      message: issueData.message
    });
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return __spreadProps(__spreadValues({}, issueData), {
    path: fullPath,
    message: errorMessage
  });
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// ../../node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message == null ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));

// ../../node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    var _a, _b;
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message != null ? message : ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: (_a = message != null ? message : required_error) != null ? _a : ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: (_b = message != null ? message : invalid_type_error) != null ? _b : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params == null ? void 0 : params.async) != null ? _a : false,
        contextualErrorMap: params == null ? void 0 : params.errorMap
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    var _a, _b;
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if ((_b = (_a = err == null ? void 0 : err.message) == null ? void 0 : _a.toLowerCase()) == null ? void 0 : _b.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params == null ? void 0 : params.errorMap,
        async: true
      },
      path: (params == null ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue(__spreadValues({
        code: ZodIssueCode.custom
      }, getIssueProperties(val)));
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    }));
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    }));
  }
  brand() {
    return new ZodBranded(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this
    }, processCreateParams(this._def)));
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch(__spreadProps(__spreadValues({}, processCreateParams(this._def)), {
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    }));
  }
  describe(description) {
    const This = this.constructor;
    return new This(__spreadProps(__spreadValues({}, this._def), {
      description
    }));
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && (decoded == null ? void 0 : decoded.typ) !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch (e) {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (e) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), __spreadValues({
      validation,
      code: ZodIssueCode.invalid_string
    }, errorUtil.errToObj(message)));
  }
  _addCheck(check) {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  email(message) {
    return this._addCheck(__spreadValues({ kind: "email" }, errorUtil.errToObj(message)));
  }
  url(message) {
    return this._addCheck(__spreadValues({ kind: "url" }, errorUtil.errToObj(message)));
  }
  emoji(message) {
    return this._addCheck(__spreadValues({ kind: "emoji" }, errorUtil.errToObj(message)));
  }
  uuid(message) {
    return this._addCheck(__spreadValues({ kind: "uuid" }, errorUtil.errToObj(message)));
  }
  nanoid(message) {
    return this._addCheck(__spreadValues({ kind: "nanoid" }, errorUtil.errToObj(message)));
  }
  cuid(message) {
    return this._addCheck(__spreadValues({ kind: "cuid" }, errorUtil.errToObj(message)));
  }
  cuid2(message) {
    return this._addCheck(__spreadValues({ kind: "cuid2" }, errorUtil.errToObj(message)));
  }
  ulid(message) {
    return this._addCheck(__spreadValues({ kind: "ulid" }, errorUtil.errToObj(message)));
  }
  base64(message) {
    return this._addCheck(__spreadValues({ kind: "base64" }, errorUtil.errToObj(message)));
  }
  base64url(message) {
    return this._addCheck(__spreadValues({
      kind: "base64url"
    }, errorUtil.errToObj(message)));
  }
  jwt(options) {
    return this._addCheck(__spreadValues({ kind: "jwt" }, errorUtil.errToObj(options)));
  }
  ip(options) {
    return this._addCheck(__spreadValues({ kind: "ip" }, errorUtil.errToObj(options)));
  }
  cidr(options) {
    return this._addCheck(__spreadValues({ kind: "cidr" }, errorUtil.errToObj(options)));
  }
  datetime(options) {
    var _a, _b;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck(__spreadValues({
      kind: "datetime",
      precision: typeof (options == null ? void 0 : options.precision) === "undefined" ? null : options == null ? void 0 : options.precision,
      offset: (_a = options == null ? void 0 : options.offset) != null ? _a : false,
      local: (_b = options == null ? void 0 : options.local) != null ? _b : false
    }, errorUtil.errToObj(options == null ? void 0 : options.message)));
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck(__spreadValues({
      kind: "time",
      precision: typeof (options == null ? void 0 : options.precision) === "undefined" ? null : options == null ? void 0 : options.precision
    }, errorUtil.errToObj(options == null ? void 0 : options.message)));
  }
  duration(message) {
    return this._addCheck(__spreadValues({ kind: "duration" }, errorUtil.errToObj(message)));
  }
  regex(regex, message) {
    return this._addCheck(__spreadValues({
      kind: "regex",
      regex
    }, errorUtil.errToObj(message)));
  }
  includes(value, options) {
    return this._addCheck(__spreadValues({
      kind: "includes",
      value,
      position: options == null ? void 0 : options.position
    }, errorUtil.errToObj(options == null ? void 0 : options.message)));
  }
  startsWith(value, message) {
    return this._addCheck(__spreadValues({
      kind: "startsWith",
      value
    }, errorUtil.errToObj(message)));
  }
  endsWith(value, message) {
    return this._addCheck(__spreadValues({
      kind: "endsWith",
      value
    }, errorUtil.errToObj(message)));
  }
  min(minLength, message) {
    return this._addCheck(__spreadValues({
      kind: "min",
      value: minLength
    }, errorUtil.errToObj(message)));
  }
  max(maxLength, message) {
    return this._addCheck(__spreadValues({
      kind: "max",
      value: maxLength
    }, errorUtil.errToObj(message)));
  }
  length(len, message) {
    return this._addCheck(__spreadValues({
      kind: "length",
      value: len
    }, errorUtil.errToObj(message)));
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, { kind: "trim" }]
    }));
  }
  toLowerCase() {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }));
  }
  toUpperCase() {
    return new _ZodString(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    }));
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a;
  return new ZodString(__spreadValues({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a = params == null ? void 0 : params.coerce) != null ? _a : false
  }, processCreateParams(params)));
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber(__spreadProps(__spreadValues({}, this._def), {
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    }));
  }
  _addCheck(check) {
    return new _ZodNumber(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber(__spreadValues({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params == null ? void 0 : params.coerce) || false
  }, processCreateParams(params)));
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch (e) {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt(__spreadProps(__spreadValues({}, this._def), {
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    }));
  }
  _addCheck(check) {
    return new _ZodBigInt(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a;
  return new ZodBigInt(__spreadValues({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a = params == null ? void 0 : params.coerce) != null ? _a : false
  }, processCreateParams(params)));
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params == null ? void 0 : params.coerce) || false
  }, processCreateParams(params)));
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate(__spreadProps(__spreadValues({}, this._def), {
      checks: [...this._def.checks, check]
    }));
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate(__spreadValues({
    checks: [],
    coerce: (params == null ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate
  }, processCreateParams(params)));
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodSymbol
  }, processCreateParams(params)));
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodUndefined
  }, processCreateParams(params)));
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodNull
  }, processCreateParams(params)));
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodAny
  }, processCreateParams(params)));
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodUnknown
  }, processCreateParams(params)));
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodNever
  }, processCreateParams(params)));
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodVoid
  }, processCreateParams(params)));
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray(__spreadProps(__spreadValues({}, this._def), {
      minLength: { value: minLength, message: errorUtil.toString(message) }
    }));
  }
  max(maxLength, message) {
    return new _ZodArray(__spreadProps(__spreadValues({}, this._def), {
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    }));
  }
  length(len, message) {
    return new _ZodArray(__spreadProps(__spreadValues({}, this._def), {
      exactLength: { value: len, message: errorUtil.toString(message) }
    }));
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray(__spreadValues({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray
  }, processCreateParams(params)));
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject(__spreadProps(__spreadValues({}, schema._def), {
      shape: () => newShape
    }));
  } else if (schema instanceof ZodArray) {
    return new ZodArray(__spreadProps(__spreadValues({}, schema._def), {
      type: deepPartialify(schema.element)
    }));
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject(__spreadValues(__spreadProps(__spreadValues({}, this._def), {
      unknownKeys: "strict"
    }), message !== void 0 ? {
      errorMap: (issue, ctx) => {
        var _a, _b, _c, _d;
        const defaultError = (_c = (_b = (_a = this._def).errorMap) == null ? void 0 : _b.call(_a, issue, ctx).message) != null ? _c : ctx.defaultError;
        if (issue.code === "unrecognized_keys")
          return {
            message: (_d = errorUtil.errToObj(message).message) != null ? _d : defaultError
          };
        return {
          message: defaultError
        };
      }
    } : {}));
  }
  strip() {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      unknownKeys: "strip"
    }));
  }
  passthrough() {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      unknownKeys: "passthrough"
    }));
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => __spreadValues(__spreadValues({}, this._def.shape()), augmentation)
    }));
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => __spreadValues(__spreadValues({}, this._def.shape()), merging._def.shape()),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      catchall: index
    }));
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => shape
    }));
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => shape
    }));
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => newShape
    }));
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject(__spreadProps(__spreadValues({}, this._def), {
      shape: () => newShape
    }));
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject(__spreadValues({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject
  }, processCreateParams(params)));
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject(__spreadValues({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject
  }, processCreateParams(params)));
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject(__spreadValues({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject
  }, processCreateParams(params)));
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = __spreadProps(__spreadValues({}, ctx), {
          common: __spreadProps(__spreadValues({}, ctx.common), {
            issues: []
          }),
          parent: null
        });
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = __spreadProps(__spreadValues({}, ctx), {
          common: __spreadProps(__spreadValues({}, ctx.common), {
            issues: []
          }),
          parent: null
        });
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion(__spreadValues({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion
  }, processCreateParams(params)));
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion(__spreadValues({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap
    }, processCreateParams(params)));
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = __spreadValues(__spreadValues({}, a), b);
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection(__spreadValues({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection
  }, processCreateParams(params)));
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple(__spreadProps(__spreadValues({}, this._def), {
      rest
    }));
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple(__spreadValues({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null
  }, processCreateParams(params)));
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord(__spreadValues({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord
      }, processCreateParams(third)));
    }
    return new _ZodRecord(__spreadValues({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord
    }, processCreateParams(second)));
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap(__spreadValues({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap
  }, processCreateParams(params)));
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet(__spreadProps(__spreadValues({}, this._def), {
      minSize: { value: minSize, message: errorUtil.toString(message) }
    }));
  }
  max(maxSize, message) {
    return new _ZodSet(__spreadProps(__spreadValues({}, this._def), {
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    }));
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet(__spreadValues({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet
  }, processCreateParams(params)));
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction(__spreadProps(__spreadValues({}, this._def), {
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    }));
  }
  returns(returnType) {
    return new _ZodFunction(__spreadProps(__spreadValues({}, this._def), {
      returns: returnType
    }));
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction(__spreadValues({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction
    }, processCreateParams(params)));
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy(__spreadValues({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy
  }, processCreateParams(params)));
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral(__spreadValues({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral
  }, processCreateParams(params)));
};
function createZodEnum(values, params) {
  return new ZodEnum(__spreadValues({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum
  }, processCreateParams(params)));
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, __spreadValues(__spreadValues({}, this._def), newDef));
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), __spreadValues(__spreadValues({}, this._def), newDef));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum(__spreadValues({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum
  }, processCreateParams(params)));
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise(__spreadValues({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise
  }, processCreateParams(params)));
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects(__spreadValues({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect
  }, processCreateParams(params)));
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects(__spreadValues({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects
  }, processCreateParams(params)));
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional
  }, processCreateParams(params)));
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable
  }, processCreateParams(params)));
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default
  }, processCreateParams(params)));
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = __spreadProps(__spreadValues({}, ctx), {
      common: __spreadProps(__spreadValues({}, ctx.common), {
        issues: []
      })
    });
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: __spreadValues({}, newCtx)
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch
  }, processCreateParams(params)));
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN(__spreadValues({
    typeName: ZodFirstPartyTypeKind.ZodNaN
  }, processCreateParams(params)));
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly(__spreadValues({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly
  }, processCreateParams(params)));
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a, _b;
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          var _a2, _b2;
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = (_b2 = (_a2 = params.fatal) != null ? _a2 : fatal) != null ? _b2 : true;
            ctx.addIssue(__spreadProps(__spreadValues({ code: "custom" }, params), { fatal: _fatal }));
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = (_b = (_a = params.fatal) != null ? _a : fatal) != null ? _b : true;
        ctx.addIssue(__spreadProps(__spreadValues({ code: "custom" }, params), { fatal: _fatal }));
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create(__spreadProps(__spreadValues({}, arg), { coerce: true }))),
  number: ((arg) => ZodNumber.create(__spreadProps(__spreadValues({}, arg), { coerce: true }))),
  boolean: ((arg) => ZodBoolean.create(__spreadProps(__spreadValues({}, arg), {
    coerce: true
  }))),
  bigint: ((arg) => ZodBigInt.create(__spreadProps(__spreadValues({}, arg), { coerce: true }))),
  date: ((arg) => ZodDate.create(__spreadProps(__spreadValues({}, arg), { coerce: true })))
};
var NEVER = INVALID;

// src/address_validation_api_get_geo_address.ts
var node4 = { "name": "Get Geo Address", "id": "address_validation_api_get_geo_address", "descripition": "Geocodes an address using Google Maps Geocoding API. Takes a street address or ZIP code and returns geocoded address suggestions. Uses optional city, state, and country MCP properties to streamline search when provided.", "inputSchema": {
  street: {
    name: "street",
    description: "Street address or ZIP code to geocode.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Geo Address from API Address Validation API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Address Validation API", "Get Geo Address"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/apply_tag_service_titan.ts
var node5 = { "name": "Apply Tag Service Titan", "id": "apply_tag_service_titan", "descripition": "Applies a tag to a customer in ServiceTitan", "inputSchema": {
  tagTypeId: {
    name: "Tag ID from ServiceTitan",
    description: "The ID of the tag to apply",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tag ID is invalid",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  customerId: {
    name: "Customer ID from ServiceTitan",
    description: "The ID of the customer to apply the tag to",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Customer ID is invalid",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/certapro_api_get_events.ts
var node6 = { "name": "Get Events", "id": "certapro_api_get_events", "descripition": 'Retrieves available calendar events/slots filtered by the configured filterName. Events are filtered to only show slots where the summary matches the filter (e.g., "ALL" for available slots).', "inputSchema": {
  zipCode: {
    name: "zipCode",
    description: "Zip code of the customer",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Events from API CertaPro API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["CertaPro API", "Get Events"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/certapro_api_update_event.ts
var node7 = { "name": "Update Event", "id": "certapro_api_update_event", "descripition": "Books/updates a calendar event with customer information. Takes an event_uid from the available slots and updates it with customer details.", "inputSchema": {
  notes: {
    name: "notes",
    description: "Additional notes",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Service address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  zipCode: {
    name: "zipCode",
    description: "Zip code of the customer",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Customer phone number",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  prospectName: {
    name: "prospectName",
    description: "Full name of the prospect/customer",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Customer email address",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  eventUid: {
    name: "event_uid",
    description: "The event_uid of the slot to book (from getEvents)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Event from API CertaPro API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["CertaPro API", "Update Event"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/certapro_v2_api_get_events.ts
var node8 = { "name": "Get Events", "id": "certapro_v2_api_get_events", "descripition": 'Retrieves available calendar events/slots filtered by the configured filterName. Events are filtered to only show slots where the summary matches the filter (e.g., "ALL" for available slots).', "inputSchema": {
  zipCode: {
    name: "zipCode",
    description: "Zip code of the customer",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Events from API CertaPro V2 API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["CertaPro V2 API", "Get Events"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/certapro_v2_api_update_event.ts
var node9 = { "name": "Update Event", "id": "certapro_v2_api_update_event", "descripition": "Books/updates a calendar event with customer information. Takes an event_uid from the available slots and updates it with customer details.", "inputSchema": {
  notes: {
    name: "notes",
    description: "Additional notes",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Service address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  zipCode: {
    name: "zipCode",
    description: "Zip code of the customer",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Customer phone number",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  prospectName: {
    name: "prospectName",
    description: "Full name of the prospect/customer",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Customer email address",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  eventUid: {
    name: "event_uid",
    description: "The event_uid of the slot to book (from getEvents)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Event from API CertaPro V2 API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["CertaPro V2 API", "Update Event"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/checkcondition.ts
var node10 = { "name": "Check Condition", "id": "checkcondition", "descripition": "Evaluates a condition comparing values with various operators, including AI-powered question answering", "inputSchema": {
  value: {
    name: "Value",
    description: "The value to check against a condition",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid value",
    required: false,
    input: {
      type: "text",
      placeholder: "Value to check"
    },
    parse: function(value) {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          const arr = JSON.parse(value);
          if (Array.isArray(arr)) {
            return arr;
          }
        } catch (e) {
        }
      }
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        return numValue;
      }
      try {
        const dateRegex2 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
        if (dateRegex2.test(value)) {
          return new Date(value);
        }
      } catch (e) {
      }
      return String(value);
    }
  },
  condition: {
    name: "Condition",
    description: "The type of comparison to perform",
    validationSchema: /.*/,
    errorMessage: "Please select a valid condition",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Equals", value: "equals" },
        { label: "Not Equals", value: "not_equals" },
        { label: "Greater Than", value: "greater_than" },
        { label: "Less Than", value: "less_than" },
        { label: "Contains", value: "contains" },
        { label: "Not Contains", value: "not_contains" },
        { label: "In", value: "in" },
        { label: "Not In", value: "not_in" },
        { label: "Ask Question AI", value: "ask_question_ai" },
        { label: "Regex Match", value: "regex_match" }
      ]
    },
    parse: function(value) {
      if ([
        "equals",
        "not_equals",
        "greater_than",
        "less_than",
        "contains",
        "not_contains",
        "in",
        "not_in",
        "ask_question_ai",
        "regex_match"
      ].includes(value)) {
        return value;
      }
      throw new Error("Invalid condition");
    }
  },
  compareTo: {
    name: "Compare To",
    description: "The value to compare against",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid comparison value",
    input: {
      type: "text",
      placeholder: "Value to compare against"
    },
    parse: function(value) {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          const arr = JSON.parse(value);
          if (Array.isArray(arr)) {
            return arr;
          }
        } catch (e) {
        }
      }
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        return numValue;
      }
      try {
        const dateRegex2 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
        if (dateRegex2.test(value)) {
          return new Date(value);
        }
      } catch (e) {
      }
      return String(value);
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Whether the condition was met",
    validator: (value) => typeof value === "boolean",
    example: true
  }
}, "groups": ["Control Flow", "Logic"], "branches": { "match": { "name": "Match", "description": "Condition matched", "id": "match" }, "no_match": { "name": "No Match", "description": "Condition did not match", "id": "no_match" } }, "isTriggerNode": false, "cost": 0 };

// src/check_if_invoice_overdue.ts
var node11 = { "name": "Check If Invoice Overdue", "id": "check_if_invoice_overdue", "descripition": "A description for CheckIfInvoiceOverdue", "inputSchema": {
  invoiceId: {
    name: "Invoice ID",
    description: "The ID of the invoice to check",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Invoice ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  maxDaysOverdue: {
    name: "Max Days Overdue",
    description: "Maximum number of days an invoice can be overdue",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Max Days Overdue must be a valid number",
    input: {
      type: "number",
      max: 2147483647,
      min: 0
    },
    parse: (value) => parseInt(value, 10)
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Indicates if the invoice is overdue",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": [], "branches": { "overdue": { "id": "overdue", "name": "Overdue", "description": "The invoice is overdue" }, "not_overdue": { "id": "not_overdue", "name": "Not Overdue", "description": "The invoice is not overdue" }, "invoice_not_found": { "id": "invoice_not_found", "name": "Invoice Not Found", "description": "The specified invoice was not found" } }, "isTriggerNode": false, "cost": 0 };

// src/custom_webhook.ts
var node12 = { "name": "Custom Webhook", "id": "custom_webhook", "descripition": "Makes custom HTTP requests to external APIs with configurable methods, headers, and body content", "inputSchema": {
  url: {
    name: "URL",
    description: "The URL to send the request to",
    validationSchema: /^https?:\/\/.+/,
    errorMessage: "Please enter a valid URL starting with http:// or https://",
    required: true,
    input: {
      type: "text",
      placeholder: "https://api.example.com/endpoint"
    },
    parse: function(value) {
      const url = new URL(value.trim());
      const privateIpRegex = /^(127\.0\.0\.1|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})$/;
      if (url.hostname === "localhost" || privateIpRegex.test(url.hostname)) {
        throw new Error("Localhost and private IPs are not allowed");
      }
      return value.trim();
    }
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
        { label: "PATCH", value: "PATCH" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  headers: {
    name: "Headers",
    description: "HTTP headers to include in the request",
    validationSchema: /^.*$/,
    errorMessage: "Invalid headers format",
    required: false,
    input: {
      type: "textarea",
      maxLength: 1e3,
      minLength: 2,
      placeholder: '{"Authorization": "Bearer token", "Content-Type": "application/json"}'
    },
    parse: function(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return {};
      }
    }
  },
  body: {
    name: "Request Body",
    description: "The body of the request (for POST, PUT, PATCH)",
    validationSchema: /^.*$/,
    errorMessage: "Invalid request body",
    required: false,
    input: {
      type: "textarea",
      maxLength: 5e3,
      minLength: 0,
      placeholder: '{"key": "value"}'
    },
    parse: function(value) {
      return value;
    }
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
          value: "application/x-www-form-urlencoded"
        },
        { label: "multipart/form-data", value: "multipart/form-data" }
      ]
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  responseStatus: {
    name: "Response Status",
    description: "HTTP status code of the response",
    example: 200,
    validator: function(value) {
      return Number.isInteger(value) && value >= 100 && value < 600;
    }
  },
  responseBody: {
    name: "Response Body",
    description: "Body of the HTTP response",
    example: '{ "success": true }',
    validator: function(value) {
      return typeof value === "string";
    }
  }
}, "groups": ["HTTP", "Integration"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/extract_common_field.ts
var node13 = { "name": "Extract Common Field", "id": "extract_common_field", "descripition": "Extracts common fields like date, email, or phone number from text using predefined patterns.", "inputSchema": {
  rawText: {
    name: "Raw Text",
    description: "The text to extract information from",
    validationSchema: /.*/,
    errorMessage: "Raw text must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Enter the text to analyze"
    },
    parse: (value) => value
  },
  fieldType: {
    name: "Field Type",
    description: "The type of common field to extract",
    validationSchema: /^(date|email|phone|url|ip_address|number)$/,
    errorMessage: "Field type must be 'date', 'email', 'phone', 'url', 'ip_address', or 'number'",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Date", value: "date" },
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "URL", value: "url" },
        // { label: "IP Address", value: "ip_address" },
        { label: "Number", value: "number" }
      ]
    },
    parse: (value) => value
  }
}, "outputSchema": {
  extractedData: {
    name: "Extracted Data",
    description: "The data extracted from the raw text, formatted consistently",
    example: "Extracted information",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Data"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/extract_with_a_i.ts
var node14 = { "name": "Extract With AI", "id": "extract_with_a_i", "descripition": "Extracts specific information from text using AI analysis based on provided instructions", "inputSchema": {
  rawText: {
    name: "Raw Text",
    description: "The text to extract information from",
    validationSchema: /.*/,
    errorMessage: "Raw text must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Enter the text to analyze"
    },
    parse: (value) => value
  },
  description: {
    name: "Extraction Description",
    description: "Describe what information to extract from the raw text",
    validationSchema: /.*/,
    errorMessage: "Description must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Describe what to extract (e.g., 'Extract the name, email, and phone number')"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  extractedData: {
    name: "Extracted Data",
    description: "The data extracted from the raw text",
    example: "Extracted information",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Data", "AI"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/genesys_cloud_api_forward_to_agent.ts
var node15 = { "name": "Forward To Agent", "id": "genesys_cloud_api_forward_to_agent", "descripition": "Forward the current call to a human agent. Automatically saves session data to Genesys and initiates conversation stitching.", "inputSchema": {
  summary: {
    name: "summary",
    description: "Summary of the interaction so far",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  escalationReason: {
    name: "escalationReason",
    description: "Reason for escalating to human agent",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Forward To Agent from API Genesys Cloud API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Genesys Cloud API", "Forward To Agent"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_agent_chat_history.ts
var node16 = { "name": "Get Agent Chat History", "id": "get_agent_chat_history", "descripition": "Retrieves the chat history for a specific agent and communication channel.", "inputSchema": {
  sessionType: {
    name: "Session Type",
    description: "Type of the chat session",
    validationSchema: /^(sms|email|whatsapp|messenger)$/,
    errorMessage: "Session Type must be one of the following: sms, email, whatsapp, messenger.",
    required: true,
    getVisible: () => true,
    input: {
      type: "select",
      options: [
        { label: "SMS", value: "sms" },
        { label: "Email", value: "email" },
        { label: "WhatsApp", value: "whatsapp" },
        { label: "Messenger", value: "messenger" }
      ],
      default: { value: "sms", label: "SMS" }
    },
    parse: (value) => value
  },
  agentId: {
    name: "Agent",
    description: "The agent who will handle the call",
    validationSchema: /.*/,
    errorMessage: "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: true,
    input: {
      type: "custom",
      tag: "agent-selector",
      options: {
        allowCreate: true
      }
    },
    parse: function(value) {
      return value.trim();
    }
  },
  fromPhoneNumber: {
    name: "From Phone Number",
    description: "The phone number with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid phone number.",
    required: false,
    input: {
      type: "custom",
      tag: "phone-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "sms";
    }
  },
  fromEmailAddress: {
    name: "From Email Address",
    description: "The email address with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid email address.",
    required: false,
    input: {
      type: "custom",
      tag: "email-address-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "email";
    }
  },
  fromWhatsappNumber: {
    name: "From WhatsApp Number",
    description: "The WhatsApp number with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid WhatsApp number.",
    required: false,
    input: {
      type: "custom",
      tag: "whatsapp-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "whatsapp";
    }
  },
  fromMessengerId: {
    name: "From Messenger ID",
    description: "The Messenger ID with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid Messenger ID.",
    required: false,
    input: {
      type: "custom",
      tag: "messenger-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "messenger";
    }
  },
  to: {
    name: "Recipient Number",
    description: "Receipient of the message",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid recipient identifier.",
    required: true,
    input: {
      type: "text",
      placeholder: "+1234567890 or abc@email.com"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  chatHistory: {
    name: "Full Response",
    description: "The full chat history or response details",
    example: '{"messages":[{"from":"agent","text":"Hello!"}]}',
    validator: (value) => typeof value === "string" && value.length > 0,
    required: true
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_chat_response.ts
var node17 = { "name": "Process Chat Response", "id": "get_chat_response", "descripition": "Processes a chat message and sends a reply from the assigned agent using the specified communication channel.", "inputSchema": {
  sessionType: {
    name: "Session Type",
    description: "Type of the chat session",
    validationSchema: /^(sms|email|whatsapp|messenger)$/,
    errorMessage: "Session Type must be one of the following: sms, email, whatsapp, messenger.",
    required: true,
    getVisible: () => true,
    input: {
      type: "select",
      options: [
        { label: "SMS", value: "sms" },
        { label: "Email", value: "email" },
        { label: "WhatsApp", value: "whatsapp" },
        { label: "Messenger", value: "messenger" }
      ],
      default: { value: "sms", label: "SMS" }
    },
    parse: (value) => value
  },
  userMessage: {
    name: "User Message",
    description: "Message from the user",
    validationSchema: /^.{1,1000}$/,
    errorMessage: "Message must be between 1 and 1000 characters.",
    required: true,
    getVisible: () => true,
    input: {
      type: "text",
      maxLength: 1e3,
      minLength: 1,
      placeholder: "Type your message",
      default: void 0
    },
    parse: (value) => value
  },
  agentId: {
    name: "Agent",
    description: "The agent who will handle the call",
    validationSchema: /.*/,
    errorMessage: "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: true,
    input: {
      type: "custom",
      tag: "agent-selector",
      options: {
        allowCreate: true
      }
    },
    parse: function(value) {
      return value.trim();
    }
  },
  fromPhoneNumber: {
    name: "From Phone Number",
    description: "The phone number with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid phone number.",
    required: false,
    input: {
      type: "custom",
      tag: "phone-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "sms";
    }
  },
  fromEmailAddress: {
    name: "From Email Address",
    description: "The email address with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid email address.",
    required: false,
    input: {
      type: "custom",
      tag: "email-address-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "email";
    }
  },
  fromWhatsappNumber: {
    name: "From WhatsApp Number",
    description: "The WhatsApp number with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid WhatsApp number.",
    required: false,
    input: {
      type: "custom",
      tag: "whatsapp-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "whatsapp";
    }
  },
  fromMessengerId: {
    name: "From Messenger ID",
    description: "The Messenger ID with which to send the message.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid Messenger ID.",
    required: false,
    input: {
      type: "custom",
      tag: "messenger-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputValues) => {
      return inputValues["sessionType"] === "messenger";
    }
  },
  to: {
    name: "Recipient Number",
    description: "Receipient of the message",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid recipient identifier.",
    required: true,
    input: {
      type: "text",
      placeholder: "+1234567890 or abc@email.com"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  reply: {
    name: "Reply",
    description: "The response message from the agent",
    example: "Hello! How can I assist you today?",
    validator: (value) => typeof value === "string" && value.length > 0 && value.length <= 1e3,
    required: true
  },
  chatHistory: {
    name: "Full Response",
    description: "The full chat history or response details",
    example: '{"messages":[{"from":"agent","text":"Hello!"}]}',
    validator: (value) => typeof value === "string" && value.length > 0,
    required: true
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_constant.ts
var node18 = { "name": "Get Constant", "id": "get_constant", "descripition": "Returns various useful constants like time information, system values, and random data", "inputSchema": {
  constantType: {
    name: "Constant Type",
    description: "The type of constant value to return",
    validationSchema: /.*/,
    errorMessage: "Please select a valid constant type",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Current Date (ISO)", value: "current_date_iso" },
        { label: "Current Time (ISO)", value: "current_time_iso" },
        { label: "Current DateTime (ISO)", value: "current_datetime_iso" },
        {
          label: "Unix Timestamp (seconds)",
          value: "unix_timestamp_seconds"
        },
        {
          label: "Unix Timestamp (milliseconds)",
          value: "unix_timestamp_ms"
        },
        { label: "Day of Week (0-6)", value: "day_of_week" },
        { label: "Day of Week (name)", value: "day_of_week_name" },
        { label: "Week Number(1-53)", value: "week_number" },
        { label: "Month (1-12)", value: "month_number" },
        { label: "Month (name)", value: "month_name" },
        { label: "Year", value: "year" },
        { label: "Hour (0-23)", value: "hour" },
        { label: "Minute (0-59)", value: "minute" },
        { label: "Second (0-59)", value: "second" },
        // { label: "Random UUID", value: "random_uuid" },
        // { label: "Random Number (0-1)", value: "random_number" },
        { label: "Random Integer", value: "random_integer" }
        // { label: "Random Boolean", value: "random_boolean" },
      ],
      default: {
        label: "Current DateTime (ISO)",
        value: "current_datetime_iso"
      }
    },
    parse: (value) => value
  },
  timezone: {
    name: "Timezone",
    description: "Timezone for time-related constants",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid timezone",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Africa/Abidjan", value: "Africa/Abidjan" },
        { label: "Africa/Accra", value: "Africa/Accra" },
        { label: "Africa/Addis_Ababa", value: "Africa/Addis_Ababa" },
        { label: "Africa/Algiers", value: "Africa/Algiers" },
        { label: "Africa/Asmara", value: "Africa/Asmara" },
        { label: "Africa/Asmera", value: "Africa/Asmera" },
        { label: "Africa/Bamako", value: "Africa/Bamako" },
        { label: "Africa/Bangui", value: "Africa/Bangui" },
        { label: "Africa/Banjul", value: "Africa/Banjul" },
        { label: "Africa/Bissau", value: "Africa/Bissau" },
        { label: "Africa/Blantyre", value: "Africa/Blantyre" },
        { label: "Africa/Brazzaville", value: "Africa/Brazzaville" },
        { label: "Africa/Bujumbura", value: "Africa/Bujumbura" },
        { label: "Africa/Cairo", value: "Africa/Cairo" },
        { label: "Africa/Casablanca", value: "Africa/Casablanca" },
        { label: "Africa/Ceuta", value: "Africa/Ceuta" },
        { label: "Africa/Conakry", value: "Africa/Conakry" },
        { label: "Africa/Dakar", value: "Africa/Dakar" },
        { label: "Africa/Dar_es_Salaam", value: "Africa/Dar_es_Salaam" },
        { label: "Africa/Djibouti", value: "Africa/Djibouti" },
        { label: "Africa/Douala", value: "Africa/Douala" },
        { label: "Africa/El_Aaiun", value: "Africa/El_Aaiun" },
        { label: "Africa/Freetown", value: "Africa/Freetown" },
        { label: "Africa/Gaborone", value: "Africa/Gaborone" },
        { label: "Africa/Harare", value: "Africa/Harare" },
        { label: "Africa/Johannesburg", value: "Africa/Johannesburg" },
        { label: "Africa/Juba", value: "Africa/Juba" },
        { label: "Africa/Kampala", value: "Africa/Kampala" },
        { label: "Africa/Khartoum", value: "Africa/Khartoum" },
        { label: "Africa/Kigali", value: "Africa/Kigali" },
        { label: "Africa/Kinshasa", value: "Africa/Kinshasa" },
        { label: "Africa/Lagos", value: "Africa/Lagos" },
        { label: "Africa/Libreville", value: "Africa/Libreville" },
        { label: "Africa/Lome", value: "Africa/Lome" },
        { label: "Africa/Luanda", value: "Africa/Luanda" },
        { label: "Africa/Lubumbashi", value: "Africa/Lubumbashi" },
        { label: "Africa/Lusaka", value: "Africa/Lusaka" },
        { label: "Africa/Malabo", value: "Africa/Malabo" },
        { label: "Africa/Maputo", value: "Africa/Maputo" },
        { label: "Africa/Maseru", value: "Africa/Maseru" },
        { label: "Africa/Mbabane", value: "Africa/Mbabane" },
        { label: "Africa/Mogadishu", value: "Africa/Mogadishu" },
        { label: "Africa/Monrovia", value: "Africa/Monrovia" },
        { label: "Africa/Nairobi", value: "Africa/Nairobi" },
        { label: "Africa/Ndjamena", value: "Africa/Ndjamena" },
        { label: "Africa/Niamey", value: "Africa/Niamey" },
        { label: "Africa/Nouakchott", value: "Africa/Nouakchott" },
        { label: "Africa/Ouagadougou", value: "Africa/Ouagadougou" },
        { label: "Africa/Porto-Novo", value: "Africa/Porto-Novo" },
        { label: "Africa/Sao_Tome", value: "Africa/Sao_Tome" },
        { label: "Africa/Timbuktu", value: "Africa/Timbuktu" },
        { label: "Africa/Tripoli", value: "Africa/Tripoli" },
        { label: "Africa/Tunis", value: "Africa/Tunis" },
        { label: "Africa/Windhoek", value: "Africa/Windhoek" },
        { label: "America/Adak", value: "America/Adak" },
        { label: "America/Anchorage", value: "America/Anchorage" },
        { label: "America/Anguilla", value: "America/Anguilla" },
        { label: "America/Antigua", value: "America/Antigua" },
        { label: "America/Araguaina", value: "America/Araguaina" },
        {
          label: "America/Argentina/Buenos_Aires",
          value: "America/Argentina/Buenos_Aires"
        },
        {
          label: "America/Argentina/Catamarca",
          value: "America/Argentina/Catamarca"
        },
        {
          label: "America/Argentina/ComodRivadavia",
          value: "America/Argentina/ComodRivadavia"
        },
        {
          label: "America/Argentina/Cordoba",
          value: "America/Argentina/Cordoba"
        },
        {
          label: "America/Argentina/Jujuy",
          value: "America/Argentina/Jujuy"
        },
        {
          label: "America/Argentina/La_Rioja",
          value: "America/Argentina/La_Rioja"
        },
        {
          label: "America/Argentina/Mendoza",
          value: "America/Argentina/Mendoza"
        },
        {
          label: "America/Argentina/Rio_Gallegos",
          value: "America/Argentina/Rio_Gallegos"
        },
        {
          label: "America/Argentina/Salta",
          value: "America/Argentina/Salta"
        },
        {
          label: "America/Argentina/San_Juan",
          value: "America/Argentina/San_Juan"
        },
        {
          label: "America/Argentina/San_Luis",
          value: "America/Argentina/San_Luis"
        },
        {
          label: "America/Argentina/Tucuman",
          value: "America/Argentina/Tucuman"
        },
        {
          label: "America/Argentina/Ushuaia",
          value: "America/Argentina/Ushuaia"
        },
        { label: "America/Aruba", value: "America/Aruba" },
        { label: "America/Asuncion", value: "America/Asuncion" },
        { label: "America/Atikokan", value: "America/Atikokan" },
        { label: "America/Atka", value: "America/Atka" },
        { label: "America/Bahia", value: "America/Bahia" },
        { label: "America/Bahia_Banderas", value: "America/Bahia_Banderas" },
        { label: "America/Barbados", value: "America/Barbados" },
        { label: "America/Belem", value: "America/Belem" },
        { label: "America/Belize", value: "America/Belize" },
        { label: "America/Blanc-Sablon", value: "America/Blanc-Sablon" },
        { label: "America/Boa_Vista", value: "America/Boa_Vista" },
        { label: "America/Bogota", value: "America/Bogota" },
        { label: "America/Boise", value: "America/Boise" },
        { label: "America/Buenos_Aires", value: "America/Buenos_Aires" },
        { label: "America/Cambridge_Bay", value: "America/Cambridge_Bay" },
        { label: "America/Campo_Grande", value: "America/Campo_Grande" },
        { label: "America/Cancun", value: "America/Cancun" },
        { label: "America/Caracas", value: "America/Caracas" },
        { label: "America/Catamarca", value: "America/Catamarca" },
        { label: "America/Cayenne", value: "America/Cayenne" },
        { label: "America/Cayman", value: "America/Cayman" },
        { label: "America/Chicago", value: "America/Chicago" },
        { label: "America/Chihuahua", value: "America/Chihuahua" },
        { label: "America/Ciudad_Juarez", value: "America/Ciudad_Juarez" },
        { label: "America/Coral_Harbour", value: "America/Coral_Harbour" },
        { label: "America/Cordoba", value: "America/Cordoba" },
        { label: "America/Costa_Rica", value: "America/Costa_Rica" },
        { label: "America/Coyhaique", value: "America/Coyhaique" },
        { label: "America/Creston", value: "America/Creston" },
        { label: "America/Cuiaba", value: "America/Cuiaba" },
        { label: "America/Curacao", value: "America/Curacao" },
        { label: "America/Danmarkshavn", value: "America/Danmarkshavn" },
        { label: "America/Dawson", value: "America/Dawson" },
        { label: "America/Dawson_Creek", value: "America/Dawson_Creek" },
        { label: "America/Denver", value: "America/Denver" },
        { label: "America/Detroit", value: "America/Detroit" },
        { label: "America/Dominica", value: "America/Dominica" },
        { label: "America/Edmonton", value: "America/Edmonton" },
        { label: "America/Eirunepe", value: "America/Eirunepe" },
        { label: "America/El_Salvador", value: "America/El_Salvador" },
        { label: "America/Ensenada", value: "America/Ensenada" },
        { label: "America/Fort_Nelson", value: "America/Fort_Nelson" },
        { label: "America/Fort_Wayne", value: "America/Fort_Wayne" },
        { label: "America/Fortaleza", value: "America/Fortaleza" },
        { label: "America/Glace_Bay", value: "America/Glace_Bay" },
        { label: "America/Godthab", value: "America/Godthab" },
        { label: "America/Goose_Bay", value: "America/Goose_Bay" },
        { label: "America/Grand_Turk", value: "America/Grand_Turk" },
        { label: "America/Grenada", value: "America/Grenada" },
        { label: "America/Guadeloupe", value: "America/Guadeloupe" },
        { label: "America/Guatemala", value: "America/Guatemala" },
        { label: "America/Guayaquil", value: "America/Guayaquil" },
        { label: "America/Guyana", value: "America/Guyana" },
        { label: "America/Halifax", value: "America/Halifax" },
        { label: "America/Havana", value: "America/Havana" },
        { label: "America/Hermosillo", value: "America/Hermosillo" },
        {
          label: "America/Indiana/Indianapolis",
          value: "America/Indiana/Indianapolis"
        },
        { label: "America/Indiana/Knox", value: "America/Indiana/Knox" },
        {
          label: "America/Indiana/Marengo",
          value: "America/Indiana/Marengo"
        },
        {
          label: "America/Indiana/Petersburg",
          value: "America/Indiana/Petersburg"
        },
        {
          label: "America/Indiana/Tell_City",
          value: "America/Indiana/Tell_City"
        },
        { label: "America/Indiana/Vevay", value: "America/Indiana/Vevay" },
        {
          label: "America/Indiana/Vincennes",
          value: "America/Indiana/Vincennes"
        },
        {
          label: "America/Indiana/Winamac",
          value: "America/Indiana/Winamac"
        },
        { label: "America/Indianapolis", value: "America/Indianapolis" },
        { label: "America/Inuvik", value: "America/Inuvik" },
        { label: "America/Iqaluit", value: "America/Iqaluit" },
        { label: "America/Jamaica", value: "America/Jamaica" },
        { label: "America/Jujuy", value: "America/Jujuy" },
        { label: "America/Juneau", value: "America/Juneau" },
        {
          label: "America/Kentucky/Louisville",
          value: "America/Kentucky/Louisville"
        },
        {
          label: "America/Kentucky/Monticello",
          value: "America/Kentucky/Monticello"
        },
        { label: "America/Knox_IN", value: "America/Knox_IN" },
        { label: "America/Kralendijk", value: "America/Kralendijk" },
        { label: "America/La_Paz", value: "America/La_Paz" },
        { label: "America/Lima", value: "America/Lima" },
        { label: "America/Los_Angeles", value: "America/Los_Angeles" },
        { label: "America/Louisville", value: "America/Louisville" },
        { label: "America/Lower_Princes", value: "America/Lower_Princes" },
        { label: "America/Maceio", value: "America/Maceio" },
        { label: "America/Managua", value: "America/Managua" },
        { label: "America/Manaus", value: "America/Manaus" },
        { label: "America/Marigot", value: "America/Marigot" },
        { label: "America/Martinique", value: "America/Martinique" },
        { label: "America/Matamoros", value: "America/Matamoros" },
        { label: "America/Mazatlan", value: "America/Mazatlan" },
        { label: "America/Mendoza", value: "America/Mendoza" },
        { label: "America/Menominee", value: "America/Menominee" },
        { label: "America/Merida", value: "America/Merida" },
        { label: "America/Metlakatla", value: "America/Metlakatla" },
        { label: "America/Mexico_City", value: "America/Mexico_City" },
        { label: "America/Miquelon", value: "America/Miquelon" },
        { label: "America/Moncton", value: "America/Moncton" },
        { label: "America/Monterrey", value: "America/Monterrey" },
        { label: "America/Montevideo", value: "America/Montevideo" },
        { label: "America/Montreal", value: "America/Montreal" },
        { label: "America/Montserrat", value: "America/Montserrat" },
        { label: "America/Nassau", value: "America/Nassau" },
        { label: "America/New_York", value: "America/New_York" },
        { label: "America/Nipigon", value: "America/Nipigon" },
        { label: "America/Nome", value: "America/Nome" },
        { label: "America/Noronha", value: "America/Noronha" },
        {
          label: "America/North_Dakota/Beulah",
          value: "America/North_Dakota/Beulah"
        },
        {
          label: "America/North_Dakota/Center",
          value: "America/North_Dakota/Center"
        },
        {
          label: "America/North_Dakota/New_Salem",
          value: "America/North_Dakota/New_Salem"
        },
        { label: "America/Nuuk", value: "America/Nuuk" },
        { label: "America/Ojinaga", value: "America/Ojinaga" },
        { label: "America/Panama", value: "America/Panama" },
        { label: "America/Pangnirtung", value: "America/Pangnirtung" },
        { label: "America/Paramaribo", value: "America/Paramaribo" },
        { label: "America/Phoenix", value: "America/Phoenix" },
        { label: "America/Port-au-Prince", value: "America/Port-au-Prince" },
        { label: "America/Port_of_Spain", value: "America/Port_of_Spain" },
        { label: "America/Porto_Acre", value: "America/Porto_Acre" },
        { label: "America/Porto_Velho", value: "America/Porto_Velho" },
        { label: "America/Puerto_Rico", value: "America/Puerto_Rico" },
        { label: "America/Punta_Arenas", value: "America/Punta_Arenas" },
        { label: "America/Rainy_River", value: "America/Rainy_River" },
        { label: "America/Rankin_Inlet", value: "America/Rankin_Inlet" },
        { label: "America/Recife", value: "America/Recife" },
        { label: "America/Regina", value: "America/Regina" },
        { label: "America/Resolute", value: "America/Resolute" },
        { label: "America/Rio_Branco", value: "America/Rio_Branco" },
        { label: "America/Rosario", value: "America/Rosario" },
        { label: "America/Santa_Isabel", value: "America/Santa_Isabel" },
        { label: "America/Santarem", value: "America/Santarem" },
        { label: "America/Santiago", value: "America/Santiago" },
        { label: "America/Santo_Domingo", value: "America/Santo_Domingo" },
        { label: "America/Sao_Paulo", value: "America/Sao_Paulo" },
        { label: "America/Scoresbysund", value: "America/Scoresbysund" },
        { label: "America/Shiprock", value: "America/Shiprock" },
        { label: "America/Sitka", value: "America/Sitka" },
        { label: "America/St_Barthelemy", value: "America/St_Barthelemy" },
        { label: "America/St_Johns", value: "America/St_Johns" },
        { label: "America/St_Kitts", value: "America/St_Kitts" },
        { label: "America/St_Lucia", value: "America/St_Lucia" },
        { label: "America/St_Thomas", value: "America/St_Thomas" },
        { label: "America/St_Vincent", value: "America/St_Vincent" },
        { label: "America/Swift_Current", value: "America/Swift_Current" },
        { label: "America/Tegucigalpa", value: "America/Tegucigalpa" },
        { label: "America/Thule", value: "America/Thule" },
        { label: "America/Thunder_Bay", value: "America/Thunder_Bay" },
        { label: "America/Tijuana", value: "America/Tijuana" },
        { label: "America/Toronto", value: "America/Toronto" },
        { label: "America/Tortola", value: "America/Tortola" },
        { label: "America/Vancouver", value: "America/Vancouver" },
        { label: "America/Virgin", value: "America/Virgin" },
        { label: "America/Whitehorse", value: "America/Whitehorse" },
        { label: "America/Winnipeg", value: "America/Winnipeg" },
        { label: "America/Yakutat", value: "America/Yakutat" },
        { label: "America/Yellowknife", value: "America/Yellowknife" },
        { label: "Antarctica/Casey", value: "Antarctica/Casey" },
        { label: "Antarctica/Davis", value: "Antarctica/Davis" },
        {
          label: "Antarctica/DumontDUrville",
          value: "Antarctica/DumontDUrville"
        },
        { label: "Antarctica/Macquarie", value: "Antarctica/Macquarie" },
        { label: "Antarctica/Mawson", value: "Antarctica/Mawson" },
        { label: "Antarctica/McMurdo", value: "Antarctica/McMurdo" },
        { label: "Antarctica/Palmer", value: "Antarctica/Palmer" },
        { label: "Antarctica/Rothera", value: "Antarctica/Rothera" },
        { label: "Antarctica/South_Pole", value: "Antarctica/South_Pole" },
        { label: "Antarctica/Syowa", value: "Antarctica/Syowa" },
        { label: "Antarctica/Troll", value: "Antarctica/Troll" },
        { label: "Antarctica/Vostok", value: "Antarctica/Vostok" },
        { label: "Arctic/Longyearbyen", value: "Arctic/Longyearbyen" },
        { label: "Asia/Aden", value: "Asia/Aden" },
        { label: "Asia/Almaty", value: "Asia/Almaty" },
        { label: "Asia/Amman", value: "Asia/Amman" },
        { label: "Asia/Anadyr", value: "Asia/Anadyr" },
        { label: "Asia/Aqtau", value: "Asia/Aqtau" },
        { label: "Asia/Aqtobe", value: "Asia/Aqtobe" },
        { label: "Asia/Ashgabat", value: "Asia/Ashgabat" },
        { label: "Asia/Ashkhabad", value: "Asia/Ashkhabad" },
        { label: "Asia/Atyrau", value: "Asia/Atyrau" },
        { label: "Asia/Baghdad", value: "Asia/Baghdad" },
        { label: "Asia/Bahrain", value: "Asia/Bahrain" },
        { label: "Asia/Baku", value: "Asia/Baku" },
        { label: "Asia/Bangkok", value: "Asia/Bangkok" },
        { label: "Asia/Barnaul", value: "Asia/Barnaul" },
        { label: "Asia/Beirut", value: "Asia/Beirut" },
        { label: "Asia/Bishkek", value: "Asia/Bishkek" },
        { label: "Asia/Brunei", value: "Asia/Brunei" },
        { label: "Asia/Calcutta", value: "Asia/Calcutta" },
        { label: "Asia/Chita", value: "Asia/Chita" },
        { label: "Asia/Choibalsan", value: "Asia/Choibalsan" },
        { label: "Asia/Chongqing", value: "Asia/Chongqing" },
        { label: "Asia/Chungking", value: "Asia/Chungking" },
        { label: "Asia/Colombo", value: "Asia/Colombo" },
        { label: "Asia/Dacca", value: "Asia/Dacca" },
        { label: "Asia/Damascus", value: "Asia/Damascus" },
        { label: "Asia/Dhaka", value: "Asia/Dhaka" },
        { label: "Asia/Dili", value: "Asia/Dili" },
        { label: "Asia/Dubai", value: "Asia/Dubai" },
        { label: "Asia/Dushanbe", value: "Asia/Dushanbe" },
        { label: "Asia/Famagusta", value: "Asia/Famagusta" },
        { label: "Asia/Gaza", value: "Asia/Gaza" },
        { label: "Asia/Harbin", value: "Asia/Harbin" },
        { label: "Asia/Hebron", value: "Asia/Hebron" },
        { label: "Asia/Ho_Chi_Minh", value: "Asia/Ho_Chi_Minh" },
        { label: "Asia/Hong_Kong", value: "Asia/Hong_Kong" },
        { label: "Asia/Hovd", value: "Asia/Hovd" },
        { label: "Asia/Irkutsk", value: "Asia/Irkutsk" },
        { label: "Asia/Istanbul", value: "Asia/Istanbul" },
        { label: "Asia/Jakarta", value: "Asia/Jakarta" },
        { label: "Asia/Jayapura", value: "Asia/Jayapura" },
        { label: "Asia/Jerusalem", value: "Asia/Jerusalem" },
        { label: "Asia/Kabul", value: "Asia/Kabul" },
        { label: "Asia/Kamchatka", value: "Asia/Kamchatka" },
        { label: "Asia/Karachi", value: "Asia/Karachi" },
        { label: "Asia/Kashgar", value: "Asia/Kashgar" },
        { label: "Asia/Kathmandu", value: "Asia/Kathmandu" },
        { label: "Asia/Katmandu", value: "Asia/Katmandu" },
        { label: "Asia/Khandyga", value: "Asia/Khandyga" },
        { label: "Asia/Kolkata", value: "Asia/Kolkata" },
        { label: "Asia/Krasnoyarsk", value: "Asia/Krasnoyarsk" },
        { label: "Asia/Kuala_Lumpur", value: "Asia/Kuala_Lumpur" },
        { label: "Asia/Kuching", value: "Asia/Kuching" },
        { label: "Asia/Kuwait", value: "Asia/Kuwait" },
        { label: "Asia/Macao", value: "Asia/Macao" },
        { label: "Asia/Macau", value: "Asia/Macau" },
        { label: "Asia/Magadan", value: "Asia/Magadan" },
        { label: "Asia/Makassar", value: "Asia/Makassar" },
        { label: "Asia/Manila", value: "Asia/Manila" },
        { label: "Asia/Muscat", value: "Asia/Muscat" },
        { label: "Asia/Nicosia", value: "Asia/Nicosia" },
        { label: "Asia/Novokuznetsk", value: "Asia/Novokuznetsk" },
        { label: "Asia/Novosibirsk", value: "Asia/Novosibirsk" },
        { label: "Asia/Omsk", value: "Asia/Omsk" },
        { label: "Asia/Oral", value: "Asia/Oral" },
        { label: "Asia/Phnom_Penh", value: "Asia/Phnom_Penh" },
        { label: "Asia/Pontianak", value: "Asia/Pontianak" },
        { label: "Asia/Pyongyang", value: "Asia/Pyongyang" },
        { label: "Asia/Qatar", value: "Asia/Qatar" },
        { label: "Asia/Qostanay", value: "Asia/Qostanay" },
        { label: "Asia/Qyzylorda", value: "Asia/Qyzylorda" },
        { label: "Asia/Rangoon", value: "Asia/Rangoon" },
        { label: "Asia/Riyadh", value: "Asia/Riyadh" },
        { label: "Asia/Saigon", value: "Asia/Saigon" },
        { label: "Asia/Sakhalin", value: "Asia/Sakhalin" },
        { label: "Asia/Samarkand", value: "Asia/Samarkand" },
        { label: "Asia/Seoul", value: "Asia/Seoul" },
        { label: "Asia/Shanghai", value: "Asia/Shanghai" },
        { label: "Asia/Singapore", value: "Asia/Singapore" },
        { label: "Asia/Srednekolymsk", value: "Asia/Srednekolymsk" },
        { label: "Asia/Taipei", value: "Asia/Taipei" },
        { label: "Asia/Tashkent", value: "Asia/Tashkent" },
        { label: "Asia/Tbilisi", value: "Asia/Tbilisi" },
        { label: "Asia/Tehran", value: "Asia/Tehran" },
        { label: "Asia/Tel_Aviv", value: "Asia/Tel_Aviv" },
        { label: "Asia/Thimbu", value: "Asia/Thimbu" },
        { label: "Asia/Thimphu", value: "Asia/Thimphu" },
        { label: "Asia/Tokyo", value: "Asia/Tokyo" },
        { label: "Asia/Tomsk", value: "Asia/Tomsk" },
        { label: "Asia/Ujung_Pandang", value: "Asia/Ujung_Pandang" },
        { label: "Asia/Ulaanbaatar", value: "Asia/Ulaanbaatar" },
        { label: "Asia/Ulan_Bator", value: "Asia/Ulan_Bator" },
        { label: "Asia/Urumqi", value: "Asia/Urumqi" },
        { label: "Asia/Ust-Nera", value: "Asia/Ust-Nera" },
        { label: "Asia/Vientiane", value: "Asia/Vientiane" },
        { label: "Asia/Vladivostok", value: "Asia/Vladivostok" },
        { label: "Asia/Yakutsk", value: "Asia/Yakutsk" },
        { label: "Asia/Yangon", value: "Asia/Yangon" },
        { label: "Asia/Yekaterinburg", value: "Asia/Yekaterinburg" },
        { label: "Asia/Yerevan", value: "Asia/Yerevan" },
        { label: "Atlantic/Azores", value: "Atlantic/Azores" },
        { label: "Atlantic/Bermuda", value: "Atlantic/Bermuda" },
        { label: "Atlantic/Canary", value: "Atlantic/Canary" },
        { label: "Atlantic/Cape_Verde", value: "Atlantic/Cape_Verde" },
        { label: "Atlantic/Faeroe", value: "Atlantic/Faeroe" },
        { label: "Atlantic/Faroe", value: "Atlantic/Faroe" },
        { label: "Atlantic/Jan_Mayen", value: "Atlantic/Jan_Mayen" },
        { label: "Atlantic/Madeira", value: "Atlantic/Madeira" },
        { label: "Atlantic/Reykjavik", value: "Atlantic/Reykjavik" },
        { label: "Atlantic/South_Georgia", value: "Atlantic/South_Georgia" },
        { label: "Atlantic/St_Helena", value: "Atlantic/St_Helena" },
        { label: "Atlantic/Stanley", value: "Atlantic/Stanley" },
        { label: "Australia/ACT", value: "Australia/ACT" },
        { label: "Australia/Adelaide", value: "Australia/Adelaide" },
        { label: "Australia/Brisbane", value: "Australia/Brisbane" },
        { label: "Australia/Broken_Hill", value: "Australia/Broken_Hill" },
        { label: "Australia/Canberra", value: "Australia/Canberra" },
        { label: "Australia/Currie", value: "Australia/Currie" },
        { label: "Australia/Darwin", value: "Australia/Darwin" },
        { label: "Australia/Eucla", value: "Australia/Eucla" },
        { label: "Australia/Hobart", value: "Australia/Hobart" },
        { label: "Australia/LHI", value: "Australia/LHI" },
        { label: "Australia/Lindeman", value: "Australia/Lindeman" },
        { label: "Australia/Lord_Howe", value: "Australia/Lord_Howe" },
        { label: "Australia/Melbourne", value: "Australia/Melbourne" },
        { label: "Australia/NSW", value: "Australia/NSW" },
        { label: "Australia/North", value: "Australia/North" },
        { label: "Australia/Perth", value: "Australia/Perth" },
        { label: "Australia/Queensland", value: "Australia/Queensland" },
        { label: "Australia/South", value: "Australia/South" },
        { label: "Australia/Sydney", value: "Australia/Sydney" },
        { label: "Australia/Tasmania", value: "Australia/Tasmania" },
        { label: "Australia/Victoria", value: "Australia/Victoria" },
        { label: "Australia/West", value: "Australia/West" },
        { label: "Australia/Yancowinna", value: "Australia/Yancowinna" },
        { label: "Brazil/Acre", value: "Brazil/Acre" },
        { label: "Brazil/DeNoronha", value: "Brazil/DeNoronha" },
        { label: "Brazil/East", value: "Brazil/East" },
        { label: "Brazil/West", value: "Brazil/West" },
        { label: "CET", value: "CET" },
        { label: "CST6CDT", value: "CST6CDT" },
        { label: "Canada/Atlantic", value: "Canada/Atlantic" },
        { label: "Canada/Central", value: "Canada/Central" },
        { label: "Canada/Eastern", value: "Canada/Eastern" },
        { label: "Canada/Mountain", value: "Canada/Mountain" },
        { label: "Canada/Newfoundland", value: "Canada/Newfoundland" },
        { label: "Canada/Pacific", value: "Canada/Pacific" },
        { label: "Canada/Saskatchewan", value: "Canada/Saskatchewan" },
        { label: "Canada/Yukon", value: "Canada/Yukon" },
        { label: "Chile/Continental", value: "Chile/Continental" },
        { label: "Chile/EasterIsland", value: "Chile/EasterIsland" },
        { label: "Cuba", value: "Cuba" },
        { label: "EET", value: "EET" },
        { label: "EST", value: "EST" },
        { label: "EST5EDT", value: "EST5EDT" },
        { label: "Egypt", value: "Egypt" },
        { label: "Eire", value: "Eire" },
        { label: "Etc/GMT", value: "Etc/GMT" },
        { label: "Etc/GMT+0", value: "Etc/GMT+0" },
        { label: "Etc/GMT+1", value: "Etc/GMT+1" },
        { label: "Etc/GMT+10", value: "Etc/GMT+10" },
        { label: "Etc/GMT+11", value: "Etc/GMT+11" },
        { label: "Etc/GMT+12", value: "Etc/GMT+12" },
        { label: "Etc/GMT+2", value: "Etc/GMT+2" },
        { label: "Etc/GMT+3", value: "Etc/GMT+3" },
        { label: "Etc/GMT+4", value: "Etc/GMT+4" },
        { label: "Etc/GMT+5", value: "Etc/GMT+5" },
        { label: "Etc/GMT+6", value: "Etc/GMT+6" },
        { label: "Etc/GMT+7", value: "Etc/GMT+7" },
        { label: "Etc/GMT+8", value: "Etc/GMT+8" },
        { label: "Etc/GMT+9", value: "Etc/GMT+9" },
        { label: "Etc/GMT-0", value: "Etc/GMT-0" },
        { label: "Etc/GMT-1", value: "Etc/GMT-1" },
        { label: "Etc/GMT-10", value: "Etc/GMT-10" },
        { label: "Etc/GMT-11", value: "Etc/GMT-11" },
        { label: "Etc/GMT-12", value: "Etc/GMT-12" },
        { label: "Etc/GMT-13", value: "Etc/GMT-13" },
        { label: "Etc/GMT-14", value: "Etc/GMT-14" },
        { label: "Etc/GMT-2", value: "Etc/GMT-2" },
        { label: "Etc/GMT-3", value: "Etc/GMT-3" },
        { label: "Etc/GMT-4", value: "Etc/GMT-4" },
        { label: "Etc/GMT-5", value: "Etc/GMT-5" },
        { label: "Etc/GMT-6", value: "Etc/GMT-6" },
        { label: "Etc/GMT-7", value: "Etc/GMT-7" },
        { label: "Etc/GMT-8", value: "Etc/GMT-8" },
        { label: "Etc/GMT-9", value: "Etc/GMT-9" },
        { label: "Etc/GMT0", value: "Etc/GMT0" },
        { label: "Etc/Greenwich", value: "Etc/Greenwich" },
        { label: "Etc/UCT", value: "Etc/UCT" },
        { label: "Etc/UTC", value: "Etc/UTC" },
        { label: "Etc/Universal", value: "Etc/Universal" },
        { label: "Etc/Zulu", value: "Etc/Zulu" },
        { label: "Europe/Amsterdam", value: "Europe/Amsterdam" },
        { label: "Europe/Andorra", value: "Europe/Andorra" },
        { label: "Europe/Astrakhan", value: "Europe/Astrakhan" },
        { label: "Europe/Athens", value: "Europe/Athens" },
        { label: "Europe/Belfast", value: "Europe/Belfast" },
        { label: "Europe/Belgrade", value: "Europe/Belgrade" },
        { label: "Europe/Berlin", value: "Europe/Berlin" },
        { label: "Europe/Bratislava", value: "Europe/Bratislava" },
        { label: "Europe/Brussels", value: "Europe/Brussels" },
        { label: "Europe/Bucharest", value: "Europe/Bucharest" },
        { label: "Europe/Budapest", value: "Europe/Budapest" },
        { label: "Europe/Busingen", value: "Europe/Busingen" },
        { label: "Europe/Chisinau", value: "Europe/Chisinau" },
        { label: "Europe/Copenhagen", value: "Europe/Copenhagen" },
        { label: "Europe/Dublin", value: "Europe/Dublin" },
        { label: "Europe/Gibraltar", value: "Europe/Gibraltar" },
        { label: "Europe/Guernsey", value: "Europe/Guernsey" },
        { label: "Europe/Helsinki", value: "Europe/Helsinki" },
        { label: "Europe/Isle_of_Man", value: "Europe/Isle_of_Man" },
        { label: "Europe/Istanbul", value: "Europe/Istanbul" },
        { label: "Europe/Jersey", value: "Europe/Jersey" },
        { label: "Europe/Kaliningrad", value: "Europe/Kaliningrad" },
        { label: "Europe/Kiev", value: "Europe/Kiev" },
        { label: "Europe/Kirov", value: "Europe/Kirov" },
        { label: "Europe/Kyiv", value: "Europe/Kyiv" },
        { label: "Europe/Lisbon", value: "Europe/Lisbon" },
        { label: "Europe/Ljubljana", value: "Europe/Ljubljana" },
        { label: "Europe/London", value: "Europe/London" },
        { label: "Europe/Luxembourg", value: "Europe/Luxembourg" },
        { label: "Europe/Madrid", value: "Europe/Madrid" },
        { label: "Europe/Malta", value: "Europe/Malta" },
        { label: "Europe/Mariehamn", value: "Europe/Mariehamn" },
        { label: "Europe/Minsk", value: "Europe/Minsk" },
        { label: "Europe/Monaco", value: "Europe/Monaco" },
        { label: "Europe/Moscow", value: "Europe/Moscow" },
        { label: "Europe/Nicosia", value: "Europe/Nicosia" },
        { label: "Europe/Oslo", value: "Europe/Oslo" },
        { label: "Europe/Paris", value: "Europe/Paris" },
        { label: "Europe/Podgorica", value: "Europe/Podgorica" },
        { label: "Europe/Prague", value: "Europe/Prague" },
        { label: "Europe/Riga", value: "Europe/Riga" },
        { label: "Europe/Rome", value: "Europe/Rome" },
        { label: "Europe/Samara", value: "Europe/Samara" },
        { label: "Europe/San_Marino", value: "Europe/San_Marino" },
        { label: "Europe/Sarajevo", value: "Europe/Sarajevo" },
        { label: "Europe/Saratov", value: "Europe/Saratov" },
        { label: "Europe/Simferopol", value: "Europe/Simferopol" },
        { label: "Europe/Skopje", value: "Europe/Skopje" },
        { label: "Europe/Sofia", value: "Europe/Sofia" },
        { label: "Europe/Stockholm", value: "Europe/Stockholm" },
        { label: "Europe/Tallinn", value: "Europe/Tallinn" },
        { label: "Europe/Tirane", value: "Europe/Tirane" },
        { label: "Europe/Tiraspol", value: "Europe/Tiraspol" },
        { label: "Europe/Ulyanovsk", value: "Europe/Ulyanovsk" },
        { label: "Europe/Uzhgorod", value: "Europe/Uzhgorod" },
        { label: "Europe/Vaduz", value: "Europe/Vaduz" },
        { label: "Europe/Vatican", value: "Europe/Vatican" },
        { label: "Europe/Vienna", value: "Europe/Vienna" },
        { label: "Europe/Vilnius", value: "Europe/Vilnius" },
        { label: "Europe/Volgograd", value: "Europe/Volgograd" },
        { label: "Europe/Warsaw", value: "Europe/Warsaw" },
        { label: "Europe/Zagreb", value: "Europe/Zagreb" },
        { label: "Europe/Zaporozhye", value: "Europe/Zaporozhye" },
        { label: "Europe/Zurich", value: "Europe/Zurich" },
        { label: "GB", value: "GB" },
        { label: "GB-Eire", value: "GB-Eire" },
        { label: "GMT", value: "GMT" },
        { label: "GMT+0", value: "GMT+0" },
        { label: "GMT-0", value: "GMT-0" },
        { label: "GMT0", value: "GMT0" },
        { label: "Greenwich", value: "Greenwich" },
        { label: "HST", value: "HST" },
        { label: "Hongkong", value: "Hongkong" },
        { label: "Iceland", value: "Iceland" },
        { label: "Indian/Antananarivo", value: "Indian/Antananarivo" },
        { label: "Indian/Chagos", value: "Indian/Chagos" },
        { label: "Indian/Christmas", value: "Indian/Christmas" },
        { label: "Indian/Cocos", value: "Indian/Cocos" },
        { label: "Indian/Comoro", value: "Indian/Comoro" },
        { label: "Indian/Kerguelen", value: "Indian/Kerguelen" },
        { label: "Indian/Mahe", value: "Indian/Mahe" },
        { label: "Indian/Maldives", value: "Indian/Maldives" },
        { label: "Indian/Mauritius", value: "Indian/Mauritius" },
        { label: "Indian/Mayotte", value: "Indian/Mayotte" },
        { label: "Indian/Reunion", value: "Indian/Reunion" },
        { label: "Iran", value: "Iran" },
        { label: "Israel", value: "Israel" },
        { label: "Jamaica", value: "Jamaica" },
        { label: "Japan", value: "Japan" },
        { label: "Kwajalein", value: "Kwajalein" },
        { label: "Libya", value: "Libya" },
        { label: "MET", value: "MET" },
        { label: "MST", value: "MST" },
        { label: "MST7MDT", value: "MST7MDT" },
        { label: "Mexico/BajaNorte", value: "Mexico/BajaNorte" },
        { label: "Mexico/BajaSur", value: "Mexico/BajaSur" },
        { label: "Mexico/General", value: "Mexico/General" },
        { label: "NZ", value: "NZ" },
        { label: "NZ-CHAT", value: "NZ-CHAT" },
        { label: "Navajo", value: "Navajo" },
        { label: "PRC", value: "PRC" },
        { label: "PST8PDT", value: "PST8PDT" },
        { label: "Pacific/Apia", value: "Pacific/Apia" },
        { label: "Pacific/Auckland", value: "Pacific/Auckland" },
        { label: "Pacific/Bougainville", value: "Pacific/Bougainville" },
        { label: "Pacific/Chatham", value: "Pacific/Chatham" },
        { label: "Pacific/Chuuk", value: "Pacific/Chuuk" },
        { label: "Pacific/Easter", value: "Pacific/Easter" },
        { label: "Pacific/Efate", value: "Pacific/Efate" },
        { label: "Pacific/Enderbury", value: "Pacific/Enderbury" },
        { label: "Pacific/Fakaofo", value: "Pacific/Fakaofo" },
        { label: "Pacific/Fiji", value: "Pacific/Fiji" },
        { label: "Pacific/Funafuti", value: "Pacific/Funafuti" },
        { label: "Pacific/Galapagos", value: "Pacific/Galapagos" },
        { label: "Pacific/Gambier", value: "Pacific/Gambier" },
        { label: "Pacific/Guadalcanal", value: "Pacific/Guadalcanal" },
        { label: "Pacific/Guam", value: "Pacific/Guam" },
        { label: "Pacific/Honolulu", value: "Pacific/Honolulu" },
        { label: "Pacific/Johnston", value: "Pacific/Johnston" },
        { label: "Pacific/Kanton", value: "Pacific/Kanton" },
        { label: "Pacific/Kiritimati", value: "Pacific/Kiritimati" },
        { label: "Pacific/Kosrae", value: "Pacific/Kosrae" },
        { label: "Pacific/Kwajalein", value: "Pacific/Kwajalein" },
        { label: "Pacific/Majuro", value: "Pacific/Majuro" },
        { label: "Pacific/Marquesas", value: "Pacific/Marquesas" },
        { label: "Pacific/Midway", value: "Pacific/Midway" },
        { label: "Pacific/Nauru", value: "Pacific/Nauru" },
        { label: "Pacific/Niue", value: "Pacific/Niue" },
        { label: "Pacific/Norfolk", value: "Pacific/Norfolk" },
        { label: "Pacific/Noumea", value: "Pacific/Noumea" },
        { label: "Pacific/Pago_Pago", value: "Pacific/Pago_Pago" },
        { label: "Pacific/Palau", value: "Pacific/Palau" },
        { label: "Pacific/Pitcairn", value: "Pacific/Pitcairn" },
        { label: "Pacific/Pohnpei", value: "Pacific/Pohnpei" },
        { label: "Pacific/Ponape", value: "Pacific/Ponape" },
        { label: "Pacific/Port_Moresby", value: "Pacific/Port_Moresby" },
        { label: "Pacific/Rarotonga", value: "Pacific/Rarotonga" },
        { label: "Pacific/Saipan", value: "Pacific/Saipan" },
        { label: "Pacific/Samoa", value: "Pacific/Samoa" },
        { label: "Pacific/Tahiti", value: "Pacific/Tahiti" },
        { label: "Pacific/Tarawa", value: "Pacific/Tarawa" },
        { label: "Pacific/Tongatapu", value: "Pacific/Tongatapu" },
        { label: "Pacific/Truk", value: "Pacific/Truk" },
        { label: "Pacific/Wake", value: "Pacific/Wake" },
        { label: "Pacific/Wallis", value: "Pacific/Wallis" },
        { label: "Pacific/Yap", value: "Pacific/Yap" },
        { label: "Poland", value: "Poland" },
        { label: "Portugal", value: "Portugal" },
        { label: "ROC", value: "ROC" },
        { label: "ROK", value: "ROK" },
        { label: "Singapore", value: "Singapore" },
        { label: "Turkey", value: "Turkey" },
        { label: "UCT", value: "UCT" },
        { label: "US/Alaska", value: "US/Alaska" },
        { label: "US/Aleutian", value: "US/Aleutian" },
        { label: "US/Arizona", value: "US/Arizona" },
        { label: "US/Central", value: "US/Central" },
        { label: "US/East-Indiana", value: "US/East-Indiana" },
        { label: "US/Eastern", value: "US/Eastern" },
        { label: "US/Hawaii", value: "US/Hawaii" },
        { label: "US/Indiana-Starke", value: "US/Indiana-Starke" },
        { label: "US/Michigan", value: "US/Michigan" },
        { label: "US/Mountain", value: "US/Mountain" },
        { label: "US/Pacific", value: "US/Pacific" },
        { label: "US/Samoa", value: "US/Samoa" },
        { label: "UTC", value: "UTC" },
        { label: "Universal", value: "Universal" },
        { label: "W-SU", value: "W-SU" },
        { label: "WET", value: "WET" },
        { label: "Zulu", value: "Zulu" }
      ]
      // default: { label: "UTC", value: "UTC" },
    },
    parse: (value) => value,
    getVisible: (input) => {
      return [
        "current_date_iso",
        "current_time_iso",
        "current_datetime_iso",
        "unix_timestamp_seconds",
        "unix_timestamp_ms",
        "day_of_week",
        "day_of_week_name",
        "week_number",
        "month_number",
        "month_name",
        "year",
        "hour",
        "minute",
        "second"
      ].includes(input.constantType);
    }
  },
  randomMin: {
    name: "Minimum",
    description: "Minimum value for random integer (inclusive)",
    validationSchema: /^-?\d+$/,
    errorMessage: "Please enter a valid integer",
    required: false,
    input: {
      type: "number",
      min: -1e3,
      max: 999,
      default: 1
    },
    parse: (value) => parseInt(value, 10),
    getVisible: (input) => {
      return input.constantType === "random_integer";
    }
  },
  randomMax: {
    name: "Maximum",
    description: "Maximum value for random integer (inclusive)",
    validationSchema: /^-?\d+$/,
    errorMessage: "Please enter a valid integer",
    required: false,
    input: {
      type: "number",
      min: -999,
      max: 1e3,
      default: 100
    },
    parse: (value) => parseInt(value, 10),
    getVisible: (input) => {
      return input.constantType === "random_integer";
    }
  }
}, "outputSchema": {
  value: {
    name: "Value",
    description: "The constant value",
    example: "2023-05-17T10:30:00.000Z",
    validator: () => true,
    required: true
  }
}, "groups": ["Utilities"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_lead_service_titan.ts
var node19 = { "name": "Get Lead Service Titan", "id": "get_lead_service_titan", "descripition": "Get details of a specific lead from ServiceTitan", "inputSchema": {
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead (optional)",
    required: false,
    validationSchema: /^\d+$/,
    errorMessage: "Customer ID must be a number",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  leadId: {
    name: "Lead ID",
    description: "The ID of the lead to retrieve (optional)",
    required: false,
    validationSchema: /^\d+$/,
    errorMessage: "Lead ID must be a number",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  phone: {
    name: "Phone",
    description: "The phone number of the lead to retrieve (optional)",
    required: false,
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Phone must be a valid phone number",
    input: {
      type: "text"
    },
    parse: (value) => value.trim()
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the lead",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  status: {
    name: "Status",
    description: "The status of the lead",
    example: "New",
    validator: (value) => typeof value === "string"
  },
  priority: {
    name: "Priority",
    description: "The priority of the lead",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead",
    example: 456,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the lead",
    example: 789,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the lead",
    example: 101,
    validator: (value) => typeof value === "number" || value === null
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type associated with the lead",
    example: 202,
    validator: (value) => typeof value === "number" || value === null
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the lead",
    example: 303,
    validator: (value) => typeof value === "number"
  },
  followUpDate: {
    name: "Follow Up Date",
    description: "The follow-up date for the lead",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the lead",
    example: 404,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the lead was created",
    example: "2023-10-01T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the lead was last modified",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "The tag type IDs associated with the lead",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number") || value === null
  },
  dismissingReasonId: {
    name: "Dismissing Reason ID",
    description: "The ID of the reason for dismissing the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the lead",
    example: "Customer interested in HVAC services.",
    validator: (value) => typeof value === "string" || value === null
  },
  callReasonId: {
    name: "Call Reason ID",
    description: "The ID of the reason for the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  callId: {
    name: "Call ID",
    description: "The ID of the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  manualCallId: {
    name: "Manual Call ID",
    description: "The ID of the manual call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  leadUrl: {
    name: "Lead URL",
    description: "The URL of the lead in ServiceTitan",
    example: "https://app.servicetitan.com/leads/123",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCustomerName: {
    name: "Lead Customer Name",
    description: "The name of the customer associated with the lead",
    example: "Jane Smith",
    validator: (value) => typeof value === "string" || value === null
  },
  leadPhone: {
    name: "Lead Phone",
    description: "The phone number of the lead",
    example: "555-123-4567",
    validator: (value) => typeof value === "string" || value === null
  },
  leadEmail: {
    name: "Lead Email",
    description: "The email address of the lead",
    example: "johndoe@email.com",
    validator: (value) => typeof value === "string" || value === null
  },
  leadStreet: {
    name: "Lead Street",
    description: "The street address of the lead",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  leadUnit: {
    name: "Lead Unit",
    description: "The unit or apartment number of the lead",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCity: {
    name: "Lead City",
    description: "The city of the lead",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  leadState: {
    name: "Lead State",
    description: "The state of the lead",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  leadZip: {
    name: "Lead ZIP Code",
    description: "The ZIP code of the lead",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCountry: {
    name: "Lead Country",
    description: "The country of the lead",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Leads"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_live_staging_leads.ts
var node20 = { "name": "Get Live Staging Leads", "id": "get_live_staging_leads", "descripition": "A description for GetLiveStagingLeads", "inputSchema": {
  type: {
    name: "Lead Type",
    description: "Type of leads to retrieve",
    validationSchema: /^(City|ZipCode)$/,
    errorMessage: "Please select a valid lead type",
    required: true,
    getVisible: void 0,
    input: {
      type: "select",
      options: [
        { label: "City", value: "City" },
        { label: "Zip Code", value: "ZipCode" }
      ],
      default: { label: "City", value: "City" }
    },
    parse: function(value) {
      if (value === "City" || value === "ZipCode") {
        return value;
      }
      return "City";
    }
  },
  cities: {
    name: "Cities",
    description: "List of cities to filter leads by, seperated by commas",
    validationSchema: /^.*$/,
    errorMessage: "Invalid cities format",
    required: false,
    getVisible: (data) => data.type === "City",
    input: {
      type: "text"
    },
    parse: function(value) {
      return value.split(",").map((city) => city.trim()).map((city) => city.toUpperCase());
    }
  },
  zipCodes: {
    name: "Zip Codes",
    description: "Zip Codes to filter leads by, seperated by commas",
    validationSchema: /^(\d{5})(,\s*\d{5})*$/,
    errorMessage: "Invalid zip codes format",
    required: false,
    getVisible: (data) => data.type === "ZipCode",
    input: {
      type: "text"
    },
    parse: function(value) {
      return value.split(",").map((zip) => zip.trim());
    }
  },
  category: {
    name: "Category",
    description: "Lead category to filter by",
    validationSchema: /^.*$/,
    errorMessage: "Invalid category format",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "New Movers", value: "NEW_MOVERS" },
        { label: "Pre Movers", value: "PRE_MOVERS" },
        { label: "New Home Owners", value: "NEW_HOME_OWNERS" },
        { label: "New Parents", value: "NEW_PARENTS" },
        { label: "New Married", value: "NEW_MARRIED" }
      ],
      default: { label: "New Movers", value: "NEW_MOVERS" }
    },
    parse: function(value) {
      if ([
        "NEW_MOVERS",
        "PRE_MOVERS",
        "NEW_HOME_OWNERS",
        "NEW_PARENTS",
        "NEW_MARRIED"
      ].includes(value)) {
        return value;
      }
      return "NEW_MOVERS";
    }
  },
  maxLeads: {
    name: "Max Leads",
    description: "Maximum number of leads to retrieve",
    validationSchema: /^\d+$/,
    errorMessage: "Please enter a valid number less than or equal to 1000",
    required: false,
    input: {
      type: "number",
      min: 1,
      max: 1e3,
      step: 1,
      default: 100
    },
    parse: function(value) {
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? 100 : parsed;
    }
  }
}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex2.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Lead Generation", "Data Enrichment", "Trigger"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/get_s_m_s_campaign_messages.ts
var node21 = { "name": "Get SMS Campaign Messages", "id": "get_s_m_s_campaign_messages", "descripition": "Retrieves all messages from a specific SMS campaign by campaign ID", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "Phone number to retrieve SMS campaign messages for",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please provide a valid phone number",
    required: true,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  messages: {
    name: "",
    description: "",
    example: [],
    validator: function(value) {
      return Array.isArray(value);
    }
  }
}, "groups": ["Communication", "SMS", "Data"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_service_titan_recurring_service_estimates.ts
var node22 = { "name": "Get Service Titan Recurring Service Estimates", "id": "get_service_titan_recurring_service_estimates", "descripition": "A description for GetServiceTitanRecurringServiceEstimates", "inputSchema": {}, "outputSchema": {}, "groups": ["ServiceTitan"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_service_titan_accounts_receievables.ts
var node23 = { "name": "Get Service Titan Unpaid Invoices", "id": "get_service_titan_accounts_receievables", "descripition": "Retrieves unpaid invoices from ServiceTitan that are past a specified number of days due.", "inputSchema": {
  daysPastDue: {
    name: "Days Past Due",
    description: "Number of days an invoice is past due",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Days Past Due must be a valid number",
    input: {
      type: "number",
      max: 2147483647,
      min: 0
    },
    parse: (value) => parseInt(value, 10)
  }
  // checkEveryNDays: {
  //   name: "Check Every N Days",
  //   description: "Frequency in days to check for unpaid invoices",
  //   required: true,
  //   validationSchema: /^\d+$/,
  //   errorMessage: "Check Every N Days must be a valid number",
  //   input: {
  //     type: "number",
  //     max: 2147483647,
  //     min: 1,
  //   },
  //   parse: (value: string) => parseInt(value, 10),
  // },
}, "outputSchema": {
  invoiceId: {
    name: "Invoice ID",
    description: "The ID of the unpaid invoice",
    example: "INV12345",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the invoice",
    example: "CUST67890",
    validator: (value) => typeof value === "string"
  },
  amountDue: {
    name: "Amount Due",
    description: "The total amount due on the invoice",
    example: 250.75,
    validator: (value) => typeof value === "number"
  },
  dueDate: {
    name: "Due Date",
    description: "The due date of the invoice",
    example: "2024-12-31",
    validator: (value) => typeof value === "string"
  },
  jobDescription: {
    name: "Job Description",
    description: "Description of the job associated with the invoice",
    example: "We went to the customer's location to fix the plumbing issue.",
    validator: (value) => typeof value === "string"
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the invoice",
    example: "BU123",
    validator: (value) => typeof value === "string"
  },
  employeeId: {
    name: "Employee ID",
    description: "The ID of the employee who created the invoice",
    example: "EMP456",
    validator: (value) => typeof value === "string"
  },
  itemsDescription: {
    name: "Items Description",
    description: "Description of the items or services on the invoice",
    example: "Plumbing repair, parts replacement",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["ServiceTitan"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/get_tags.ts
var node24 = { "name": "Get Tags", "id": "get_tags", "descripition": "Retrieves all tags associated with a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  tags: {
    name: "Tags",
    description: "List of tags associated with the lead",
    example: [],
    validator: function(value) {
      return Array.isArray(value);
    }
  }
}, "groups": ["Data", "Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_unassigned_recurring_events.ts
var node25 = { "name": "Get Unassigned Recurring Events", "id": "get_unassigned_recurring_events", "descripition": "A description for GetUnassignedRecurringServiceEvents", "inputSchema": {
  nextNDays: {
    name: "Next N Days",
    description: "Number of days ahead to look for unassigned events",
    validationSchema: /^\d+$/,
    errorMessage: "Please enter a valid number of days.",
    input: {
      type: "number",
      min: 1,
      max: 365
    },
    parse: function(value) {
      return parseInt(value, 10);
    },
    required: true
  }
}, "outputSchema": {
  eventId: {
    name: "Event ID",
    description: "The unique identifier for the event",
    example: "evt_1234567890",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  serviceId: {
    name: "Service ID",
    description: "The unique identifier for the service",
    example: "svc_0987654321",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  serviceName: {
    name: "Service Name",
    description: "The name of the service",
    example: "Weekly Cleaning",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  eventName: {
    name: "Event Name",
    description: "The name of the event",
    example: "Monday Morning Clean",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  date: {
    name: "Date",
    description: "The date of the event",
    example: "2024-07-01T10:00:00Z",
    validator: function(value) {
      return !isNaN(Date.parse(value));
    }
  },
  memo: {
    name: "Memo",
    description: "Additional notes for the event",
    example: "Client prefers eco-friendly products",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  jobSummary: {
    name: "Job Summary",
    description: "A brief summary of the job to be performed",
    example: "Clean kitchen, bathrooms, and living room",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  address: {
    name: "Address",
    description: "The address where the service will be performed",
    example: "123 Main St, Anytown, USA",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  customerId: {
    name: "Customer ID",
    description: "The unique identifier for the customer",
    example: "cust_1122334455",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/get_uploaded_leads_trigger.ts
var node26 = { "name": "Get Uploaded Leads Trigger", "id": "get_uploaded_leads_trigger", "descripition": "Triggers a workflow when new leads are uploaded, with options for scheduling and limiting the number of leads", "inputSchema": {
  numLeadsToFetch: {
    name: "Number of Leads to Fetch",
    description: "The maximum number of leads to fetch at once",
    validationSchema: /^[1-9][0-9]*$/,
    errorMessage: "Must be a positive integer",
    required: true,
    input: {
      type: "number",
      min: 1,
      max: 1e3
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  startHour: {
    name: "Start Hour",
    description: "The hour to start fetching leads (0-23)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Must be a number between 0 and 23",
    required: true,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  endHour: {
    name: "End Hour",
    description: "The hour to stop fetching leads (0-23)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Must be a number between 0 and 23",
    required: true,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  daysOfWeek: {
    name: "Days of Week",
    description: "Days to fetch leads (0=Sunday to 6=Saturday)",
    validationSchema: /.*/,
    errorMessage: "Must be a valid JSON array of numbers between 0 and 6",
    required: true,
    input: {
      type: "multiselect",
      options: [
        { label: "Sunday", value: "0" },
        { label: "Monday", value: "1" },
        { label: "Tuesday", value: "2" },
        { label: "Wednesday", value: "3" },
        { label: "Thursday", value: "4" },
        { label: "Friday", value: "5" },
        { label: "Saturday", value: "6" }
      ]
    },
    parse: function(value) {
      console.log("Parsing daysOfWeek:", value);
      const parsed = JSON.parse(value).map((num) => Number(num));
      console.log("Parsed daysOfWeek:", parsed);
      return parsed;
    }
  }
}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex2.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Data", "Lead Management"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/get_variable.ts
var node27 = { "name": "Get Variable", "id": "get_variable", "descripition": "Gets the value of a stored variable", "inputSchema": {
  uniqueKey: {
    name: "Unique Key",
    description: "A unique key to identify the variable across different workflow runs. For example, if you use {{phone number}} variable of a lead as the unique key, the variable will be unique per phone number.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid unique key",
    required: true,
    input: {
      type: "text",
      placeholder: "myUniqueKey"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableName: {
    name: "Variable Name",
    description: "The name of the variable to get",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid variable name",
    required: true,
    input: {
      type: "text",
      placeholder: "myVariable"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  defaultValue: {
    name: "Default Value",
    description: "Default value if the variable doesn't exist",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid default value",
    required: false,
    input: {
      type: "text",
      placeholder: "defaultValue"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {
  variableValue: {
    name: "Variable Value",
    description: "The value of the variable",
    example: "Some value",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Variables", "Control Flow"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/housecall_v1_api_book_estimate.ts
var node28 = { "name": "Book Estimate", "id": "housecall_v1_api_book_estimate", "descripition": "Create and schedule an estimate with required last name, free estimate line item, bookable employees, and call summary note.", "inputSchema": {
  callSummary: {
    name: "call_summary",
    description: "A Detailed summary of what was discussed during the call",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  description: {
    name: "description",
    description: "Short description",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  endTime: {
    name: "end_time",
    description: "End time (ISO8601 EST 2hr block)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startTime: {
    name: "start_time",
    description: "Start time (ISO8601 EST 2hr block)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  country: {
    name: "country",
    description: "Country code",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  zip: {
    name: "zip",
    description: "Postal code",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  state: {
    name: "state",
    description: "State/Province",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  city: {
    name: "city",
    description: "City",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  street: {
    name: "street",
    description: "Street address",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  lastName: {
    name: "last_name",
    description: "Last name (required)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstName: {
    name: "first_name",
    description: "First name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Customer phone",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Book Estimate from API Housecall v1 API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Housecall v1 API", "Book Estimate"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/housecall_v1_api_find_or_create_customer.ts
var node29 = { "name": "Find Or Create Customer", "id": "housecall_v1_api_find_or_create_customer", "descripition": "Lookup by phone and create if not found (returns the single customer record).", "inputSchema": {
  lastName: {
    name: "last_name",
    description: "Optional last name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstName: {
    name: "first_name",
    description: "Optional first name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Customer phone number",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Find Or Create Customer from API Housecall v1 API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Housecall v1 API", "Find Or Create Customer"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/housecall_v1_api_get_customer.ts
var node30 = { "name": "Get Customer", "id": "housecall_v1_api_get_customer", "descripition": "Retrieve a customer by ID from Housecall.", "inputSchema": {
  id: {
    name: "id",
    description: "The UUID of the customer to retrieve",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Customer from API Housecall v1 API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Housecall v1 API", "Get Customer"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/housecall_v1_api_list_available_estimate_slots.ts
var node31 = { "name": "List Available Estimate Slots", "id": "housecall_v1_api_list_available_estimate_slots", "descripition": "Return available estimate slots for the given date with bookable employees.", "inputSchema": {
  date: {
    name: "date",
    description: "Date (YYYY-MM-DD) in EST",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool List Available Estimate Slots from API Housecall v1 API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Housecall v1 API", "List Available Estimate Slots"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/housecall_v1_api_search_customers_by_phone.ts
var node32 = { "name": "Search Customers By Phone", "id": "housecall_v1_api_search_customers_by_phone", "descripition": "Find existing customers using a phone number provided during the call.", "inputSchema": {
  phone: {
    name: "phone",
    description: "Phone number (partial or full) used to search",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Search Customers By Phone from API Housecall v1 API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Housecall v1 API", "Search Customers By Phone"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_book_meeting.ts
var node33 = { "name": "Book Meeting", "id": "hubspot_crm_api_book_meeting", "descripition": "Book a meeting using a scheduling page.", "inputSchema": {
  locale: {
    name: "locale",
    description: "Locale (e.g., 'en-us')",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  guestEmails: {
    name: "guestEmails",
    description: "Additional guest emails",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  timezone: {
    name: "timezone",
    description: "Timezone",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  duration: {
    name: "duration",
    description: "Duration in milliseconds",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startTime: {
    name: "startTime",
    description: "Start time in milliseconds (UTC)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Attendee email",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  lastName: {
    name: "lastName",
    description: "Attendee last name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstName: {
    name: "firstName",
    description: "Attendee first name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Book Meeting from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Book Meeting"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_book_meeting_slot.ts
var node34 = { "name": "Book Meeting Slot", "id": "hubspot_crm_api_book_meeting_slot", "descripition": "Book a meeting using a time slot ID from the availability results.", "inputSchema": {
  locale: {
    name: "locale",
    description: "Locale (e.g., 'en-us')",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  timezone: {
    name: "timezone",
    description: "Timezone",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Attendee email",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  lastName: {
    name: "lastName",
    description: "Attendee last name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstName: {
    name: "firstName",
    description: "Attendee first name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  timeSlotId: {
    name: "timeSlotId",
    description: "Time slot ID from availability results",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Book Meeting Slot from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Book Meeting Slot"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_create_crm_meeting.ts
var node35 = { "name": "Create CRM Meeting", "id": "hubspot_crm_api_create_crm_meeting", "descripition": "Create a meeting engagement in HubSpot CRM (not for scheduling).", "inputSchema": {
  contactIds: {
    name: "contactIds",
    description: "Contact IDs to associate",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  location: {
    name: "location",
    description: "Meeting location",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  description: {
    name: "description",
    description: "Meeting description",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  endTime: {
    name: "endTime",
    description: "Meeting end time (ISO format)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startTime: {
    name: "startTime",
    description: "Meeting start time (ISO format)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  subject: {
    name: "subject",
    description: "Meeting subject/title",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create CRM Meeting from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Create CRM Meeting"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_create_contact.ts
var node36 = { "name": "Create Contact", "id": "hubspot_crm_api_create_contact", "descripition": "Create a new contact in HubSpot CRM with contact information.", "inputSchema": {
  jobtitle: {
    name: "jobtitle",
    description: "Contact's job title",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  company: {
    name: "company",
    description: "Contact's company name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Contact's phone number",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  lastname: {
    name: "lastname",
    description: "Contact's last name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstname: {
    name: "firstname",
    description: "Contact's first name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Contact's email address",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create Contact from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Create Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_create_meeting.ts
var node37 = { "name": "Create Meeting", "id": "hubspot_crm_api_create_meeting", "descripition": "Create a new meeting/appointment in HubSpot.", "inputSchema": {
  contactIds: {
    name: "contactIds",
    description: "Contact IDs to associate with meeting",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  location: {
    name: "location",
    description: "Meeting location",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  description: {
    name: "description",
    description: "Meeting description",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  endTime: {
    name: "endTime",
    description: "Meeting end time (ISO format)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startTime: {
    name: "startTime",
    description: "Meeting start time (ISO format)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  subject: {
    name: "subject",
    description: "Meeting subject/title",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create Meeting from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Create Meeting"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_create_note.ts
var node38 = { "name": "Create Note", "id": "hubspot_crm_api_create_note", "descripition": "Create a note in HubSpot and associate it with contacts.", "inputSchema": {
  contactIds: {
    name: "contactIds",
    description: "Contact IDs to associate with",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  noteBody: {
    name: "noteBody",
    description: "Content of the note",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create Note from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Create Note"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_get_available_time_slots.ts
var node39 = { "name": "Get Available Time Slots", "id": "hubspot_crm_api_get_available_time_slots", "descripition": "Get human-readable available time slots for booking meetings.", "inputSchema": {
  days: {
    name: "days",
    description: "Number of days to look ahead (default: 14)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  timezone: {
    name: "timezone",
    description: "Timezone (e.g., 'America/New_York')",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Available Time Slots from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Get Available Time Slots"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_get_crm_meeting.ts
var node40 = { "name": "Get CRM Meeting", "id": "hubspot_crm_api_get_crm_meeting", "descripition": "Retrieve a CRM meeting engagement by ID.", "inputSchema": {
  meetingId: {
    name: "meetingId",
    description: "HubSpot meeting ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get CRM Meeting from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Get CRM Meeting"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_get_contact.ts
var node41 = { "name": "Get Contact", "id": "hubspot_crm_api_get_contact", "descripition": "Retrieve a contact by ID or email from HubSpot.", "inputSchema": {
  email: {
    name: "email",
    description: "Contact's email address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  contactId: {
    name: "contactId",
    description: "HubSpot contact ID",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Contact from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Get Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_get_meeting.ts
var node42 = { "name": "Get Meeting", "id": "hubspot_crm_api_get_meeting", "descripition": "Retrieve a meeting by ID from HubSpot.", "inputSchema": {
  meetingId: {
    name: "meetingId",
    description: "HubSpot meeting ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Meeting from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Get Meeting"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_get_meeting_availability.ts
var node43 = { "name": "Get Meeting Availability", "id": "hubspot_crm_api_get_meeting_availability", "descripition": "Get availability page for a meeting link.", "inputSchema": {
  timezone: {
    name: "timezone",
    description: "Timezone",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Meeting Availability from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Get Meeting Availability"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_get_meeting_booking_info.ts
var node44 = { "name": "Get Meeting Booking Info", "id": "hubspot_crm_api_get_meeting_booking_info", "descripition": "Get booking information and availability for a meeting link.", "inputSchema": {
  monthOffset: {
    name: "monthOffset",
    description: "Months forward from current month",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  timezone: {
    name: "timezone",
    description: "Timezone (e.g., 'America/New_York') MUST BE IN PROPER TZ DATABASE FORMAT",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Meeting Booking Info from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Get Meeting Booking Info"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_search_crm_meetings.ts
var node45 = { "name": "Search CRM Meetings", "id": "hubspot_crm_api_search_crm_meetings", "descripition": "Search for CRM meeting engagements by criteria.", "inputSchema": {
  limit: {
    name: "limit",
    description: "Maximum number of results",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  endDate: {
    name: "endDate",
    description: "Search to end date (YYYY-MM-DD)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startDate: {
    name: "startDate",
    description: "Search from start date (YYYY-MM-DD)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  subject: {
    name: "subject",
    description: "Search by meeting subject",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Search CRM Meetings from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Search CRM Meetings"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_search_contacts.ts
var node46 = { "name": "Search Contacts", "id": "hubspot_crm_api_search_contacts", "descripition": "Search for contacts in HubSpot using various criteria.", "inputSchema": {
  limit: {
    name: "limit",
    description: "Maximum number of results",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Search by phone number",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  lastname: {
    name: "lastname",
    description: "Search by last name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstname: {
    name: "firstname",
    description: "Search by first name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Search by email",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Search Contacts from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Search Contacts"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_search_meetings.ts
var node47 = { "name": "Search Meetings", "id": "hubspot_crm_api_search_meetings", "descripition": "Search for meetings in HubSpot by various criteria.", "inputSchema": {
  limit: {
    name: "limit",
    description: "Maximum number of results",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  endDate: {
    name: "endDate",
    description: "Search to end date (YYYY-MM-DD)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startDate: {
    name: "startDate",
    description: "Search from start date (YYYY-MM-DD)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  subject: {
    name: "subject",
    description: "Search by meeting subject",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Search Meetings from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Search Meetings"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_test_connection.ts
var node48 = { "name": "Test Connection", "id": "hubspot_crm_api_test_connection", "descripition": "Test the HubSpot API connection and authentication.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Test Connection from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Test Connection"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_update_crm_meeting.ts
var node49 = { "name": "Update CRM Meeting", "id": "hubspot_crm_api_update_crm_meeting", "descripition": "Update an existing CRM meeting engagement.", "inputSchema": {
  location: {
    name: "location",
    description: "Meeting location",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  description: {
    name: "description",
    description: "Meeting description",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  endTime: {
    name: "endTime",
    description: "Meeting end time (ISO format)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startTime: {
    name: "startTime",
    description: "Meeting start time (ISO format)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  subject: {
    name: "subject",
    description: "Meeting subject/title",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  meetingId: {
    name: "meetingId",
    description: "HubSpot meeting ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update CRM Meeting from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Update CRM Meeting"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/hubspot_crm_api_update_meeting.ts
var node50 = { "name": "Update Meeting", "id": "hubspot_crm_api_update_meeting", "descripition": "Update an existing meeting in HubSpot.", "inputSchema": {
  location: {
    name: "location",
    description: "Meeting location",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  description: {
    name: "description",
    description: "Meeting description",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  endTime: {
    name: "endTime",
    description: "Meeting end time (ISO format)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  startTime: {
    name: "startTime",
    description: "Meeting start time (ISO format)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  subject: {
    name: "subject",
    description: "Meeting subject/title",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  meetingId: {
    name: "meetingId",
    description: "HubSpot meeting ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Meeting from API HubSpot CRM API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["HubSpot CRM API", "Update Meeting"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/inbound_call_trigger.ts
var node51 = { "name": "Inbound Call Trigger", "id": "inbound_call_trigger", "descripition": "Triggers a workflow when an inbound call is received, providing caller details and call transcription", "inputSchema": {}, "outputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number of the inbound caller",
    example: "+14155552671",
    validator: function(value) {
      return /^\+[0-9]{10,15}$/.test(value);
    }
  },
  transcription: {
    name: "Call Transcription",
    description: "The transcribed text from the inbound call",
    example: "Hello, I'm calling about your services.",
    validator: function(value) {
      return value.trim().length > 0 && value.length <= 1e4;
    }
  },
  recordingUrl: {
    name: "Recording URL",
    description: "URL to access the call recording",
    example: "https://example.com/recordings/call12345.mp3",
    validator: function(value) {
      return /^https?:\/\/[^\s$.?#].[^\s]*$/.test(value);
    }
  }
}, "groups": ["Triggers", "Communication", "Phone"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/is_public_holiday.ts
var node52 = { "name": "Is Public Holiday", "id": "is_public_holiday", "descripition": "Check if current date is a public holiday in the US", "inputSchema": {
  holidays: {
    name: "Holidays",
    description: "List of public holidays in the US",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid list of holidays",
    required: true,
    input: {
      type: "multiselect",
      options: [
        { label: "New Year's Day", value: "new_years_day" },
        { label: "Independence Day", value: "independence_day" },
        { label: "Labor Day", value: "labor_day" },
        { label: "Thanksgiving Day", value: "thanksgiving" },
        { label: "Christmas", value: "christmas" }
      ]
    },
    parse: function(value) {
      console.log("Parsing holidays:", value);
      const parsed = JSON.parse(value);
      console.log("Parsed holidays:", parsed);
      return parsed;
    }
  },
  timeZone: {
    name: "Time Zone",
    description: "Time zone for the date",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid time zone",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Eastern Time", value: "America/New_York" },
        { label: "Central Time", value: "America/Chicago" },
        { label: "Mountain Time", value: "America/Denver" },
        { label: "Mountain Time (No DST)", value: "America/Phoenix" },
        { label: "Pacific Time", value: "America/Los_Angeles" }
      ]
    },
    parse: function(value) {
      console.log("Parsing time zone:", value);
      if ([
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Phoenix",
        "America/Los_Angeles"
      ].includes(value)) {
        return value;
      }
      throw new Error("Invalid time zone");
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Indicates if the date is a public holiday",
    required: true,
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": [], "branches": { "match": { "name": "Match", "description": "Condition matched", "id": "match" }, "no_match": { "name": "No Match", "description": "Condition did not match", "id": "no_match" } }, "isTriggerNode": false, "cost": 0 };

// src/make_call.ts
var node53 = { "name": "Make Call", "id": "make_call", "descripition": "Places an outbound phone call to the specified number with customizable script and voice options", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to call in E.164 format (e.g., +15551234567)",
    validationSchema: /^\+[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format (e.g., +15551234567)",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  agentId: {
    name: "Agent",
    description: "The agent who will handle the call",
    validationSchema: /.*/,
    errorMessage: "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: true,
    input: {
      type: "custom",
      tag: "agent-selector",
      options: {
        allowCreate: true
      }
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phoneNumberSource: {
    name: "Phone Number Source",
    description: "The source of the phone number to use for the outbound call",
    validationSchema: /^(og-pool|bought-random|bought-specific)$/,
    errorMessage: "Phone number source must be one of: og-pool, bought-random, bought-specific",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Pool of Outreachgenius Numbers", value: "og-pool" },
        { label: "Bought Random", value: "bought-random" },
        { label: "Bought Specific", value: "bought-specific" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  specificBoughtNumberId: {
    name: "Specific Bought Number ID",
    description: "The ID of the specific bought number to use if 'Bought Specific' is selected as the source",
    validationSchema: /.*/,
    errorMessage: "Specific Bought Number ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: false,
    input: {
      type: "custom",
      tag: "phone-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputs) => {
      return inputs.phoneNumberSource === "bought-specific";
    }
  },
  extraInstructions: {
    name: "Extra Instructions",
    description: "Additional instructions for the agent",
    validationSchema: /.*/,
    errorMessage: "Extra instructions must be less than 500 characters if provided",
    required: false,
    input: {
      type: "textarea",
      placeholder: "Please be polite and professional.",
      minLength: 0,
      maxLength: 5e3
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  transcription: {
    name: "Call Transcription",
    description: "The transcribed content of the call",
    example: "Hello, this is John speaking. I'm calling about...",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  callResult: {
    name: "Call Result",
    description: "The status or outcome of the call attempt",
    example: "answered",
    validator: function(value) {
      return ["answered", "no_answer", "busy", "failed"].includes(value);
    }
  },
  recordingUrl: {
    name: "Recording URL",
    description: "URL to access the call recording",
    example: "https://example.com/recordings/call12345.mp3",
    validator: function(value) {
      return typeof value === "string" && value.startsWith("http");
    }
  }
}, "groups": ["Communication", "Phone"], "branches": { "answered": { "id": "answered", "name": "Answered", "description": "Call was answered by the recipient" }, "no_answer": { "id": "no_answer", "name": "No Answer", "description": "Call was not answered after ringing" }, "busy": { "id": "busy", "name": "Busy", "description": "Recipient's line was busy" }, "failed": { "id": "failed", "name": "Failed", "description": "Call failed to connect due to technical issues" } }, "isTriggerNode": false, "cost": 0 };

// src/manual_trigger.ts
var node54 = { "name": "Manual Trigger", "id": "manual_trigger", "descripition": "A description for ManualTrigger", "inputSchema": {}, "outputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to send notifications to",
    required: false,
    example: "+1234567890",
    validator: (value) => {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      return phoneRegex.test(value);
    }
  },
  extraInfo: {
    name: "Extra Information",
    description: "Any extra information to pass along",
    required: false,
    example: "",
    validator: (value) => true
  }
}, "groups": ["Advanced", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_email_received.ts
var node55 = { "name": "Email Received", "id": "on_email_received", "descripition": "Triggers when a new email is received in the connected email account.\n It automatically extracts key information like lead's name, email, phone number, and any other fields present in the email body.", "inputSchema": {}, "outputSchema": {
  from: {
    name: "From",
    description: "The email address of the sender",
    example: "example@gmail.com",
    validator: (value) => {
      if (typeof value !== "string") return false;
      const emailRegex2 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex2.test(value);
    }
  },
  subject: {
    name: "Subject",
    description: "The subject of the email",
    example: "Meeting Reminder",
    validator: (value) => typeof value === "string"
  },
  body: {
    name: "Body",
    description: "The plain text body of the email",
    example: "Don't forget about our meeting tomorrow at 10 AM.",
    validator: (value) => typeof value === "string"
  },
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex2.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_appoinment_service_titan.ts
var node56 = { "name": "ServiceTitan New Appoinment", "id": "on_new_appoinment_service_titan", "descripition": "Triggers when a new appointment is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The appointment ID",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobId: {
    name: "Job ID",
    description: "The associated job ID",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  appointmentNumber: {
    name: "Appointment Number",
    description: "The appointment number",
    example: "APT-001",
    validator: (value) => typeof value === "string" || value === null
  },
  start: {
    name: "Start",
    description: "The start time of the appointment",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string"
  },
  end: {
    name: "End",
    description: "The end time of the appointment",
    example: "2023-10-01T11:00:00Z",
    validator: (value) => typeof value === "string"
  },
  arrivalWindowStart: {
    name: "Arrival Window Start",
    description: "The start of the arrival window",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  arrivalWindowEnd: {
    name: "Arrival Window End",
    description: "The end of the arrival window",
    example: "2023-10-01T10:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the appointment",
    example: "Scheduled",
    validator: (value) => typeof value === "string"
  },
  specialInstructions: {
    name: "Special Instructions",
    description: "Any special instructions for the appointment",
    example: "Customer prefers morning visits",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the appointment",
    example: "2023-09-25T08:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the appointment",
    example: "2023-09-26T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the associated customer",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  unused: {
    name: "Unused",
    description: "Indicates if the appointment is unused",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the appointment",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  isConfirmed: {
    name: "Is Confirmed",
    description: "Indicates if the appointment is confirmed",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_call_service_titan.ts
var node57 = { "name": "ServiceTitan New Call", "id": "on_new_call_service_titan", "descripition": "Triggers when a new call is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  createdOn: {
    name: "Created On",
    description: "The date and time when the call was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  active: {
    name: "Active",
    description: "Indicates if the call is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  id: {
    name: "ID",
    description: "The unique identifier for the call",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  receivedOn: {
    name: "Received On",
    description: "The date and time when the call was received",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  duration: {
    name: "Duration",
    description: "The duration of the call",
    example: "00:05:30",
    validator: (value) => true
  },
  from: {
    name: "From",
    description: "The caller's phone number",
    example: "+1234567890",
    validator: (value) => typeof value === "string"
  },
  to: {
    name: "To",
    description: "The recipient's phone number",
    example: "+0987654321",
    validator: (value) => typeof value === "string"
  },
  direction: {
    name: "Direction",
    description: "The direction of the call (inbound/outbound)",
    example: "inbound",
    validator: (value) => typeof value === "string"
  },
  callType: {
    name: "Call Type",
    description: "The type of the call",
    example: null,
    validator: (value) => typeof value === "string" || value === null
  },
  reasonId: {
    name: "Reason ID",
    description: "The ID of the reason for the call",
    example: 1,
    validator: (value) => typeof value === "number"
  },
  reasonName: {
    name: "Reason Name",
    description: "The name of the reason for the call",
    example: "General Inquiry",
    validator: (value) => typeof value === "string"
  },
  reasonLead: {
    name: "Reason Lead",
    description: "Indicates if the reason is a lead",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  reasonActive: {
    name: "Reason Active",
    description: "Indicates if the reason is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  recordingUrl: {
    name: "Recording URL",
    description: "The URL of the call recording",
    example: "https://example.com/recording.mp3",
    validator: (value) => typeof value === "string"
  },
  voiceMailUrl: {
    name: "Voice Mail URL",
    description: "The URL of the voicemail",
    example: "https://example.com/voicemail.mp3",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the call record",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  createdByName: {
    name: "Created By Name",
    description: "The name of the user who created the call record",
    example: "John Doe",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the associated customer",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the associated customer",
    example: "Acme Corp",
    validator: (value) => typeof value === "string"
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the associated campaign",
    example: 98765,
    validator: (value) => typeof value === "number"
  },
  campaignName: {
    name: "Campaign Name",
    description: "The name of the associated campaign",
    example: "Spring Sale",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the call record was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
  },
  agentId: {
    name: "Agent ID",
    description: "The ID of the agent who handled the call",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  agentName: {
    name: "Agent Name",
    description: "The name of the agent who handled the call",
    example: "Jane Smith",
    validator: (value) => typeof value === "string"
  },
  agentExternalId: {
    name: "Agent External ID",
    description: "The external ID of the agent",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  sid: {
    name: "SID",
    description: "The SID of the call",
    example: null,
    validator: (value) => typeof value === "string" || value === null
  },
  tags: {
    name: "Tags",
    description: "Tags associated with the call",
    example: ["important", "follow-up"],
    validator: (value) => Array.isArray(value) || value === null || typeof value === "string" && value.length === 0
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_customer_service_titan.ts
var node58 = { "name": "ServiceTitan New Customer", "id": "on_new_customer_service_titan", "descripition": "Triggers when a new customer is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the customer",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  active: {
    name: "Active",
    description: "Indicates if the customer is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  name: {
    name: "Name",
    description: "The full name of the customer",
    example: "John Doe",
    validator: (value) => typeof value === "string"
  },
  type: {
    name: "Type",
    description: "The type of customer (e.g., Residential, Commercial)",
    example: "Residential",
    validator: (value) => typeof value === "string"
  },
  streetAddress: {
    name: "Street Address",
    description: "The street address of the customer",
    example: "123 Main St",
    validator: (value) => typeof value === "string"
  },
  unit: {
    name: "Unit",
    description: "The unit or apartment number of the customer",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null || value === void 0
  },
  city: {
    name: "City",
    description: "The city of the customer's address",
    example: "Springfield",
    validator: (value) => typeof value === "string"
  },
  state: {
    name: "State",
    description: "The state of the customer's address",
    example: "IL",
    validator: (value) => typeof value === "string"
  },
  zip: {
    name: "ZIP Code",
    description: "The ZIP code of the customer's address",
    example: "62704",
    validator: (value) => typeof value === "string"
  },
  country: {
    name: "Country",
    description: "The country of the customer's address",
    example: "USA",
    validator: (value) => typeof value === "string"
  },
  latitude: {
    name: "Latitude",
    description: "The latitude of the customer's location",
    example: 39.7817,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  longitude: {
    name: "Longitude",
    description: "The longitude of the customer's location",
    example: -89.6501,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the customer",
    example: [
      { typeId: 1, name: "Preferred Contact Method", value: "Email" }
    ],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.typeId === "number" && (typeof item.name === "string" || item.name === null || item.name === void 0) && (typeof item.value === "string" || item.value === null || item.value === void 0)
    )
  },
  balance: {
    name: "Balance",
    description: "The current balance of the customer account",
    example: 150.75,
    validator: (value) => typeof value === "number"
  },
  taxExempt: {
    name: "Tax Exempt",
    description: "Indicates if the customer is tax exempt",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "List of tag type IDs associated with the customer",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  doNotMail: {
    name: "Do Not Mail",
    description: "Indicates if the customer has opted out of mailings",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  doNotService: {
    name: "Do Not Service",
    description: "Indicates if the customer should not be serviced",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the customer record",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the customer record",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the customer record",
    example: "2023-10-05T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  mergedToId: {
    name: "Merged To ID",
    description: "The ID of the customer record this one was merged into, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  externalData: {
    name: "External Data",
    description: "External data key-value pairs associated with the customer",
    example: [{ key: "CRM_ID", value: "C12345" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.key === "string" && typeof item.value === "string"
    )
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_estimate_service_titan.ts
var node59 = { "name": "ServiceTitan New Estimate", "id": "on_new_estimate_service_titan", "descripition": "Triggers when a new estimate is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the estimate",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobId: {
    name: "Job ID",
    description: "The ID of the job associated with the estimate, if any",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  projectId: {
    name: "Project ID",
    description: "The ID of the project associated with the estimate, if any",
    example: 54321,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the estimate, if any",
    example: 98765,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the estimate, if any",
    example: 11223,
    validator: (value) => typeof value === "number" || value === null
  },
  name: {
    name: "Name",
    description: "The name of the estimate",
    example: "Estimate for AC Repair",
    validator: (value) => typeof value === "string" || value === null
  },
  jobNumber: {
    name: "Job Number",
    description: "The job number associated with the estimate, if any",
    example: "JOB-001",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the estimate",
    example: { value: 1, name: "Draft" },
    validator: (value) => typeof value === "object" || value === null
  },
  reviewStatus: {
    name: "Review Status",
    description: "The review status of the estimate",
    example: "NeedsApproval",
    validator: (value) => ["None", "NeedsApproval", "Approved", "NotApproved"].includes(value) || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the estimate",
    example: "This estimate covers the cost of AC repair.",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the estimate was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the estimate was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
  },
  soldOn: {
    name: "Sold On",
    description: "The date and time when the estimate was sold, if applicable",
    example: "2023-10-07T09:00:00.000Z",
    validator: (value) => typeof value === "string" || value === null
  },
  soldBy: {
    name: "Sold By",
    description: "The ID of the user who sold the estimate, if applicable",
    example: 33445,
    validator: (value) => typeof value === "number" || value === null
  },
  active: {
    name: "Active",
    description: "Indicates whether the estimate is active or has been archived",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  subtotal: {
    name: "Subtotal",
    description: "The subtotal amount of the estimate",
    example: 1500.75,
    validator: (value) => typeof value === "number"
  },
  tax: {
    name: "Tax",
    description: "The tax amount applied to the estimate",
    example: 120.06,
    validator: (value) => typeof value === "number"
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the estimate, if any",
    example: 55667,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitName: {
    name: "Business Unit Name",
    description: "The name of the business unit associated with the estimate, if any",
    example: "HVAC Services",
    validator: (value) => typeof value === "string" || value === null
  },
  isRecommended: {
    name: "Is Recommended",
    description: "Indicates whether the estimate is a recommended option",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  budgetCodeId: {
    name: "Budget Code ID",
    description: "The ID of the budget code associated with the estimate, if any",
    example: 77889,
    validator: (value) => typeof value === "number" || value === null
  },
  isChangeOrder: {
    name: "Is Change Order",
    description: "Indicates whether the estimate is a change order to an existing job or project",
    example: false,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_invoice_service_titan.ts
var node60 = { "name": "ServiceTitan New Invoice", "id": "on_new_invoice_service_titan", "descripition": "Triggers when a new invoice is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the invoice",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  syncStatus: {
    name: "Sync Status",
    description: "The sync status of the invoice",
    example: "Synced",
    validator: (value) => typeof value === "string" || value === null
  },
  referenceNumber: {
    name: "Reference Number",
    description: "The reference number of the invoice",
    example: "INV-1001",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceDate: {
    name: "Invoice Date",
    description: "The date the invoice was created",
    example: "2023-10-01",
    validator: (value) => typeof value === "string" || value === null
  },
  dueDate: {
    name: "Due Date",
    description: "The due date for the invoice",
    example: "2023-10-15",
    validator: (value) => typeof value === "string" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount of the invoice",
    example: "150.00",
    validator: (value) => typeof value === "string" || value === null
  },
  balance: {
    name: "Balance",
    description: "The remaining balance of the invoice",
    example: "50.00",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceTypeId: {
    name: "Invoice Type ID",
    description: "The type ID of the invoice",
    example: 1,
    validator: (value) => typeof value === "number" || value === null
  },
  invoiceTypeName: {
    name: "Invoice Type Name",
    description: "The type name of the invoice",
    example: "Standard",
    validator: (value) => typeof value === "string" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the invoice",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the customer associated with the invoice",
    example: "John Doe",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressStreet: {
    name: "Customer Address Street",
    description: "The street address of the customer",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressUnit: {
    name: "Customer Address Unit",
    description: "The unit or apartment number of the customer's address",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressCity: {
    name: "Customer Address City",
    description: "The city of the customer's address",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressState: {
    name: "Customer Address State",
    description: "The state of the customer's address",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressZip: {
    name: "Customer Address ZIP Code",
    description: "The ZIP code of the customer's address",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressCountry: {
    name: "Customer Address Country",
    description: "The country of the customer's address",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  },
  paidOn: {
    name: "Paid On",
    description: "The date the invoice was paid",
    example: "2023-10-10",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_job_or_project_note_service_titan.ts
var node61 = { "name": "ServiceTitan New Job Or Project Note", "id": "on_new_job_or_project_note_service_titan", "descripition": "Triggers when a new note is added to a job or project in ServiceTitan", "inputSchema": {
  entityType: {
    name: "Note Type",
    description: "Select whether to trigger on Job Notes or Project Notes",
    required: true,
    validationSchema: /^(Job|Project)$/,
    errorMessage: "Note Type must be either 'Job' or 'Project'",
    input: {
      type: "select",
      options: [
        { label: "Job", value: "Job" },
        { label: "Project", value: "Project" }
      ]
    },
    parse: (value) => value
  },
  entityId: {
    name: "Entity ID",
    description: "The ID of the Job or Project to monitor for new notes (e.g., Job ID or Project ID)",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Entity ID must be a valid number",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  text: {
    name: "Text",
    description: "The content of the note",
    example: "This is a sample note text.",
    validator: (value) => typeof value === "string"
  },
  isPinned: {
    name: "Is Pinned",
    description: "Indicates if the note is pinned",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the note",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the note was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
    // Accept any value, further validation can be done if needed
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the note was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
    // Accept any value, further validation can be done if needed
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_job_service_titan.ts
var node62 = { "name": "ServiceTitan New Job", "id": "on_new_job_service_titan", "descripition": "Triggers when a new job is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The job ID",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobNumber: {
    name: "Job Number",
    description: "The job number",
    example: "J-1001",
    validator: (value) => typeof value === "string"
  },
  projectId: {
    name: "Project ID",
    description: "The associated project ID, if any",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the job",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the job",
    example: 98765,
    validator: (value) => typeof value === "number"
  },
  jobStatus: {
    name: "Job Status",
    description: "The current status of the job",
    example: "Completed",
    validator: (value) => typeof value === "string"
  },
  completedOn: {
    name: "Completed On",
    description: "The date and time when the job was completed, if applicable",
    example: "2023-10-01T15:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the job",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type",
    example: 33445,
    validator: (value) => typeof value === "number"
  },
  priority: {
    name: "Priority",
    description: "The priority level of the job",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the job",
    example: 55667,
    validator: (value) => typeof value === "number"
  },
  appointmentCount: {
    name: "Appointment Count",
    description: "The number of appointments associated with the job",
    example: 2,
    validator: (value) => typeof value === "number"
  },
  firstAppointmentId: {
    name: "First Appointment ID",
    description: "The ID of the first appointment associated with the job",
    example: 77889,
    validator: (value) => typeof value === "number"
  },
  lastAppointmentId: {
    name: "Last Appointment ID",
    description: "The ID of the last appointment associated with the job",
    example: 99001,
    validator: (value) => typeof value === "number"
  },
  recallForId: {
    name: "Recall For ID",
    description: "The ID of the job this job is a recall for, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  warrantyId: {
    name: "Warranty ID",
    description: "The ID of the warranty associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  jobGeneratedLeadSource: {
    name: "Job Generated Lead Source",
    description: "Details about the lead source that generated the job, if applicable",
    example: null,
    validator: (value) => typeof value === "object" || value === null
  },
  noCharge: {
    name: "No Charge",
    description: "Indicates if the job is marked as no charge",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  notificationsEnabled: {
    name: "Notifications Enabled",
    description: "Indicates if notifications are enabled for the job",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the job record",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the job record",
    example: 22334,
    validator: (value) => typeof value === "number"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the job record",
    example: "2023-10-05T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "List of tag type IDs associated with the job",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  leadCallId: {
    name: "Lead Call ID",
    description: "The ID of the lead call associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  partnerLeadCallId: {
    name: "Partner Lead Call ID",
    description: "The ID of the partner lead call associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  soldById: {
    name: "Sold By ID",
    description: "The ID of the user who sold the job, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  customerPo: {
    name: "Customer PO",
    description: "The customer purchase order associated with the job, if any",
    example: "PO-12345",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceId: {
    name: "Invoice ID",
    description: "The ID of the invoice associated with the job",
    example: 44556,
    validator: (value) => typeof value === "number"
  },
  membershipId: {
    name: "Membership ID",
    description: "The ID of the membership associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount for the job, if available",
    example: 250.75,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the job",
    example: "AC repair and maintenance",
    validator: (value) => typeof value === "string" || value === null
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the job",
    example: [{ fieldId: 1, value: "Custom Value" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.fieldId === "number" && (typeof item.value === "string" || item.value === null || item.value === void 0)
    )
  },
  externalData: {
    name: "External Data",
    description: "External data associated with the job",
    example: [{ source: "API", data: "Some external data" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.source === "string" && (typeof item.data === "string" || item.data === null || item.data === void 0)
    )
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_lead_note_service_titan.ts
var node63 = { "name": "ServiceTitan New Lead Note", "id": "on_new_lead_note_service_titan", "descripition": "Triggers when a new note is added to a lead in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the note",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  text: {
    name: "Text",
    description: "The content of the note",
    example: "This is a note.",
    validator: (value) => typeof value === "string"
  },
  isPinned: {
    name: "Is Pinned",
    description: "Indicates if the note is pinned",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the note",
    example: 456,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The timestamp when the note was created",
    example: "2023-10-01T12:34:56Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The timestamp when the note was last modified",
    example: "2023-10-02T12:34:56Z",
    validator: (value) => typeof value === "string"
  },
  leadId: {
    name: "Lead ID",
    description: "The ID of the associated lead",
    example: 789,
    validator: (value) => typeof value === "number"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_lead_service_titan.ts
var node64 = { "name": "ServiceTitan New Lead", "id": "on_new_lead_service_titan", "descripition": "Triggers when a new lead is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the lead",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  status: {
    name: "Status",
    description: "The status of the lead",
    example: "New",
    validator: (value) => typeof value === "string"
  },
  priority: {
    name: "Priority",
    description: "The priority of the lead",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead",
    example: 456,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the lead",
    example: 789,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the lead",
    example: 101,
    validator: (value) => typeof value === "number" || value === null
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type associated with the lead",
    example: 202,
    validator: (value) => typeof value === "number" || value === null
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the lead",
    example: 303,
    validator: (value) => typeof value === "number"
  },
  followUpDate: {
    name: "Follow Up Date",
    description: "The follow-up date for the lead",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the lead",
    example: 404,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the lead was created",
    example: "2023-10-01T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the lead was last modified",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "The tag type IDs associated with the lead",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number") || value === null
  },
  dismissingReasonId: {
    name: "Dismissing Reason ID",
    description: "The ID of the reason for dismissing the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the lead",
    example: "Customer interested in HVAC services.",
    validator: (value) => typeof value === "string" || value === null
  },
  callReasonId: {
    name: "Call Reason ID",
    description: "The ID of the reason for the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  callId: {
    name: "Call ID",
    description: "The ID of the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  manualCallId: {
    name: "Manual Call ID",
    description: "The ID of the manual call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  leadUrl: {
    name: "Lead URL",
    description: "The URL of the lead in ServiceTitan",
    example: "https://app.servicetitan.com/leads/123",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCustomerName: {
    name: "Lead Customer Name",
    description: "The name of the customer associated with the lead",
    example: "Jane Smith",
    validator: (value) => typeof value === "string" || value === null
  },
  leadPhone: {
    name: "Lead Phone",
    description: "The phone number of the lead",
    example: "555-123-4567",
    validator: (value) => typeof value === "string" || value === null
  },
  leadEmail: {
    name: "Lead Email",
    description: "The email address of the lead",
    example: "johndoe@email.com",
    validator: (value) => typeof value === "string" || value === null
  },
  leadStreet: {
    name: "Lead Street",
    description: "The street address of the lead",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  leadUnit: {
    name: "Lead Unit",
    description: "The unit or apartment number of the lead",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCity: {
    name: "Lead City",
    description: "The city of the lead",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  leadState: {
    name: "Lead State",
    description: "The state of the lead",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  leadZip: {
    name: "Lead ZIP Code",
    description: "The ZIP code of the lead",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCountry: {
    name: "Lead Country",
    description: "The country of the lead",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_payment_service_titan.ts
var node65 = { "name": "ServiceTitan New Payment", "id": "on_new_payment_service_titan", "descripition": "Triggers when a new payment is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the payment",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  syncStatus: {
    name: "Sync Status",
    description: "The sync status of the payment",
    example: "Synced",
    validator: (value) => typeof value === "string" || value === null
  },
  referenceNumber: {
    name: "Reference Number",
    description: "The reference number of the payment",
    example: "REF12345",
    validator: (value) => typeof value === "string" || value === null
  },
  date: {
    name: "Date",
    description: "The date of the payment",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  type: {
    name: "Type",
    description: "The type of the payment",
    example: "Credit Card",
    validator: (value) => typeof value === "string" || value === null
  },
  typeId: {
    name: "Type ID",
    description: "The type ID of the payment",
    example: "CC",
    validator: (value) => typeof value === "string" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount of the payment",
    example: "100.00",
    validator: (value) => typeof value === "string" || value === null
  },
  unappliedAmount: {
    name: "Unapplied Amount",
    description: "The unapplied amount of the payment",
    example: "0.00",
    validator: (value) => typeof value === "string" || value === null
  },
  memo: {
    name: "Memo",
    description: "The memo of the payment",
    example: "Payment for invoice INV-1001",
    validator: (value) => typeof value === "string" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the payment",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the customer associated with the payment",
    example: "John Doe",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the payment",
    example: "BU123",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitName: {
    name: "Business Unit Name",
    description: "The name of the business unit associated with the payment",
    example: "Main Office",
    validator: (value) => typeof value === "string" || value === null
  },
  batchId: {
    name: "Batch ID",
    description: "The ID of the batch associated with the payment",
    example: "BATCH001",
    validator: (value) => typeof value === "string" || value === null
  },
  batchNumber: {
    name: "Batch Number",
    description: "The number of the batch associated with the payment",
    example: "1001",
    validator: (value) => typeof value === "string" || value === null
  },
  createdBy: {
    name: "Created By",
    description: "The user who created the payment",
    example: "admin",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountId: {
    name: "General Ledger Account ID",
    description: "The ID of the general ledger account associated with the payment",
    example: "GL123",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountNumber: {
    name: "General Ledger Account Number",
    description: "The number of the general ledger account associated with the payment",
    example: "4000",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountName: {
    name: "General Ledger Account Name",
    description: "The name of the general ledger account associated with the payment",
    example: "Accounts Receivable",
    validator: (value) => typeof value === "string" || value === null
  },
  appliedTo: {
    name: "Applied To",
    description: "Details of invoices or credits the payment is applied to",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the payment",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  authCode: {
    name: "Auth Code",
    description: "The authorization code for the payment",
    example: "AUTH12345",
    validator: (value) => typeof value === "string" || value === null
  },
  checkNumber: {
    name: "Check Number",
    description: "The check number if the payment was made by check",
    example: "CHK1001",
    validator: (value) => typeof value === "string" || value === null
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the payment was last modified",
    example: "2023-10-02T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the payment was created",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  active: {
    name: "Active",
    description: "Indicates whether the payment is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_project_service_titan.ts
var node66 = { "name": "ServiceTitan New Project", "id": "on_new_project_service_titan", "descripition": "Triggers when a new project is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the project",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  number: {
    name: "Number",
    description: "The project number",
    example: "PRJ-001",
    validator: (value) => typeof value === "string" || value === null
  },
  name: {
    name: "Name",
    description: "The name of the project",
    example: "New Project",
    validator: (value) => typeof value === "string" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the project",
    example: "This is a summary of the project.",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the project",
    example: "In Progress",
    validator: (value) => typeof value === "string" || value === null
  },
  statusId: {
    name: "Status ID",
    description: "The ID of the project's status",
    example: 1,
    validator: (value) => typeof value === "number" || value === null
  },
  subStatus: {
    name: "Sub Status",
    description: "The sub-status of the project",
    example: "On Hold",
    validator: (value) => typeof value === "string" || value === null
  },
  subStatusId: {
    name: "Sub Status ID",
    description: "The ID of the project's sub-status",
    example: 2,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the project",
    example: 456,
    validator: (value) => typeof value === "number"
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the project",
    example: 789,
    validator: (value) => typeof value === "number"
  },
  projectTypeId: {
    name: "Project Type ID",
    description: "The type ID of the project",
    example: 3,
    validator: (value) => typeof value === "number" || value === null
  },
  projectManagerIds: {
    name: "Project Manager IDs",
    description: "The IDs of the project managers",
    example: [101, 102],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  businessUnitIds: {
    name: "Business Unit IDs",
    description: "The IDs of the business units associated with the project",
    example: [201, 202],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  startDate: {
    name: "Start Date",
    description: "The start date of the project",
    example: "2023-10-01",
    validator: (value) => typeof value === "string" || value === null
  },
  targetCompletionDate: {
    name: "Target Completion Date",
    description: "The target completion date of the project",
    example: "2023-12-31",
    validator: (value) => typeof value === "string" || value === null
  },
  actualCompletionDate: {
    name: "Actual Completion Date",
    description: "The actual completion date of the project",
    example: "2024-01-15",
    validator: (value) => typeof value === "string" || value === null
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the project",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the project",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  jobIds: {
    name: "Job IDs",
    description: "List of job IDs associated with the project",
    example: [301, 302, 303],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  customFields: {
    name: "Custom Fields",
    description: "List of custom fields associated with the project",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  externalData: {
    name: "External Data",
    description: "List of external data associated with the project",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_s_m_s_received.ts
var node67 = { "name": "On SMS Received", "id": "on_s_m_s_received", "descripition": "A description for OnSMSReceived", "inputSchema": {}, "outputSchema": {
  customerNumber: {
    name: "Customer Number",
    description: "The phone number of the customer who sent the SMS.",
    example: "+1234567890",
    validator: (value) => typeof value === "string" && /^\+\d{10,15}$/.test(value),
    required: true
  },
  messageBody: {
    name: "Message Body",
    description: "The content of the SMS message received.",
    example: "Hello, I need help with my order.",
    validator: (value) => typeof value === "string" && value.length > 0,
    required: true
  },
  agentNumber: {
    name: "Agent Number",
    description: "The phone number of the agent assigned to handle the SMS.",
    example: "+1987654321",
    validator: (value) => typeof value === "string" && /^\+\d{10,15}$/.test(value),
    required: true
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_tag_added.ts
var node68 = { "name": "On Tag Added", "id": "on_tag_added", "descripition": "Triggers a workflow when a tag is added to a lead, providing lead information", "inputSchema": {}, "outputSchema": {
  tag: {
    name: "Tag",
    description: "The tag that was added to the lead",
    example: "VIP Customer",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex2.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_updated_call_service_titan.ts
var node69 = { "name": "ServiceTitan Updated Call", "id": "on_updated_call_service_titan", "descripition": "Triggers when a call is updated in ServiceTitan", "inputSchema": {}, "outputSchema": {}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_updated_estimate_service_titan.ts
var node70 = { "name": "ServiceTitan Updated Estimate", "id": "on_updated_estimate_service_titan", "descripition": "Triggers when an estimate is updated in ServiceTitan", "inputSchema": {}, "outputSchema": {}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_website_vistor_indentified.ts
var node71 = { "name": "On Website Visitor Identified", "id": "on_website_vistor_indentified", "descripition": "Triggers when an anonymous Website visitor is identified via our Pixel Tag", "inputSchema": {}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex2.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Trigger", "Website"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/outreachgenius_calendar_book_slot.ts
var node72 = { "name": "Book Slot", "id": "outreachgenius_calendar_book_slot", "descripition": "Book a Cronofy calendar slot for an event", "inputSchema": {
  timezone: {
    name: "timezone",
    description: "Timezone",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  cname: {
    name: "cname",
    description: "Company/name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  lastName: {
    name: "lastName",
    description: "Last name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  zipCode: {
    name: "zipCode",
    description: "Zip code of the customer",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Phone number",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstName: {
    name: "firstName",
    description: "First name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  leadEmail: {
    name: "leadEmail",
    description: "Lead email",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Attendee email",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  slotId: {
    name: "slotId",
    description: "Base64 encoded slot ID from getAvailableSlots",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Book Slot from API Outreachgenius Calendar",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Outreachgenius Calendar", "Book Slot"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/outreachgenius_calendar_get_available_slots.ts
var node73 = { "name": "Get Available Slots", "id": "outreachgenius_calendar_get_available_slots", "descripition": "Return available Cronofy slots for an eventId (mapped via project/zip if provided)", "inputSchema": {
  timezone: {
    name: "timezone",
    description: "Timezone",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  zipCode: {
    name: "zipCode",
    description: "Zip code of the customer",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Available Slots from API Outreachgenius Calendar",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Outreachgenius Calendar", "Get Available Slots"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/psa_api_add_company.ts
var node74 = { "name": "Add Company", "id": "psa_api_add_company", "descripition": "Create a new company in PSA system with primary site and optional contact info.", "inputSchema": {
  phone: {
    name: "phone",
    description: "Phone number",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Email address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  postalCode: {
    name: "postalCode",
    description: "Postal/ZIP code",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  country: {
    name: "country",
    description: "Country",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  siteName: {
    name: "siteName",
    description: "Site name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  region: {
    name: "region",
    description: "Province/State",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  city: {
    name: "city",
    description: "City",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Street address",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  companyType: {
    name: "companyType",
    description: "Company type: CUSTOMER=1, VENDOR=2",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  name: {
    name: "name",
    description: "Company name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Add Company from API PSA API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["PSA API", "Add Company"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/psa_api_add_contact.ts
var node75 = { "name": "Add Contact", "id": "psa_api_add_contact", "descripition": "Create a new contact in PSA system associated with the configured company.", "inputSchema": {
  phone: {
    name: "phone",
    description: "Phone number of the contact",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Email address of the contact",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  subregion: {
    name: "subregion",
    description: "County/Subregion of the contact",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  postalCode: {
    name: "postalCode",
    description: "Postal/ZIP code of the contact",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  country: {
    name: "country",
    description: "Country of the contact",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  title: {
    name: "title",
    description: "Title of the contact (e.g., Doctor, Mr., Mrs.)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  region: {
    name: "region",
    description: "Province/State of the contact",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  city: {
    name: "city",
    description: "City of the contact",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Street address of the contact",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  lastName: {
    name: "lastName",
    description: "Last name of the contact",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  firstName: {
    name: "firstName",
    description: "First name of the contact",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Add Contact from API PSA API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["PSA API", "Add Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/psa_api_add_job.ts
var node76 = { "name": "Add Job", "id": "psa_api_add_job", "descripition": "Create a new job in PSA system. Only name is required.", "inputSchema": {
  siteName: {
    name: "siteName",
    description: "Site name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  siteRegion: {
    name: "siteRegion",
    description: "Province/State",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  siteCity: {
    name: "siteCity",
    description: "City",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  siteAddress: {
    name: "siteAddress",
    description: "Street address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  contactId: {
    name: "contactId",
    description: "Contact ID to link to the job",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  buildingType: {
    name: "buildingType",
    description: "Building type (e.g., 'Residential', 'Commercial')",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  name: {
    name: "name",
    description: "Job name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Add Job from API PSA API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["PSA API", "Add Job"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/psa_api_get_company.ts
var node77 = { "name": "Get Company", "id": "psa_api_get_company", "descripition": "Retrieve company details by ID from PSA system.", "inputSchema": {
  companyId: {
    name: "companyId",
    description: "The ID of the company to retrieve",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Company from API PSA API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["PSA API", "Get Company"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/psa_api_get_contact.ts
var node78 = { "name": "Get Contact", "id": "psa_api_get_contact", "descripition": "Retrieve contact details by ID from PSA system.", "inputSchema": {
  contactId: {
    name: "contactId",
    description: "The ID of the contact to retrieve",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Contact from API PSA API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["PSA API", "Get Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/psa_api_get_job.ts
var node79 = { "name": "Get Job", "id": "psa_api_get_job", "descripition": "Retrieve job details by ID from PSA system.", "inputSchema": {
  jobId: {
    name: "jobId",
    description: "The ID of the job to retrieve",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Job from API PSA API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["PSA API", "Get Job"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/process_variable.ts
var node80 = { "name": "Process Variable", "id": "process_variable", "descripition": "Processes a variable with various string, number, and JSON operations", "inputSchema": {
  value: {
    name: "Value",
    description: "The value to process",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "Value to process"
    },
    parse: function(value) {
      return value;
    }
  },
  operation: {
    name: "Operation",
    description: "The type of operation to perform on the value",
    validationSchema: /.*/,
    errorMessage: "Please select a valid operation",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "To Uppercase", value: "to_uppercase" },
        { label: "To Lowercase", value: "to_lowercase" },
        { label: "Capitalize", value: "capitalize" },
        { label: "Trim", value: "trim" },
        { label: "Substring", value: "substring" },
        { label: "Replace", value: "replace" },
        { label: "Split", value: "split" },
        { label: "Join", value: "join" },
        { label: "Length", value: "length" },
        { label: "Number Operation", value: "number_operation" },
        { label: "Parse JSON", value: "parse_json" },
        { label: "Stringify JSON", value: "stringify_json" },
        { label: "Date Operation", value: "date_operation" },
        { label: "Validate Phone Number", value: "validate_phone_number" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  additionalValue: {
    name: "Additional Value",
    description: "Additional value needed for operations like split, join, number operations.",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      const op = currentValues["operation"];
      return op === "split" || op === "join" || op === "number_operation";
    },
    errorMessage: "Please provide a valid value",
    required: false,
    input: {
      type: "text",
      placeholder: "Additional value"
    },
    parse: function(value) {
      return value;
    }
  },
  searchValue: {
    name: "Search Value",
    description: "Text to search for when using the replace operation",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "replace";
    },
    errorMessage: "Please provide a search value",
    required: false,
    input: {
      type: "text",
      placeholder: "Text to find"
    },
    parse: function(value) {
      return value;
    }
  },
  replaceValue: {
    name: "Replace With",
    description: "Replacement text used in the replace operation",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "replace";
    },
    errorMessage: "Please provide a replacement value",
    required: false,
    input: {
      type: "text",
      placeholder: "Replacement text"
    },
    parse: function(value) {
      return value;
    }
  },
  startIndex: {
    name: "Start Index",
    description: "Starting index for operations like substring",
    validationSchema: /^\d+$/,
    errorMessage: "Please provide a valid number",
    getVisible: (currentValues) => {
      return currentValues["operation"] === "substring";
    },
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  endIndex: {
    name: "End Index",
    description: "Ending index for operations like substring",
    validationSchema: /^\d+$/,
    errorMessage: "Please provide a valid number",
    getVisible: (currentValues) => {
      return currentValues["operation"] === "substring";
    },
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  mathOperation: {
    name: "Math Operation",
    description: "Type of mathematical operation to perform",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "number_operation";
    },
    errorMessage: "Please select a valid math operation",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Add", value: "add" },
        { label: "Subtract", value: "subtract" },
        { label: "Multiply", value: "multiply" },
        { label: "Divide", value: "divide" },
        { label: "Modulo", value: "modulo" },
        { label: "Round", value: "round" },
        { label: "Floor", value: "floor" },
        { label: "Ceiling", value: "ceil" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  dateOperation: {
    name: "Date Operation",
    description: "Type of date operation to perform",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "date_operation";
    },
    errorMessage: "Please select a valid date operation",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Add", value: "add" },
        { label: "Subtract", value: "subtract" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  dateUnit: {
    name: "Date Unit",
    description: "Unit of time for date operation",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "date_operation";
    },
    errorMessage: "Please select a valid date unit",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Milliseconds", value: "milliseconds" },
        { label: "Seconds", value: "seconds" },
        { label: "Minutes", value: "minutes" },
        { label: "Hours", value: "hours" },
        { label: "Days", value: "days" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  dateAmount: {
    name: "Date Amount",
    description: "Amount of time to add or subtract",
    validationSchema: /^\d+$/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "date_operation";
    },
    errorMessage: "Please provide a valid number",
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "The result of the processing operation",
    validator: (value) => true,
    // Accept any type based on the operation
    example: "processed result"
  }
}, "groups": ["Data Processing", "Utilities"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" }, "error": { "id": "error", "name": "Error", "description": "An error occurred during execution" } }, "isTriggerNode": false, "cost": 0 };

// src/public_holiday_api_holiday_check_v1.ts
var node81 = { "name": "holiday-check-v1", "id": "public_holiday_api_holiday_check_v1", "descripition": "Checks if today is a public holiday in the given timezone. Returns an object where success is true and the message contains the holiday name (or 'Specified By Date') if it is a holiday. If it is not a holiday, success is false and the message provides the reason or status.", "inputSchema": {
  dateToCheck: {
    name: "dateToCheck",
    description: "The date to check for a public holiday in YYYY-MM-DD format",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool holiday-check-v1 from API Public Holiday API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Public Holiday API", "holiday-check-v1"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/remove_tag_from_lead.ts
var node82 = { "name": "Remove Tag From Lead", "id": "remove_tag_from_lead", "descripition": "Removes a specified tag from a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  tag: {
    name: "Tag",
    description: "Tag to be removed from the lead",
    validationSchema: /^\S+$/,
    errorMessage: "Please enter a valid tag name",
    required: true,
    input: {
      type: "text",
      placeholder: "lead-tag"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/repeat_job.ts
var node83 = { "name": "Repeat Job", "id": "repeat_job", "descripition": "A description for RepeatJob", "inputSchema": {
  repeatType: {
    name: "Repeat Type",
    description: "Type of repetition",
    required: true,
    validationSchema: /^(Hourly|Daily|Weekly|Monthly)$/,
    errorMessage: "Repeat Type must be one of: Hourly, Daily, Weekly, Monthly",
    input: {
      type: "select",
      options: [
        {
          label: "Hourly",
          value: "Hourly"
        },
        {
          label: "Daily",
          value: "Daily"
        },
        {
          label: "Weekly",
          value: "Weekly"
        },
        {
          label: "Monthly",
          value: "Monthly"
        }
      ]
    },
    parse: (value) => value
  },
  interval: {
    name: "Interval",
    description: "Interval for repetition",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Interval must be a valid number",
    input: {
      type: "number",
      min: 1,
      max: 1e3
    },
    parse: (value) => parseInt(value, 10)
  }
}, "outputSchema": {}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/run_another_workflow.ts
var node84 = { "name": "Run Another Workflow", "id": "run_another_workflow", "descripition": "A description for RunAnotherWorkflow", "inputSchema": {
  workflowCode: {
    name: "Workflow Code",
    description: "The unique code of the workflow to run, check ManualTrigger node on the target workflow for the code",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid workflow Code",
    required: true,
    input: {
      type: "text",
      placeholder: "Enter workflow Code"
    },
    parse: function(value) {
      return value;
    }
  },
  phone: {
    name: "Phone Number",
    description: "The phone number to send notifications to",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format",
    required: false,
    input: {
      type: "text",
      placeholder: "Enter phone number (optional)"
    },
    parse: function(value) {
      return value;
    }
  },
  extraInfo: {
    name: "Extra Information",
    description: "Any additional information to include",
    validationSchema: /.*/,
    errorMessage: "",
    required: false,
    input: {
      type: "text",
      placeholder: "Enter extra information (optional)"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Advanced"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/run_once_trigger.ts
var node85 = { "name": "Run Once", "id": "run_once_trigger", "descripition": "A trigger node that runs only once when the workflow is activated", "inputSchema": {}, "outputSchema": {}, "groups": ["Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/sample_api_counter_tool.ts
var node86 = { "name": "Counter Tool", "id": "sample_api_counter_tool", "descripition": "This tool increments a counter stored in the session.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Counter Tool from API Sample API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Sample API", "Counter Tool"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/sample_api_sample_tool.ts
var node87 = { "name": "Sample Tool", "id": "sample_api_sample_tool", "descripition": "This is a sample tool within the Sample API.", "inputSchema": {
  param1: {
    name: "param1",
    description: "This is a sample parameter.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Sample Tool from API Sample API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["Sample API", "Sample Tool"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/send_direct_mail.ts
var node88 = { "name": "Send Direct Mail", "id": "send_direct_mail", "descripition": "Sends a physical direct mail using a service provider", "inputSchema": {
  productId: {
    name: "Product ID",
    description: "ID of the physical mail product to send",
    validationSchema: /.+/,
    errorMessage: "Product ID cannot be empty",
    required: true,
    input: {
      type: "custom",
      tag: "direct-mail-product-selector"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  handwritingStyle: {
    name: "Handwriting Style",
    description: "Style of handwriting to use for the letter",
    validationSchema: /.+/,
    errorMessage: "Handwriting style cannot be empty",
    required: true,
    input: {
      type: "custom",
      tag: "handwriting-style-selector"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  customMessage: {
    name: "Custom Message",
    description: "The message content for the direct mail",
    validationSchema: /.+/,
    errorMessage: "Message content cannot be empty",
    required: true,
    input: {
      type: "custom",
      tag: "font-target-textarea"
    },
    parse: function(value) {
      return value;
    }
  },
  signoff: {
    name: "Signoff",
    description: "Optional message signoff (e.g., 'Best regards')",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid signoff",
    required: true,
    input: {
      type: "custom",
      tag: "font-target-textarea"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  shippingDate: {
    name: "Shipping Date",
    description: "Optional requested shipping date (YYYY-MM-DD)",
    validationSchema: /^$|^\d{4}-\d{2}-\d{2}$/,
    errorMessage: "Please use YYYY-MM-DD format for date",
    required: false,
    input: {
      type: "text",
      placeholder: "2023-12-25",
      default: "01/01/2020"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressName: {
    name: "Return Address Name",
    description: "Name for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid name",
    required: true,
    input: {
      type: "text",
      placeholder: "John Doe"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddress: {
    name: "Return Address",
    description: "Street address for return",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid address",
    required: true,
    input: {
      type: "text",
      placeholder: "123 Main St"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddress2: {
    name: "Return Address Line 2",
    description: "Additional address information for return",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid address",
    required: false,
    input: {
      type: "text",
      placeholder: "Apt 4B"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressCity: {
    name: "Return Address City",
    description: "City for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid city",
    required: true,
    input: {
      type: "text",
      placeholder: "San Francisco"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressState: {
    name: "Return Address State",
    description: "State/province for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid state",
    required: true,
    input: {
      type: "text",
      placeholder: "CA"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressZip: {
    name: "Return Address ZIP",
    description: "ZIP/Postal code for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid ZIP code",
    required: true,
    input: {
      type: "text",
      placeholder: "94103"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressCountry: {
    name: "Return Address Country",
    description: "Country for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid country",
    required: true,
    input: {
      type: "text",
      placeholder: "USA"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientFirstName: {
    name: "Recipient First Name",
    description: "First name of the recipient",
    validationSchema: /.+/,
    errorMessage: "First name cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "John"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientLastName: {
    name: "Recipient Last Name",
    description: "Last name of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid last name",
    required: true,
    input: {
      type: "text",
      placeholder: "Smith"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientEmail: {
    name: "Recipient Email",
    description: "Email address of the recipient",
    validationSchema: /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "recipient@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientPhone: {
    name: "Recipient Phone",
    description: "Phone number of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1 555-123-4567"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientAddress: {
    name: "Recipient Address",
    description: "Street address of the recipient",
    validationSchema: /.+/,
    errorMessage: "Address cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "456 Oak St"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientAddress2: {
    name: "Recipient Address Line 2",
    description: "Additional address information for the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid address",
    required: false,
    input: {
      type: "text",
      placeholder: "Suite 7C"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCity: {
    name: "Recipient City",
    description: "City of the recipient",
    validationSchema: /.+/,
    errorMessage: "City cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "Chicago"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientState: {
    name: "Recipient State",
    description: "State/province of the recipient",
    validationSchema: /.+/,
    errorMessage: "State cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "IL"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCountry: {
    name: "Recipient Country",
    description: "Country of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid country",
    required: true,
    input: {
      type: "text",
      placeholder: "USA"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientZip: {
    name: "Recipient ZIP",
    description: "ZIP/Postal code of the recipient",
    validationSchema: /.+/,
    errorMessage: "ZIP code cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "60601"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCompany: {
    name: "Recipient Company",
    description: "Company name of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid company name",
    required: false,
    input: {
      type: "text",
      placeholder: "ACME Inc."
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCustom1: {
    name: "Recipient Custom Field 1",
    description: "First custom field for recipient data",
    validationSchema: /^.*$/,
    errorMessage: "Please enter valid text",
    required: false,
    input: {
      type: "text",
      placeholder: "Custom data 1"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCustom2: {
    name: "Recipient Custom Field 2",
    description: "Second custom field for recipient data",
    validationSchema: /^.*$/,
    errorMessage: "Please enter valid text",
    required: false,
    input: {
      type: "text",
      placeholder: "Custom data 2"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCustom3: {
    name: "Recipient Custom Field 3",
    description: "Third custom field for recipient data",
    validationSchema: /^.*$/,
    errorMessage: "Please enter valid text",
    required: false,
    input: {
      type: "text",
      placeholder: "Custom data 3"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "Direct Mail"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 7.5 };

// src/send_email_notification.ts
var node89 = { "name": "Send Email Notification", "id": "send_email_notification", "descripition": "Sends an email message with customizable from, to, cc, bcc fields and SMTP configuration", "inputSchema": {
  useCustomSMTP: {
    name: "Use Custom SMTP",
    description: "Enable to use custom SMTP settings",
    validationSchema: /^(true|false)$/,
    errorMessage: "Please enter true or false",
    required: false,
    input: {
      type: "boolean"
    },
    parse: function(value) {
      return value === "true";
    }
  },
  from: {
    name: "From",
    description: "Sender email address",
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "sender@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  fromName: {
    name: "From Name",
    description: "Sender name",
    validationSchema: /^.+$/,
    errorMessage: "Name cannot be empty",
    required: false,
    input: {
      type: "text",
      placeholder: "John Doe"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  to: {
    name: "To",
    description: "Email recipient address(es)",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: true,
    input: {
      type: "text",
      placeholder: "recipient@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  cc: {
    name: "CC",
    description: "Carbon copy recipient(s)",
    validationSchema: /^\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\s*,\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})*\s*$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "cc@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  bcc: {
    name: "BCC",
    description: "Blind carbon copy recipient(s)",
    validationSchema: /^\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\s*,\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})*\s*$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "bcc@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  subject: {
    name: "Subject",
    description: "Email subject line",
    validationSchema: /.+/,
    errorMessage: "Subject cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "Email Subject"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  body: {
    name: "Body",
    description: "Email body content",
    validationSchema: /[\s\S]*/,
    errorMessage: "Email body cannot be empty",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Write your email content here"
    },
    parse: function(value) {
      return value;
    }
  },
  smtpHost: {
    name: "SMTP Host",
    description: "SMTP server hostname (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid hostname",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "text",
      placeholder: "smtp.example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  smtpPort: {
    name: "SMTP Port",
    description: "SMTP server port (optional)",
    validationSchema: /^\d+$/,
    errorMessage: "Please enter a valid port number",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "number",
      min: 1,
      max: 65535
    },
    parse: function(value) {
      return Number(value);
    }
  },
  smtpUsername: {
    name: "SMTP Username",
    description: "SMTP username for authentication (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid username",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "text",
      placeholder: "username"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  smtpPassword: {
    name: "SMTP Password",
    description: "SMTP password for authentication (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid password",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "password"
    },
    parse: function(value) {
      return value;
    }
  },
  smtpSecure: {
    name: "SMTP Secure",
    description: "Use secure connection (TLS) (optional)",
    validationSchema: /^(true|false)$/,
    errorMessage: "Please enter true or false",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "boolean"
    },
    parse: function(value) {
      return value === "true";
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "Email"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/send_s_m_s_notification.ts
var node90 = { "name": "Send SMS Notification", "id": "send_s_m_s_notification", "descripition": "Sends an SMS message to a specified phone number with customizable content", "inputSchema": {
  to: {
    name: "To",
    description: "Phone number to send the SMS to",
    validationSchema: /^(\+?[1-9]\d{1,14})(,\s*\+?[1-9]\d{1,14})*$/,
    errorMessage: "Please enter valid phone numbers in E.164 format, separated by commas if multiple",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567,+15557654321"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  body: {
    name: "Message",
    description: "The content of the SMS message",
    validationSchema: /^[\s\S]{1,1600}$/,
    errorMessage: "Please enter a valid message (maximum 1600 characters)",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1600,
      minLength: 1,
      placeholder: "Enter your message here"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "SMS"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0.35 };

// src/send_sms_reply.ts
var node91 = { "name": "Send SMS Reply", "id": "send_sms_reply", "descripition": "A description for SendSMSReply", "inputSchema": {
  to: {
    name: "Recipient Number",
    description: "Phone number to send the SMS reply to",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid phone number.",
    required: true,
    getVisible: void 0,
    input: {
      type: "text",
      maxLength: 15,
      minLength: 10,
      placeholder: "+1234567890",
      default: void 0
    },
    parse: function(value) {
      if (!value || !/^\+?\d{10,15}$/.test(value)) {
        throw new Error("Invalid phone number format.");
      }
      return value;
    }
  },
  from: {
    name: "Sender Number",
    description: "Phone number from which the SMS reply is sent",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid sender phone number.",
    required: false,
    input: {
      type: "custom",
      tag: "phone-id-selector"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  messageBody: {
    name: "Message Body",
    description: "Content of the SMS reply",
    validationSchema: /.*/,
    errorMessage: "Message body cannot be empty.",
    required: true,
    getVisible: void 0,
    input: {
      type: "text",
      maxLength: 1e3,
      minLength: 1,
      placeholder: "Type your reply here...",
      default: void 0
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_add_note_to_contact.ts
var node92 = { "name": "Add Note to Contact", "id": "serviceminder_api_add_note_to_contact", "descripition": "Add a note to a customer's record. Useful for call logs and follow-up information.", "inputSchema": {
  noteBody: {
    name: "noteBody",
    description: "Content of the note",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  noteTitle: {
    name: "noteTitle",
    description: "Title of the note",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  contactId: {
    name: "contactId",
    description: "Contact ID to add note to",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Add Note to Contact from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Add Note to Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_add_or_update_contact.ts
var node93 = { "name": "Add or Update Contact", "id": "serviceminder_api_add_or_update_contact", "descripition": "Create a new contact or update existing one. Use when customer information needs to be added or modified.", "inputSchema": {
  campaign: {
    name: "campaign",
    description: "Marketing campaign",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  channel: {
    name: "channel",
    description: "Lead source channel",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  zip: {
    name: "zip",
    description: "ZIP code",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  state: {
    name: "state",
    description: "State",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  city: {
    name: "city",
    description: "City",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address2: {
    name: "address2",
    description: "Apartment/unit number",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address1: {
    name: "address1",
    description: "Street address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  company: {
    name: "company",
    description: "Company name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Email address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Primary phone number",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  name: {
    name: "name",
    description: "Customer's full name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Add or Update Contact from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Add or Update Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_book_appointment.ts
var node94 = { "name": "Book Appointment", "id": "serviceminder_api_book_appointment", "descripition": "Book a confirmed appointment for a customer. Use after finding available slots.", "inputSchema": {
  quantity: {
    name: "quantity",
    description: "Quantity of service",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  serviceName: {
    name: "serviceName",
    description: "Name of the service (uses default if not provided)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  notes: {
    name: "notes",
    description: "Additional notes for the appointment",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  duration: {
    name: "duration",
    description: "Duration in minutes",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  targetDate: {
    name: "targetDate",
    description: "Appointment date and time (YYYY-MM-DD HH:MM)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  contactId: {
    name: "contactId",
    description: "Customer's contact ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Book Appointment from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Book Appointment"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_cancel_appointment.ts
var node95 = { "name": "Cancel Appointment", "id": "serviceminder_api_cancel_appointment", "descripition": "Cancel an existing appointment with optional reason.", "inputSchema": {
  updateNote: {
    name: "updateNote",
    description: "Cancellation notes",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  cancelReasonId: {
    name: "cancelReasonId",
    description: "Reason code for cancellation",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  appointmentId: {
    name: "appointmentId",
    description: "ID of appointment to cancel",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Cancel Appointment from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Cancel Appointment"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_find_appointments.ts
var node96 = { "name": "Find Appointments", "id": "serviceminder_api_find_appointments", "descripition": "Search for existing appointments by various criteria.", "inputSchema": {
  includeCompleted: {
    name: "includeCompleted",
    description: "Include completed appointments",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  searchDate: {
    name: "searchDate",
    description: "Date to search (YYYY-MM-DD)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  serviceId: {
    name: "serviceId",
    description: "Service ID",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  contactId: {
    name: "contactId",
    description: "Customer's contact ID",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  appointmentId: {
    name: "appointmentId",
    description: "Specific appointment ID",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Find Appointments from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Find Appointments"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_get_all_service_agents.ts
var node97 = { "name": "Get All Service Agents", "id": "serviceminder_api_get_all_service_agents", "descripition": "Retrieve all service agents/technicians available for appointments.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get All Service Agents from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Get All Service Agents"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_get_all_services.ts
var node98 = { "name": "Get All Services", "id": "serviceminder_api_get_all_services", "descripition": "Retrieve all available services for booking appointments.", "inputSchema": {
  includeParts: {
    name: "includeParts",
    description: "Include service parts information",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get All Services from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Get All Services"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_get_cancel_reasons.ts
var node99 = { "name": "Get Cancel Reasons", "id": "serviceminder_api_get_cancel_reasons", "descripition": "Get available cancellation reasons for appointments.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Cancel Reasons from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Get Cancel Reasons"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_locate_contact.ts
var node100 = { "name": "Locate Contact", "id": "serviceminder_api_locate_contact", "descripition": "Search for existing contacts by name, phone, email, or address. Essential for identifying callers.", "inputSchema": {
  limit: {
    name: "limit",
    description: "Maximum number of results to return",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  addressSearch: {
    name: "addressSearch",
    description: "Search by address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  emailSearch: {
    name: "emailSearch",
    description: "Search by email address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phoneSearch: {
    name: "phoneSearch",
    description: "Search by phone number",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  nameSearch: {
    name: "nameSearch",
    description: "Search by customer name",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Locate Contact from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Locate Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_log_call.ts
var node101 = { "name": "Log Call", "id": "serviceminder_api_log_call", "descripition": "Log details of a phone call interaction.", "inputSchema": {
  callDetails: {
    name: "callDetails",
    description: "Details of the call",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  length: {
    name: "length",
    description: "Call duration in minutes",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Log Call from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Log Call"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_query_appointments.ts
var node102 = { "name": "Query Appointments", "id": "serviceminder_api_query_appointments", "descripition": "Get appointments within a date range, useful for schedule viewing.", "inputSchema": {
  take: {
    name: "take",
    description: "Maximum number of results",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  serviceAgentId: {
    name: "serviceAgentId",
    description: "Filter by service agent ID",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  contactId: {
    name: "contactId",
    description: "Filter by customer ID",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  throughDate: {
    name: "throughDate",
    description: "End date (YYYY-MM-DD)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  fromDate: {
    name: "fromDate",
    description: "Start date (YYYY-MM-DD)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Query Appointments from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Query Appointments"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_quick_book_appointment.ts
var node103 = { "name": "Quick Book Appointment", "id": "serviceminder_api_quick_book_appointment", "descripition": "Quickly book an appointment with customer information and service in one call.", "inputSchema": {
  internalNotes: {
    name: "internalNotes",
    description: "Internal notes for staff",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customerNotes: {
    name: "customerNotes",
    description: "Notes visible to customer",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  zip: {
    name: "zip",
    description: "ZIP code",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  state: {
    name: "state",
    description: "State",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  city: {
    name: "city",
    description: "City",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address1: {
    name: "address1",
    description: "Customer's address",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  duration: {
    name: "duration",
    description: "Duration in minutes",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  service: {
    name: "service",
    description: "Service to be provided (uses default if not provided)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  scheduledStart: {
    name: "scheduledStart",
    description: "Appointment date/time (YYYY-MM-DD HH:MM)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "Customer's email",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  phone: {
    name: "phone",
    description: "Customer's phone number",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  name: {
    name: "name",
    description: "Customer's full name",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Quick Book Appointment from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Quick Book Appointment"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_search_available_slots.ts
var node104 = { "name": "Search Available Slots", "id": "serviceminder_api_search_available_slots", "descripition": "Find available appointment slots for scheduling. Essential for booking appointments.", "inputSchema": {
  slotWindowDays: {
    name: "slotWindowDays",
    description: "Number of days to search ahead",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  timeframe: {
    name: "timeframe",
    description: "Preferred time (morning, afternoon, evening)",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  searchDate: {
    name: "searchDate",
    description: "Date to search from (YYYY-MM-DD)",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  duration: {
    name: "duration",
    description: "Duration in minutes",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  contactId: {
    name: "contactId",
    description: "Customer's contact ID",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Search Available Slots from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Search Available Slots"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_test_connection.ts
var node105 = { "name": "Test Connection", "id": "serviceminder_api_test_connection", "descripition": "Test the API connection and authentication.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Test Connection from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Test Connection"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/serviceminder_api_update_appointment.ts
var node106 = { "name": "Update Appointment", "id": "serviceminder_api_update_appointment", "descripition": "Modify an existing appointment. Use for rescheduling or updating appointment details.", "inputSchema": {
  updateNote: {
    name: "updateNote",
    description: "Reason for the update",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  notes: {
    name: "notes",
    description: "Updated appointment notes",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  duration: {
    name: "duration",
    description: "New duration in minutes",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  targetDate: {
    name: "targetDate",
    description: "New appointment date/time",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  appointmentId: {
    name: "appointmentId",
    description: "ID of appointment to update",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Appointment from API ServiceMinder API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceMinder API", "Update Appointment"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_add_call_summary_note.ts
var node107 = { "name": "Add Call Summary Note", "id": "servicetitan_api_add_call_summary_note", "descripition": "Adds a call summary note to a job by appending to the existing job summary. Includes timestamp and formatted call details.", "inputSchema": {
  additionalDetails: {
    name: "additionalDetails",
    description: "Any additional details to include in the note (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  callSummary: {
    name: "callSummary",
    description: "Summary of what happened during the call.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  jobId: {
    name: "jobId",
    description: "The job ID to add the note to.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Add Call Summary Note from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Add Call Summary Note"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_cancel_job.ts
var node108 = { "name": "Cancel Job", "id": "servicetitan_api_cancel_job", "descripition": "Intelligent job cancellation with automatic invoice cleanup. First checks if the job has any invoice items: if yes, removes them automatically before canceling; if no, proceeds directly to cancellation. This handles the ServiceTitan requirement that jobs with invoice items cannot be canceled directly.", "inputSchema": {
  memo: {
    name: "memo",
    description: "Cancellation memo/notes (optional, defaults to 'cancel appointment').",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  reasonId: {
    name: "reasonId",
    description: "The cancellation reason ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  jobId: {
    name: "jobId",
    description: "The job ID to cancel.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Cancel Job from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Cancel Job"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_create_customer.ts
var node109 = { "name": "Create Customer", "id": "servicetitan_api_create_customer", "descripition": "Creates a new customer in ServiceTitan.", "inputSchema": {
  contacts: {
    name: "contacts",
    description: "Array of contact objects (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  locations: {
    name: "locations",
    description: "Array of location objects with address and optional contacts.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Customer address object with street, city, state, zip, country.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  type: {
    name: "type",
    description: "Customer type (Residential or Commercial).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  name: {
    name: "name",
    description: "Customer name.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create Customer from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Create Customer"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_create_customer_location.ts
var node110 = { "name": "Create Customer Location", "id": "servicetitan_api_create_customer_location", "descripition": "Creates a new location for a customer in ServiceTitan.", "inputSchema": {
  name: {
    name: "name",
    description: "Location name (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Location address object with street, city, state, zip, country.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customerId: {
    name: "customerId",
    description: "The customer ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create Customer Location from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Create Customer Location"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_create_job_for_existing_customer.ts
var node111 = { "name": "Create Job for Existing Customer", "id": "servicetitan_api_create_job_for_existing_customer", "descripition": "Creates a new job for an existing customer in ServiceTitan. Summary is required and will be used to automatically classify the job using GPT. Campaign ID is taken from MCP property.", "inputSchema": {
  priority: {
    name: "priority",
    description: "Job priority (defaults to High).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  jobTypeId: {
    name: "jobTypeId",
    description: "The job type ID (will be overridden by GPT classification).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  businessUnitId: {
    name: "businessUnitId",
    description: "The business unit ID (will be overridden by GPT classification).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customerType: {
    name: "customerType",
    description: "Customer type (Residential or Commercial). Optional, helps with classification.",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  incomingPhoneNumber: {
    name: "incomingPhoneNumber",
    description: "Caller's phone number to match campaign (optional, uses default if not provided).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  summary: {
    name: "summary",
    description: "Detailed job summary including: what happened during the call, the customer's issue/request, any special instructions, urgency level, and relevant timestamps. This is used for automatic job classification and stored as the job description. Example: 'Customer reported water heater leaking since yesterday evening. Requested emergency service. Prefers afternoon appointment.'",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  appointments: {
    name: "appointments",
    description: "Array of appointment objects with start, end, technicianIds, arrivalWindowStart, arrivalWindowEnd.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  locationId: {
    name: "locationId",
    description: "The existing location ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customerId: {
    name: "customerId",
    description: "The existing customer ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create Job for Existing Customer from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Create Job for Existing Customer"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_create_job_for_new_customer.ts
var node112 = { "name": "Create Job for New Customer", "id": "servicetitan_api_create_job_for_new_customer", "descripition": "Creates a new customer FIRST, then creates a job for that customer in ServiceTitan. Two-step process. Summary is required and will be used to automatically classify the job using GPT to determine businessUnitId and jobTypeId. Campaign ID is taken from MCP property.", "inputSchema": {
  priority: {
    name: "priority",
    description: "Job priority (defaults to High).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  jobTypeId: {
    name: "jobTypeId",
    description: "The job type ID (will be overridden by GPT classification).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  incomingPhoneNumber: {
    name: "incomingPhoneNumber",
    description: "Caller's phone number to match campaign (optional, uses default if not provided).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  businessUnitId: {
    name: "businessUnitId",
    description: "The business unit ID (will be overridden by GPT classification).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  summary: {
    name: "summary",
    description: "Job summary description. Required for automatic GPT classification.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  appointments: {
    name: "appointments",
    description: "Array of appointment objects with start, end, technicianIds, arrivalWindowStart, arrivalWindowEnd.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customer: {
    name: "customer",
    description: "Customer data object with name, type, locations, address, contacts.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Create Job for New Customer from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Create Job for New Customer"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_active_technicians.ts
var node113 = { "name": "Get Active Technicians", "id": "servicetitan_api_get_active_technicians", "descripition": "Retrieves all active technicians from ServiceTitan Settings API.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Active Technicians from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Active Technicians"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_appointments.ts
var node114 = { "name": "Get Appointments", "id": "servicetitan_api_get_appointments", "descripition": "Retrieves appointments for a specific job.", "inputSchema": {
  jobId: {
    name: "jobId",
    description: "The job ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Appointments from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Appointments"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_available_technicians.ts
var node115 = { "name": "Get Available Technicians", "id": "servicetitan_api_get_available_technicians", "descripition": "Retrieves both regular available technicians with their free time slots AND the on-call technician for a specific date.", "inputSchema": {
  summary: {
    name: "summary",
    description: "Job summary to determine business unit for filtering technicians. Only used when filter_technicians_by_business_unit is enabled.",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  date: {
    name: "date",
    description: "Target date in YYYY-MM-DD format (optional, defaults to today).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Available Technicians from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Available Technicians"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_business_units.ts
var node116 = { "name": "Get Business Units", "id": "servicetitan_api_get_business_units", "descripition": "Retrieves all active business units from ServiceTitan.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Business Units from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Business Units"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_campaigns.ts
var node117 = { "name": "Get Campaigns", "id": "servicetitan_api_get_campaigns", "descripition": "Retrieves all active campaigns from ServiceTitan.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Campaigns from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Campaigns"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_cancellation_reasons.ts
var node118 = { "name": "Get Cancellation Reasons", "id": "servicetitan_api_get_cancellation_reasons", "descripition": "Retrieves all available job cancellation reasons.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Cancellation Reasons from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Cancellation Reasons"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_customer_by_phone.ts
var node119 = { "name": "Get Customer by Phone", "id": "servicetitan_api_get_customer_by_phone", "descripition": "Retrieves customer information from ServiceTitan by phone number.", "inputSchema": {
  phone: {
    name: "phone",
    description: "The customer's phone number.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Customer by Phone from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Customer by Phone"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_customer_locations.ts
var node120 = { "name": "Get Customer Locations", "id": "servicetitan_api_get_customer_locations", "descripition": "Retrieves location information for a customer from ServiceTitan by customer ID.", "inputSchema": {
  customerId: {
    name: "customerId",
    description: "The customer's ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Customer Locations from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Customer Locations"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_geo_address.ts
var node121 = { "name": "Get Geo Address", "id": "servicetitan_api_get_geo_address", "descripition": "Geocodes an address using Google Maps Geocoding API. Takes a street address or ZIP code and returns geocoded address suggestions. Uses optional city, state, and country MCP properties to streamline search when provided.", "inputSchema": {
  street: {
    name: "street",
    description: "Street address or ZIP code to geocode.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Geo Address from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Geo Address"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_job_types.ts
var node122 = { "name": "Get Job Types", "id": "servicetitan_api_get_job_types", "descripition": "Retrieves all active job types from ServiceTitan.", "inputSchema": {
  // no params
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Job Types from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Job Types"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_get_jobs_by_customer.ts
var node123 = { "name": "Get Jobs by Customer", "id": "servicetitan_api_get_jobs_by_customer", "descripition": "Retrieves all jobs for a specific customer.", "inputSchema": {
  customerId: {
    name: "customerId",
    description: "The customer ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Get Jobs by Customer from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Get Jobs by Customer"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_reschedule_appointment.ts
var node124 = { "name": "Reschedule Appointment", "id": "servicetitan_api_reschedule_appointment", "descripition": "Reschedules an existing appointment in ServiceTitan.", "inputSchema": {
  arrivalWindowEnd: {
    name: "arrivalWindowEnd",
    description: "New arrival window end time (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  arrivalWindowStart: {
    name: "arrivalWindowStart",
    description: "New arrival window start time (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  end: {
    name: "end",
    description: "New appointment end time in ISO 8601 format (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  start: {
    name: "start",
    description: "New appointment start time in ISO 8601 format (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  appointmentId: {
    name: "appointmentId",
    description: "The appointment ID to reschedule.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Reschedule Appointment from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Reschedule Appointment"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_update_customer.ts
var node125 = { "name": "Update Customer", "id": "servicetitan_api_update_customer", "descripition": "Updates an existing customer in ServiceTitan.", "inputSchema": {
  contacts: {
    name: "contacts",
    description: "Array of contact objects (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Customer address object (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  type: {
    name: "type",
    description: "Customer type (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  name: {
    name: "name",
    description: "Customer name (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customerId: {
    name: "customerId",
    description: "The customer ID to update.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Customer from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Update Customer"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_update_customer_contact.ts
var node126 = { "name": "Update Customer Contact", "id": "servicetitan_api_update_customer_contact", "descripition": "Updates contact details (email and/or phone) for a customer.", "inputSchema": {
  phone: {
    name: "phone",
    description: "New phone number (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "New email address (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customerId: {
    name: "customerId",
    description: "The customer ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Customer Contact from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Update Customer Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_update_customer_details.ts
var node127 = { "name": "Update Customer Details", "id": "servicetitan_api_update_customer_details", "descripition": "Updates comprehensive customer details including name, type, address, and tags.", "inputSchema": {
  tagTypeIds: {
    name: "tagTypeIds",
    description: "Array of tag type IDs (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  address: {
    name: "address",
    description: "Customer address object (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  type: {
    name: "type",
    description: "Customer type (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  name: {
    name: "name",
    description: "Customer name (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  customerId: {
    name: "customerId",
    description: "The customer ID to update.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Customer Details from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Update Customer Details"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_update_job.ts
var node128 = { "name": "Update Job", "id": "servicetitan_api_update_job", "descripition": "Updates an existing job in ServiceTitan.", "inputSchema": {
  appointments: {
    name: "appointments",
    description: "Array of appointment objects (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  summary: {
    name: "summary",
    description: "Job summary (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  priority: {
    name: "priority",
    description: "Job priority (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  jobId: {
    name: "jobId",
    description: "The job ID to update.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Job from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Update Job"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/servicetitan_api_update_location_contact.ts
var node129 = { "name": "Update Location Contact", "id": "servicetitan_api_update_location_contact", "descripition": "Updates contact details (email and/or phone) for a location.", "inputSchema": {
  phone: {
    name: "phone",
    description: "New phone number (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  email: {
    name: "email",
    description: "New email address (optional).",
    required: false,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  },
  locationId: {
    name: "locationId",
    description: "The location ID.",
    required: true,
    validationSchema: /.*/,
    errorMessage: "",
    input: { type: "text" },
    parse: (value) => {
      try {
        return external_exports.string().parse(value);
      } catch (e) {
        return value;
      }
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Output of tool Update Location Contact from API ServiceTitan API",
    example: "",
    validator: (value) => true
  }
}, "groups": ["ServiceTitan API", "Update Location Contact"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/service_titan_technicion_sms.ts
var node130 = { "name": "Service Titan Technicion Sms", "id": "service_titan_technicion_sms", "descripition": "This will trigger sending sms and follow up call to the technicion", "inputSchema": {}, "outputSchema": {
  firstPhoneNumber: {
    name: "First Phone Number",
    description: "First phone number of the technicion",
    example: "+11112223333",
    validator: function(value) {
      if (/^\+?[1-9]\d{1,14}$/.test(value)) {
        return true;
      } else {
        throw new Error("Please enter a valid phone number");
      }
    },
    required: true
  },
  secondPhoneNumber: {
    name: "Second Phone Number",
    description: "Second phone number of the technicion, use an empty string if not available",
    example: "+11112223333",
    validator: function(value) {
      if (value === "" || /^\+?[1-9]\d{1,14}$/.test(value)) {
        return true;
      } else {
        throw new Error(
          "Please enter a valid phone number or leave it empty"
        );
      }
    },
    required: true
  },
  message: {
    name: "SMS Message Content",
    description: "The content of the SMS message to be sent to the technicion",
    example: "You got a new job assigned. Please check your app for details.",
    validator: function(value) {
      if (value.length > 0 && value.length <= 1600) {
        return true;
      } else {
        throw new Error(
          "Please enter a valid message (maximum 1600 characters)"
        );
      }
    },
    required: false
  },
  action: {
    name: "Action",
    description: "initiated \u2014 send SMS; confirmed \u2014 SMS verified by technician.",
    example: "initiate",
    validator: function(value) {
      if (value === "initiate" || value === "confirmed") {
        return true;
      } else {
        throw new Error('Action must be either "initiate" or "confirmed"');
      }
    },
    required: true
  },
  appointmentTime: {
    name: "Appointment Time",
    description: "The time of the appointment",
    example: "2023-10-01T10:00:00Z",
    validator: function(value) {
      return true;
    },
    required: true
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/split_for_test.ts
var node131 = { "name": "Split For Test", "id": "split_for_test", "descripition": "Split workflow execution between testA and testB branches based on a ratio", "inputSchema": {
  splitRatio: {
    description: "Ratio to split between testA and testB (0-1, represents fraction going to testA)",
    required: true,
    name: "",
    validationSchema: /^0(\.\d+)?$|^1(\.0+)?$/,
    errorMessage: "",
    input: {
      type: "number",
      min: 0,
      max: 1,
      step: 0.01,
      default: 0.5
    },
    parse: function(value) {
      throw new Error("Function not implemented.");
    }
  }
}, "outputSchema": {
  splitResult: {
    name: "Split Result",
    description: "Result of the split",
    example: "test_a",
    validator: function(value) {
      return ["test_a", "test_b"].includes(value);
    }
  }
}, "groups": ["Control Flow"], "branches": { "test_a": { "id": "test_a", "name": "TestA", "description": "First branch of the split" }, "test_b": { "id": "test_b", "name": "TestB", "description": "Second branch of the split" } }, "isTriggerNode": false, "cost": 0 };

// src/store_variable.ts
var node132 = { "name": "Store Variable", "id": "store_variable", "descripition": "Stores a variable for later use", "inputSchema": {
  uniqueKey: {
    name: "Unique Key",
    description: "A unique key to identify the variable across different workflow runs. For example, if you use {{phone number}} variable of a lead as the unique key, the variable will be unique per phone number.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid unique key",
    required: true,
    input: {
      type: "text",
      placeholder: "myUniqueKey"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableName: {
    name: "Variable Name",
    description: "The name of the variable to get",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid variable name",
    required: true,
    input: {
      type: "text",
      placeholder: "myVariable"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableValue: {
    name: "Value",
    description: "The value to store in the variable",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "myValue"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Variables", "Control Flow"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/waittime.ts
var node133 = { "name": "Wait Time", "id": "waittime", "descripition": "Pauses the workflow execution for a specified duration before proceeding to the next step", "inputSchema": {
  waitType: {
    name: "Wait Type",
    description: "Choose how to specify the wait time",
    validationSchema: /^(duration|datetime|specificHour)$/,
    errorMessage: "Invalid wait type",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Duration", value: "duration" },
        { label: "Until Datetime", value: "datetime" },
        { label: "Specific Hour", value: "specificHour" }
      ]
    },
    parse: function(value) {
      return ["duration", "datetime", "specificHour"].includes(value) ? value : "duration";
    }
  },
  duration: {
    name: "Duration",
    description: "Amount of time to wait (used when Wait Type is Duration)",
    validationSchema: /^\d+$/,
    getVisible: (inputValues) => {
      return inputValues.waitType === "duration";
    },
    errorMessage: "Duration must be a positive number",
    required: false,
    input: {
      type: "number",
      min: 1,
      max: 1e3
      // Reasonable max value that works with different units
    },
    parse: function(value) {
      const parsed = Number(value);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error("Duration must be a positive number");
      }
      return parsed;
    }
  },
  unit: {
    name: "Time Unit",
    getVisible: (inputValues) => {
      return inputValues.waitType === "duration";
    },
    description: "Unit of time for the duration (used when Wait Type is Duration)",
    validationSchema: /^(minutes|hours|days)$/,
    errorMessage: "Invalid time unit",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Minutes", value: "minutes" },
        { label: "Hours", value: "hours" },
        { label: "Days", value: "days" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  targetDatetime: {
    name: "Target Datetime",
    getVisible: (inputValues) => {
      return inputValues.waitType === "datetime";
    },
    description: "The specific date and time to wait until (ISO format, used when Wait Type is Until Datetime)",
    validationSchema: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/,
    errorMessage: "Invalid datetime format. Please use ISO format (YYYY-MM-DDThh:mm:ss.sssZ)",
    required: false,
    input: {
      type: "datetime"
    },
    parse: function(value) {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
      }
      return value;
    }
  },
  daysFromNow: {
    name: "Days From Now",
    getVisible: (inputValues) => {
      return inputValues.waitType === "specificHour";
    },
    description: "Number of days from now (used when Wait Type is Specific Hour)",
    validationSchema: /^\d+$/,
    errorMessage: "Days must be a non-negative number",
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 365
      // Reasonable max value for days
    },
    parse: function(value) {
      const parsed = Number(value);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error("Days must be a non-negative number");
      }
      return parsed;
    }
  },
  hourOfDay: {
    name: "Hour of Day",
    getVisible: (inputValues) => {
      return inputValues.waitType === "specificHour";
    },
    description: "Hour of the day (0-23) (used when Wait Type is Specific Hour)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Hour must be between 0 and 23",
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      const parsed = Number(value);
      if (isNaN(parsed) || parsed < 0 || parsed > 23) {
        throw new Error("Hour must be between 0 and 23");
      }
      return parsed;
    }
  },
  timezone: {
    name: "Timezone",
    getVisible: (inputValues) => {
      return inputValues.waitType === "specificHour";
    },
    description: "Timezone for the specific hour wait (used when Wait Type is Specific Hour)",
    // This regex is a basic validation for common timezone formats (e.g., "America/New_York", "UTC").
    // It's not exhaustive for all possible IANA timezones, but covers common cases.
    validationSchema: /^[A-Za-z_]+\/[A-Za-z_]+$|^UTC$/,
    errorMessage: "Invalid timezone format (e.g., 'America/New_York' or 'UTC')",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Africa/Abidjan", value: "Africa/Abidjan" },
        { label: "Africa/Accra", value: "Africa/Accra" },
        { label: "Africa/Addis_Ababa", value: "Africa/Addis_Ababa" },
        { label: "Africa/Algiers", value: "Africa/Algiers" },
        { label: "Africa/Asmara", value: "Africa/Asmara" },
        { label: "Africa/Asmera", value: "Africa/Asmera" },
        { label: "Africa/Bamako", value: "Africa/Bamako" },
        { label: "Africa/Bangui", value: "Africa/Bangui" },
        { label: "Africa/Banjul", value: "Africa/Banjul" },
        { label: "Africa/Bissau", value: "Africa/Bissau" },
        { label: "Africa/Blantyre", value: "Africa/Blantyre" },
        { label: "Africa/Brazzaville", value: "Africa/Brazzaville" },
        { label: "Africa/Bujumbura", value: "Africa/Bujumbura" },
        { label: "Africa/Cairo", value: "Africa/Cairo" },
        { label: "Africa/Casablanca", value: "Africa/Casablanca" },
        { label: "Africa/Ceuta", value: "Africa/Ceuta" },
        { label: "Africa/Conakry", value: "Africa/Conakry" },
        { label: "Africa/Dakar", value: "Africa/Dakar" },
        { label: "Africa/Dar_es_Salaam", value: "Africa/Dar_es_Salaam" },
        { label: "Africa/Djibouti", value: "Africa/Djibouti" },
        { label: "Africa/Douala", value: "Africa/Douala" },
        { label: "Africa/El_Aaiun", value: "Africa/El_Aaiun" },
        { label: "Africa/Freetown", value: "Africa/Freetown" },
        { label: "Africa/Gaborone", value: "Africa/Gaborone" },
        { label: "Africa/Harare", value: "Africa/Harare" },
        { label: "Africa/Johannesburg", value: "Africa/Johannesburg" },
        { label: "Africa/Juba", value: "Africa/Juba" },
        { label: "Africa/Kampala", value: "Africa/Kampala" },
        { label: "Africa/Khartoum", value: "Africa/Khartoum" },
        { label: "Africa/Kigali", value: "Africa/Kigali" },
        { label: "Africa/Kinshasa", value: "Africa/Kinshasa" },
        { label: "Africa/Lagos", value: "Africa/Lagos" },
        { label: "Africa/Libreville", value: "Africa/Libreville" },
        { label: "Africa/Lome", value: "Africa/Lome" },
        { label: "Africa/Luanda", value: "Africa/Luanda" },
        { label: "Africa/Lubumbashi", value: "Africa/Lubumbashi" },
        { label: "Africa/Lusaka", value: "Africa/Lusaka" },
        { label: "Africa/Malabo", value: "Africa/Malabo" },
        { label: "Africa/Maputo", value: "Africa/Maputo" },
        { label: "Africa/Maseru", value: "Africa/Maseru" },
        { label: "Africa/Mbabane", value: "Africa/Mbabane" },
        { label: "Africa/Mogadishu", value: "Africa/Mogadishu" },
        { label: "Africa/Monrovia", value: "Africa/Monrovia" },
        { label: "Africa/Nairobi", value: "Africa/Nairobi" },
        { label: "Africa/Ndjamena", value: "Africa/Ndjamena" },
        { label: "Africa/Niamey", value: "Africa/Niamey" },
        { label: "Africa/Nouakchott", value: "Africa/Nouakchott" },
        { label: "Africa/Ouagadougou", value: "Africa/Ouagadougou" },
        { label: "Africa/Porto-Novo", value: "Africa/Porto-Novo" },
        { label: "Africa/Sao_Tome", value: "Africa/Sao_Tome" },
        { label: "Africa/Timbuktu", value: "Africa/Timbuktu" },
        { label: "Africa/Tripoli", value: "Africa/Tripoli" },
        { label: "Africa/Tunis", value: "Africa/Tunis" },
        { label: "Africa/Windhoek", value: "Africa/Windhoek" },
        { label: "America/Adak", value: "America/Adak" },
        { label: "America/Anchorage", value: "America/Anchorage" },
        { label: "America/Anguilla", value: "America/Anguilla" },
        { label: "America/Antigua", value: "America/Antigua" },
        { label: "America/Araguaina", value: "America/Araguaina" },
        {
          label: "America/Argentina/Buenos_Aires",
          value: "America/Argentina/Buenos_Aires"
        },
        {
          label: "America/Argentina/Catamarca",
          value: "America/Argentina/Catamarca"
        },
        {
          label: "America/Argentina/ComodRivadavia",
          value: "America/Argentina/ComodRivadavia"
        },
        {
          label: "America/Argentina/Cordoba",
          value: "America/Argentina/Cordoba"
        },
        {
          label: "America/Argentina/Jujuy",
          value: "America/Argentina/Jujuy"
        },
        {
          label: "America/Argentina/La_Rioja",
          value: "America/Argentina/La_Rioja"
        },
        {
          label: "America/Argentina/Mendoza",
          value: "America/Argentina/Mendoza"
        },
        {
          label: "America/Argentina/Rio_Gallegos",
          value: "America/Argentina/Rio_Gallegos"
        },
        {
          label: "America/Argentina/Salta",
          value: "America/Argentina/Salta"
        },
        {
          label: "America/Argentina/San_Juan",
          value: "America/Argentina/San_Juan"
        },
        {
          label: "America/Argentina/San_Luis",
          value: "America/Argentina/San_Luis"
        },
        {
          label: "America/Argentina/Tucuman",
          value: "America/Argentina/Tucuman"
        },
        {
          label: "America/Argentina/Ushuaia",
          value: "America/Argentina/Ushuaia"
        },
        { label: "America/Aruba", value: "America/Aruba" },
        { label: "America/Asuncion", value: "America/Asuncion" },
        { label: "America/Atikokan", value: "America/Atikokan" },
        { label: "America/Atka", value: "America/Atka" },
        { label: "America/Bahia", value: "America/Bahia" },
        { label: "America/Bahia_Banderas", value: "America/Bahia_Banderas" },
        { label: "America/Barbados", value: "America/Barbados" },
        { label: "America/Belem", value: "America/Belem" },
        { label: "America/Belize", value: "America/Belize" },
        { label: "America/Blanc-Sablon", value: "America/Blanc-Sablon" },
        { label: "America/Boa_Vista", value: "America/Boa_Vista" },
        { label: "America/Bogota", value: "America/Bogota" },
        { label: "America/Boise", value: "America/Boise" },
        { label: "America/Buenos_Aires", value: "America/Buenos_Aires" },
        { label: "America/Cambridge_Bay", value: "America/Cambridge_Bay" },
        { label: "America/Campo_Grande", value: "America/Campo_Grande" },
        { label: "America/Cancun", value: "America/Cancun" },
        { label: "America/Caracas", value: "America/Caracas" },
        { label: "America/Catamarca", value: "America/Catamarca" },
        { label: "America/Cayenne", value: "America/Cayenne" },
        { label: "America/Cayman", value: "America/Cayman" },
        { label: "America/Chicago", value: "America/Chicago" },
        { label: "America/Chihuahua", value: "America/Chihuahua" },
        { label: "America/Ciudad_Juarez", value: "America/Ciudad_Juarez" },
        { label: "America/Coral_Harbour", value: "America/Coral_Harbour" },
        { label: "America/Cordoba", value: "America/Cordoba" },
        { label: "America/Costa_Rica", value: "America/Costa_Rica" },
        { label: "America/Coyhaique", value: "America/Coyhaique" },
        { label: "America/Creston", value: "America/Creston" },
        { label: "America/Cuiaba", value: "America/Cuiaba" },
        { label: "America/Curacao", value: "America/Curacao" },
        { label: "America/Danmarkshavn", value: "America/Danmarkshavn" },
        { label: "America/Dawson", value: "America/Dawson" },
        { label: "America/Dawson_Creek", value: "America/Dawson_Creek" },
        { label: "America/Denver", value: "America/Denver" },
        { label: "America/Detroit", value: "America/Detroit" },
        { label: "America/Dominica", value: "America/Dominica" },
        { label: "America/Edmonton", value: "America/Edmonton" },
        { label: "America/Eirunepe", value: "America/Eirunepe" },
        { label: "America/El_Salvador", value: "America/El_Salvador" },
        { label: "America/Ensenada", value: "America/Ensenada" },
        { label: "America/Fort_Nelson", value: "America/Fort_Nelson" },
        { label: "America/Fort_Wayne", value: "America/Fort_Wayne" },
        { label: "America/Fortaleza", value: "America/Fortaleza" },
        { label: "America/Glace_Bay", value: "America/Glace_Bay" },
        { label: "America/Godthab", value: "America/Godthab" },
        { label: "America/Goose_Bay", value: "America/Goose_Bay" },
        { label: "America/Grand_Turk", value: "America/Grand_Turk" },
        { label: "America/Grenada", value: "America/Grenada" },
        { label: "America/Guadeloupe", value: "America/Guadeloupe" },
        { label: "America/Guatemala", value: "America/Guatemala" },
        { label: "America/Guayaquil", value: "America/Guayaquil" },
        { label: "America/Guyana", value: "America/Guyana" },
        { label: "America/Halifax", value: "America/Halifax" },
        { label: "America/Havana", value: "America/Havana" },
        { label: "America/Hermosillo", value: "America/Hermosillo" },
        {
          label: "America/Indiana/Indianapolis",
          value: "America/Indiana/Indianapolis"
        },
        { label: "America/Indiana/Knox", value: "America/Indiana/Knox" },
        {
          label: "America/Indiana/Marengo",
          value: "America/Indiana/Marengo"
        },
        {
          label: "America/Indiana/Petersburg",
          value: "America/Indiana/Petersburg"
        },
        {
          label: "America/Indiana/Tell_City",
          value: "America/Indiana/Tell_City"
        },
        { label: "America/Indiana/Vevay", value: "America/Indiana/Vevay" },
        {
          label: "America/Indiana/Vincennes",
          value: "America/Indiana/Vincennes"
        },
        {
          label: "America/Indiana/Winamac",
          value: "America/Indiana/Winamac"
        },
        { label: "America/Indianapolis", value: "America/Indianapolis" },
        { label: "America/Inuvik", value: "America/Inuvik" },
        { label: "America/Iqaluit", value: "America/Iqaluit" },
        { label: "America/Jamaica", value: "America/Jamaica" },
        { label: "America/Jujuy", value: "America/Jujuy" },
        { label: "America/Juneau", value: "America/Juneau" },
        {
          label: "America/Kentucky/Louisville",
          value: "America/Kentucky/Louisville"
        },
        {
          label: "America/Kentucky/Monticello",
          value: "America/Kentucky/Monticello"
        },
        { label: "America/Knox_IN", value: "America/Knox_IN" },
        { label: "America/Kralendijk", value: "America/Kralendijk" },
        { label: "America/La_Paz", value: "America/La_Paz" },
        { label: "America/Lima", value: "America/Lima" },
        { label: "America/Los_Angeles", value: "America/Los_Angeles" },
        { label: "America/Louisville", value: "America/Louisville" },
        { label: "America/Lower_Princes", value: "America/Lower_Princes" },
        { label: "America/Maceio", value: "America/Maceio" },
        { label: "America/Managua", value: "America/Managua" },
        { label: "America/Manaus", value: "America/Manaus" },
        { label: "America/Marigot", value: "America/Marigot" },
        { label: "America/Martinique", value: "America/Martinique" },
        { label: "America/Matamoros", value: "America/Matamoros" },
        { label: "America/Mazatlan", value: "America/Mazatlan" },
        { label: "America/Mendoza", value: "America/Mendoza" },
        { label: "America/Menominee", value: "America/Menominee" },
        { label: "America/Merida", value: "America/Merida" },
        { label: "America/Metlakatla", value: "America/Metlakatla" },
        { label: "America/Mexico_City", value: "America/Mexico_City" },
        { label: "America/Miquelon", value: "America/Miquelon" },
        { label: "America/Moncton", value: "America/Moncton" },
        { label: "America/Monterrey", value: "America/Monterrey" },
        { label: "America/Montevideo", value: "America/Montevideo" },
        { label: "America/Montreal", value: "America/Montreal" },
        { label: "America/Montserrat", value: "America/Montserrat" },
        { label: "America/Nassau", value: "America/Nassau" },
        { label: "America/New_York", value: "America/New_York" },
        { label: "America/Nipigon", value: "America/Nipigon" },
        { label: "America/Nome", value: "America/Nome" },
        { label: "America/Noronha", value: "America/Noronha" },
        {
          label: "America/North_Dakota/Beulah",
          value: "America/North_Dakota/Beulah"
        },
        {
          label: "America/North_Dakota/Center",
          value: "America/North_Dakota/Center"
        },
        {
          label: "America/North_Dakota/New_Salem",
          value: "America/North_Dakota/New_Salem"
        },
        { label: "America/Nuuk", value: "America/Nuuk" },
        { label: "America/Ojinaga", value: "America/Ojinaga" },
        { label: "America/Panama", value: "America/Panama" },
        { label: "America/Pangnirtung", value: "America/Pangnirtung" },
        { label: "America/Paramaribo", value: "America/Paramaribo" },
        { label: "America/Phoenix", value: "America/Phoenix" },
        { label: "America/Port-au-Prince", value: "America/Port-au-Prince" },
        { label: "America/Port_of_Spain", value: "America/Port_of_Spain" },
        { label: "America/Porto_Acre", value: "America/Porto_Acre" },
        { label: "America/Porto_Velho", value: "America/Porto_Velho" },
        { label: "America/Puerto_Rico", value: "America/Puerto_Rico" },
        { label: "America/Punta_Arenas", value: "America/Punta_Arenas" },
        { label: "America/Rainy_River", value: "America/Rainy_River" },
        { label: "America/Rankin_Inlet", value: "America/Rankin_Inlet" },
        { label: "America/Recife", value: "America/Recife" },
        { label: "America/Regina", value: "America/Regina" },
        { label: "America/Resolute", value: "America/Resolute" },
        { label: "America/Rio_Branco", value: "America/Rio_Branco" },
        { label: "America/Rosario", value: "America/Rosario" },
        { label: "America/Santa_Isabel", value: "America/Santa_Isabel" },
        { label: "America/Santarem", value: "America/Santarem" },
        { label: "America/Santiago", value: "America/Santiago" },
        { label: "America/Santo_Domingo", value: "America/Santo_Domingo" },
        { label: "America/Sao_Paulo", value: "America/Sao_Paulo" },
        { label: "America/Scoresbysund", value: "America/Scoresbysund" },
        { label: "America/Shiprock", value: "America/Shiprock" },
        { label: "America/Sitka", value: "America/Sitka" },
        { label: "America/St_Barthelemy", value: "America/St_Barthelemy" },
        { label: "America/St_Johns", value: "America/St_Johns" },
        { label: "America/St_Kitts", value: "America/St_Kitts" },
        { label: "America/St_Lucia", value: "America/St_Lucia" },
        { label: "America/St_Thomas", value: "America/St_Thomas" },
        { label: "America/St_Vincent", value: "America/St_Vincent" },
        { label: "America/Swift_Current", value: "America/Swift_Current" },
        { label: "America/Tegucigalpa", value: "America/Tegucigalpa" },
        { label: "America/Thule", value: "America/Thule" },
        { label: "America/Thunder_Bay", value: "America/Thunder_Bay" },
        { label: "America/Tijuana", value: "America/Tijuana" },
        { label: "America/Toronto", value: "America/Toronto" },
        { label: "America/Tortola", value: "America/Tortola" },
        { label: "America/Vancouver", value: "America/Vancouver" },
        { label: "America/Virgin", value: "America/Virgin" },
        { label: "America/Whitehorse", value: "America/Whitehorse" },
        { label: "America/Winnipeg", value: "America/Winnipeg" },
        { label: "America/Yakutat", value: "America/Yakutat" },
        { label: "America/Yellowknife", value: "America/Yellowknife" },
        { label: "Antarctica/Casey", value: "Antarctica/Casey" },
        { label: "Antarctica/Davis", value: "Antarctica/Davis" },
        {
          label: "Antarctica/DumontDUrville",
          value: "Antarctica/DumontDUrville"
        },
        { label: "Antarctica/Macquarie", value: "Antarctica/Macquarie" },
        { label: "Antarctica/Mawson", value: "Antarctica/Mawson" },
        { label: "Antarctica/McMurdo", value: "Antarctica/McMurdo" },
        { label: "Antarctica/Palmer", value: "Antarctica/Palmer" },
        { label: "Antarctica/Rothera", value: "Antarctica/Rothera" },
        { label: "Antarctica/South_Pole", value: "Antarctica/South_Pole" },
        { label: "Antarctica/Syowa", value: "Antarctica/Syowa" },
        { label: "Antarctica/Troll", value: "Antarctica/Troll" },
        { label: "Antarctica/Vostok", value: "Antarctica/Vostok" },
        { label: "Arctic/Longyearbyen", value: "Arctic/Longyearbyen" },
        { label: "Asia/Aden", value: "Asia/Aden" },
        { label: "Asia/Almaty", value: "Asia/Almaty" },
        { label: "Asia/Amman", value: "Asia/Amman" },
        { label: "Asia/Anadyr", value: "Asia/Anadyr" },
        { label: "Asia/Aqtau", value: "Asia/Aqtau" },
        { label: "Asia/Aqtobe", value: "Asia/Aqtobe" },
        { label: "Asia/Ashgabat", value: "Asia/Ashgabat" },
        { label: "Asia/Ashkhabad", value: "Asia/Ashkhabad" },
        { label: "Asia/Atyrau", value: "Asia/Atyrau" },
        { label: "Asia/Baghdad", value: "Asia/Baghdad" },
        { label: "Asia/Bahrain", value: "Asia/Bahrain" },
        { label: "Asia/Baku", value: "Asia/Baku" },
        { label: "Asia/Bangkok", value: "Asia/Bangkok" },
        { label: "Asia/Barnaul", value: "Asia/Barnaul" },
        { label: "Asia/Beirut", value: "Asia/Beirut" },
        { label: "Asia/Bishkek", value: "Asia/Bishkek" },
        { label: "Asia/Brunei", value: "Asia/Brunei" },
        { label: "Asia/Calcutta", value: "Asia/Calcutta" },
        { label: "Asia/Chita", value: "Asia/Chita" },
        { label: "Asia/Choibalsan", value: "Asia/Choibalsan" },
        { label: "Asia/Chongqing", value: "Asia/Chongqing" },
        { label: "Asia/Chungking", value: "Asia/Chungking" },
        { label: "Asia/Colombo", value: "Asia/Colombo" },
        { label: "Asia/Dacca", value: "Asia/Dacca" },
        { label: "Asia/Damascus", value: "Asia/Damascus" },
        { label: "Asia/Dhaka", value: "Asia/Dhaka" },
        { label: "Asia/Dili", value: "Asia/Dili" },
        { label: "Asia/Dubai", value: "Asia/Dubai" },
        { label: "Asia/Dushanbe", value: "Asia/Dushanbe" },
        { label: "Asia/Famagusta", value: "Asia/Famagusta" },
        { label: "Asia/Gaza", value: "Asia/Gaza" },
        { label: "Asia/Harbin", value: "Asia/Harbin" },
        { label: "Asia/Hebron", value: "Asia/Hebron" },
        { label: "Asia/Ho_Chi_Minh", value: "Asia/Ho_Chi_Minh" },
        { label: "Asia/Hong_Kong", value: "Asia/Hong_Kong" },
        { label: "Asia/Hovd", value: "Asia/Hovd" },
        { label: "Asia/Irkutsk", value: "Asia/Irkutsk" },
        { label: "Asia/Istanbul", value: "Asia/Istanbul" },
        { label: "Asia/Jakarta", value: "Asia/Jakarta" },
        { label: "Asia/Jayapura", value: "Asia/Jayapura" },
        { label: "Asia/Jerusalem", value: "Asia/Jerusalem" },
        { label: "Asia/Kabul", value: "Asia/Kabul" },
        { label: "Asia/Kamchatka", value: "Asia/Kamchatka" },
        { label: "Asia/Karachi", value: "Asia/Karachi" },
        { label: "Asia/Kashgar", value: "Asia/Kashgar" },
        { label: "Asia/Kathmandu", value: "Asia/Kathmandu" },
        { label: "Asia/Katmandu", value: "Asia/Katmandu" },
        { label: "Asia/Khandyga", value: "Asia/Khandyga" },
        { label: "Asia/Kolkata", value: "Asia/Kolkata" },
        { label: "Asia/Krasnoyarsk", value: "Asia/Krasnoyarsk" },
        { label: "Asia/Kuala_Lumpur", value: "Asia/Kuala_Lumpur" },
        { label: "Asia/Kuching", value: "Asia/Kuching" },
        { label: "Asia/Kuwait", value: "Asia/Kuwait" },
        { label: "Asia/Macao", value: "Asia/Macao" },
        { label: "Asia/Macau", value: "Asia/Macau" },
        { label: "Asia/Magadan", value: "Asia/Magadan" },
        { label: "Asia/Makassar", value: "Asia/Makassar" },
        { label: "Asia/Manila", value: "Asia/Manila" },
        { label: "Asia/Muscat", value: "Asia/Muscat" },
        { label: "Asia/Nicosia", value: "Asia/Nicosia" },
        { label: "Asia/Novokuznetsk", value: "Asia/Novokuznetsk" },
        { label: "Asia/Novosibirsk", value: "Asia/Novosibirsk" },
        { label: "Asia/Omsk", value: "Asia/Omsk" },
        { label: "Asia/Oral", value: "Asia/Oral" },
        { label: "Asia/Phnom_Penh", value: "Asia/Phnom_Penh" },
        { label: "Asia/Pontianak", value: "Asia/Pontianak" },
        { label: "Asia/Pyongyang", value: "Asia/Pyongyang" },
        { label: "Asia/Qatar", value: "Asia/Qatar" },
        { label: "Asia/Qostanay", value: "Asia/Qostanay" },
        { label: "Asia/Qyzylorda", value: "Asia/Qyzylorda" },
        { label: "Asia/Rangoon", value: "Asia/Rangoon" },
        { label: "Asia/Riyadh", value: "Asia/Riyadh" },
        { label: "Asia/Saigon", value: "Asia/Saigon" },
        { label: "Asia/Sakhalin", value: "Asia/Sakhalin" },
        { label: "Asia/Samarkand", value: "Asia/Samarkand" },
        { label: "Asia/Seoul", value: "Asia/Seoul" },
        { label: "Asia/Shanghai", value: "Asia/Shanghai" },
        { label: "Asia/Singapore", value: "Asia/Singapore" },
        { label: "Asia/Srednekolymsk", value: "Asia/Srednekolymsk" },
        { label: "Asia/Taipei", value: "Asia/Taipei" },
        { label: "Asia/Tashkent", value: "Asia/Tashkent" },
        { label: "Asia/Tbilisi", value: "Asia/Tbilisi" },
        { label: "Asia/Tehran", value: "Asia/Tehran" },
        { label: "Asia/Tel_Aviv", value: "Asia/Tel_Aviv" },
        { label: "Asia/Thimbu", value: "Asia/Thimbu" },
        { label: "Asia/Thimphu", value: "Asia/Thimphu" },
        { label: "Asia/Tokyo", value: "Asia/Tokyo" },
        { label: "Asia/Tomsk", value: "Asia/Tomsk" },
        { label: "Asia/Ujung_Pandang", value: "Asia/Ujung_Pandang" },
        { label: "Asia/Ulaanbaatar", value: "Asia/Ulaanbaatar" },
        { label: "Asia/Ulan_Bator", value: "Asia/Ulan_Bator" },
        { label: "Asia/Urumqi", value: "Asia/Urumqi" },
        { label: "Asia/Ust-Nera", value: "Asia/Ust-Nera" },
        { label: "Asia/Vientiane", value: "Asia/Vientiane" },
        { label: "Asia/Vladivostok", value: "Asia/Vladivostok" },
        { label: "Asia/Yakutsk", value: "Asia/Yakutsk" },
        { label: "Asia/Yangon", value: "Asia/Yangon" },
        { label: "Asia/Yekaterinburg", value: "Asia/Yekaterinburg" },
        { label: "Asia/Yerevan", value: "Asia/Yerevan" },
        { label: "Atlantic/Azores", value: "Atlantic/Azores" },
        { label: "Atlantic/Bermuda", value: "Atlantic/Bermuda" },
        { label: "Atlantic/Canary", value: "Atlantic/Canary" },
        { label: "Atlantic/Cape_Verde", value: "Atlantic/Cape_Verde" },
        { label: "Atlantic/Faeroe", value: "Atlantic/Faeroe" },
        { label: "Atlantic/Faroe", value: "Atlantic/Faroe" },
        { label: "Atlantic/Jan_Mayen", value: "Atlantic/Jan_Mayen" },
        { label: "Atlantic/Madeira", value: "Atlantic/Madeira" },
        { label: "Atlantic/Reykjavik", value: "Atlantic/Reykjavik" },
        { label: "Atlantic/South_Georgia", value: "Atlantic/South_Georgia" },
        { label: "Atlantic/St_Helena", value: "Atlantic/St_Helena" },
        { label: "Atlantic/Stanley", value: "Atlantic/Stanley" },
        { label: "Australia/ACT", value: "Australia/ACT" },
        { label: "Australia/Adelaide", value: "Australia/Adelaide" },
        { label: "Australia/Brisbane", value: "Australia/Brisbane" },
        { label: "Australia/Broken_Hill", value: "Australia/Broken_Hill" },
        { label: "Australia/Canberra", value: "Australia/Canberra" },
        { label: "Australia/Currie", value: "Australia/Currie" },
        { label: "Australia/Darwin", value: "Australia/Darwin" },
        { label: "Australia/Eucla", value: "Australia/Eucla" },
        { label: "Australia/Hobart", value: "Australia/Hobart" },
        { label: "Australia/LHI", value: "Australia/LHI" },
        { label: "Australia/Lindeman", value: "Australia/Lindeman" },
        { label: "Australia/Lord_Howe", value: "Australia/Lord_Howe" },
        { label: "Australia/Melbourne", value: "Australia/Melbourne" },
        { label: "Australia/NSW", value: "Australia/NSW" },
        { label: "Australia/North", value: "Australia/North" },
        { label: "Australia/Perth", value: "Australia/Perth" },
        { label: "Australia/Queensland", value: "Australia/Queensland" },
        { label: "Australia/South", value: "Australia/South" },
        { label: "Australia/Sydney", value: "Australia/Sydney" },
        { label: "Australia/Tasmania", value: "Australia/Tasmania" },
        { label: "Australia/Victoria", value: "Australia/Victoria" },
        { label: "Australia/West", value: "Australia/West" },
        { label: "Australia/Yancowinna", value: "Australia/Yancowinna" },
        { label: "Brazil/Acre", value: "Brazil/Acre" },
        { label: "Brazil/DeNoronha", value: "Brazil/DeNoronha" },
        { label: "Brazil/East", value: "Brazil/East" },
        { label: "Brazil/West", value: "Brazil/West" },
        { label: "CET", value: "CET" },
        { label: "CST6CDT", value: "CST6CDT" },
        { label: "Canada/Atlantic", value: "Canada/Atlantic" },
        { label: "Canada/Central", value: "Canada/Central" },
        { label: "Canada/Eastern", value: "Canada/Eastern" },
        { label: "Canada/Mountain", value: "Canada/Mountain" },
        { label: "Canada/Newfoundland", value: "Canada/Newfoundland" },
        { label: "Canada/Pacific", value: "Canada/Pacific" },
        { label: "Canada/Saskatchewan", value: "Canada/Saskatchewan" },
        { label: "Canada/Yukon", value: "Canada/Yukon" },
        { label: "Chile/Continental", value: "Chile/Continental" },
        { label: "Chile/EasterIsland", value: "Chile/EasterIsland" },
        { label: "Cuba", value: "Cuba" },
        { label: "EET", value: "EET" },
        { label: "EST", value: "EST" },
        { label: "EST5EDT", value: "EST5EDT" },
        { label: "Egypt", value: "Egypt" },
        { label: "Eire", value: "Eire" },
        { label: "Etc/GMT", value: "Etc/GMT" },
        { label: "Etc/GMT+0", value: "Etc/GMT+0" },
        { label: "Etc/GMT+1", value: "Etc/GMT+1" },
        { label: "Etc/GMT+10", value: "Etc/GMT+10" },
        { label: "Etc/GMT+11", value: "Etc/GMT+11" },
        { label: "Etc/GMT+12", value: "Etc/GMT+12" },
        { label: "Etc/GMT+2", value: "Etc/GMT+2" },
        { label: "Etc/GMT+3", value: "Etc/GMT+3" },
        { label: "Etc/GMT+4", value: "Etc/GMT+4" },
        { label: "Etc/GMT+5", value: "Etc/GMT+5" },
        { label: "Etc/GMT+6", value: "Etc/GMT+6" },
        { label: "Etc/GMT+7", value: "Etc/GMT+7" },
        { label: "Etc/GMT+8", value: "Etc/GMT+8" },
        { label: "Etc/GMT+9", value: "Etc/GMT+9" },
        { label: "Etc/GMT-0", value: "Etc/GMT-0" },
        { label: "Etc/GMT-1", value: "Etc/GMT-1" },
        { label: "Etc/GMT-10", value: "Etc/GMT-10" },
        { label: "Etc/GMT-11", value: "Etc/GMT-11" },
        { label: "Etc/GMT-12", value: "Etc/GMT-12" },
        { label: "Etc/GMT-13", value: "Etc/GMT-13" },
        { label: "Etc/GMT-14", value: "Etc/GMT-14" },
        { label: "Etc/GMT-2", value: "Etc/GMT-2" },
        { label: "Etc/GMT-3", value: "Etc/GMT-3" },
        { label: "Etc/GMT-4", value: "Etc/GMT-4" },
        { label: "Etc/GMT-5", value: "Etc/GMT-5" },
        { label: "Etc/GMT-6", value: "Etc/GMT-6" },
        { label: "Etc/GMT-7", value: "Etc/GMT-7" },
        { label: "Etc/GMT-8", value: "Etc/GMT-8" },
        { label: "Etc/GMT-9", value: "Etc/GMT-9" },
        { label: "Etc/GMT0", value: "Etc/GMT0" },
        { label: "Etc/Greenwich", value: "Etc/Greenwich" },
        { label: "Etc/UCT", value: "Etc/UCT" },
        { label: "Etc/UTC", value: "Etc/UTC" },
        { label: "Etc/Universal", value: "Etc/Universal" },
        { label: "Etc/Zulu", value: "Etc/Zulu" },
        { label: "Europe/Amsterdam", value: "Europe/Amsterdam" },
        { label: "Europe/Andorra", value: "Europe/Andorra" },
        { label: "Europe/Astrakhan", value: "Europe/Astrakhan" },
        { label: "Europe/Athens", value: "Europe/Athens" },
        { label: "Europe/Belfast", value: "Europe/Belfast" },
        { label: "Europe/Belgrade", value: "Europe/Belgrade" },
        { label: "Europe/Berlin", value: "Europe/Berlin" },
        { label: "Europe/Bratislava", value: "Europe/Bratislava" },
        { label: "Europe/Brussels", value: "Europe/Brussels" },
        { label: "Europe/Bucharest", value: "Europe/Bucharest" },
        { label: "Europe/Budapest", value: "Europe/Budapest" },
        { label: "Europe/Busingen", value: "Europe/Busingen" },
        { label: "Europe/Chisinau", value: "Europe/Chisinau" },
        { label: "Europe/Copenhagen", value: "Europe/Copenhagen" },
        { label: "Europe/Dublin", value: "Europe/Dublin" },
        { label: "Europe/Gibraltar", value: "Europe/Gibraltar" },
        { label: "Europe/Guernsey", value: "Europe/Guernsey" },
        { label: "Europe/Helsinki", value: "Europe/Helsinki" },
        { label: "Europe/Isle_of_Man", value: "Europe/Isle_of_Man" },
        { label: "Europe/Istanbul", value: "Europe/Istanbul" },
        { label: "Europe/Jersey", value: "Europe/Jersey" },
        { label: "Europe/Kaliningrad", value: "Europe/Kaliningrad" },
        { label: "Europe/Kiev", value: "Europe/Kiev" },
        { label: "Europe/Kirov", value: "Europe/Kirov" },
        { label: "Europe/Kyiv", value: "Europe/Kyiv" },
        { label: "Europe/Lisbon", value: "Europe/Lisbon" },
        { label: "Europe/Ljubljana", value: "Europe/Ljubljana" },
        { label: "Europe/London", value: "Europe/London" },
        { label: "Europe/Luxembourg", value: "Europe/Luxembourg" },
        { label: "Europe/Madrid", value: "Europe/Madrid" },
        { label: "Europe/Malta", value: "Europe/Malta" },
        { label: "Europe/Mariehamn", value: "Europe/Mariehamn" },
        { label: "Europe/Minsk", value: "Europe/Minsk" },
        { label: "Europe/Monaco", value: "Europe/Monaco" },
        { label: "Europe/Moscow", value: "Europe/Moscow" },
        { label: "Europe/Nicosia", value: "Europe/Nicosia" },
        { label: "Europe/Oslo", value: "Europe/Oslo" },
        { label: "Europe/Paris", value: "Europe/Paris" },
        { label: "Europe/Podgorica", value: "Europe/Podgorica" },
        { label: "Europe/Prague", value: "Europe/Prague" },
        { label: "Europe/Riga", value: "Europe/Riga" },
        { label: "Europe/Rome", value: "Europe/Rome" },
        { label: "Europe/Samara", value: "Europe/Samara" },
        { label: "Europe/San_Marino", value: "Europe/San_Marino" },
        { label: "Europe/Sarajevo", value: "Europe/Sarajevo" },
        { label: "Europe/Saratov", value: "Europe/Saratov" },
        { label: "Europe/Simferopol", value: "Europe/Simferopol" },
        { label: "Europe/Skopje", value: "Europe/Skopje" },
        { label: "Europe/Sofia", value: "Europe/Sofia" },
        { label: "Europe/Stockholm", value: "Europe/Stockholm" },
        { label: "Europe/Tallinn", value: "Europe/Tallinn" },
        { label: "Europe/Tirane", value: "Europe/Tirane" },
        { label: "Europe/Tiraspol", value: "Europe/Tiraspol" },
        { label: "Europe/Ulyanovsk", value: "Europe/Ulyanovsk" },
        { label: "Europe/Uzhgorod", value: "Europe/Uzhgorod" },
        { label: "Europe/Vaduz", value: "Europe/Vaduz" },
        { label: "Europe/Vatican", value: "Europe/Vatican" },
        { label: "Europe/Vienna", value: "Europe/Vienna" },
        { label: "Europe/Vilnius", value: "Europe/Vilnius" },
        { label: "Europe/Volgograd", value: "Europe/Volgograd" },
        { label: "Europe/Warsaw", value: "Europe/Warsaw" },
        { label: "Europe/Zagreb", value: "Europe/Zagreb" },
        { label: "Europe/Zaporozhye", value: "Europe/Zaporozhye" },
        { label: "Europe/Zurich", value: "Europe/Zurich" },
        { label: "GB", value: "GB" },
        { label: "GB-Eire", value: "GB-Eire" },
        { label: "GMT", value: "GMT" },
        { label: "GMT+0", value: "GMT+0" },
        { label: "GMT-0", value: "GMT-0" },
        { label: "GMT0", value: "GMT0" },
        { label: "Greenwich", value: "Greenwich" },
        { label: "HST", value: "HST" },
        { label: "Hongkong", value: "Hongkong" },
        { label: "Iceland", value: "Iceland" },
        { label: "Indian/Antananarivo", value: "Indian/Antananarivo" },
        { label: "Indian/Chagos", value: "Indian/Chagos" },
        { label: "Indian/Christmas", value: "Indian/Christmas" },
        { label: "Indian/Cocos", value: "Indian/Cocos" },
        { label: "Indian/Comoro", value: "Indian/Comoro" },
        { label: "Indian/Kerguelen", value: "Indian/Kerguelen" },
        { label: "Indian/Mahe", value: "Indian/Mahe" },
        { label: "Indian/Maldives", value: "Indian/Maldives" },
        { label: "Indian/Mauritius", value: "Indian/Mauritius" },
        { label: "Indian/Mayotte", value: "Indian/Mayotte" },
        { label: "Indian/Reunion", value: "Indian/Reunion" },
        { label: "Iran", value: "Iran" },
        { label: "Israel", value: "Israel" },
        { label: "Jamaica", value: "Jamaica" },
        { label: "Japan", value: "Japan" },
        { label: "Kwajalein", value: "Kwajalein" },
        { label: "Libya", value: "Libya" },
        { label: "MET", value: "MET" },
        { label: "MST", value: "MST" },
        { label: "MST7MDT", value: "MST7MDT" },
        { label: "Mexico/BajaNorte", value: "Mexico/BajaNorte" },
        { label: "Mexico/BajaSur", value: "Mexico/BajaSur" },
        { label: "Mexico/General", value: "Mexico/General" },
        { label: "NZ", value: "NZ" },
        { label: "NZ-CHAT", value: "NZ-CHAT" },
        { label: "Navajo", value: "Navajo" },
        { label: "PRC", value: "PRC" },
        { label: "PST8PDT", value: "PST8PDT" },
        { label: "Pacific/Apia", value: "Pacific/Apia" },
        { label: "Pacific/Auckland", value: "Pacific/Auckland" },
        { label: "Pacific/Bougainville", value: "Pacific/Bougainville" },
        { label: "Pacific/Chatham", value: "Pacific/Chatham" },
        { label: "Pacific/Chuuk", value: "Pacific/Chuuk" },
        { label: "Pacific/Easter", value: "Pacific/Easter" },
        { label: "Pacific/Efate", value: "Pacific/Efate" },
        { label: "Pacific/Enderbury", value: "Pacific/Enderbury" },
        { label: "Pacific/Fakaofo", value: "Pacific/Fakaofo" },
        { label: "Pacific/Fiji", value: "Pacific/Fiji" },
        { label: "Pacific/Funafuti", value: "Pacific/Funafuti" },
        { label: "Pacific/Galapagos", value: "Pacific/Galapagos" },
        { label: "Pacific/Gambier", value: "Pacific/Gambier" },
        { label: "Pacific/Guadalcanal", value: "Pacific/Guadalcanal" },
        { label: "Pacific/Guam", value: "Pacific/Guam" },
        { label: "Pacific/Honolulu", value: "Pacific/Honolulu" },
        { label: "Pacific/Johnston", value: "Pacific/Johnston" },
        { label: "Pacific/Kanton", value: "Pacific/Kanton" },
        { label: "Pacific/Kiritimati", value: "Pacific/Kiritimati" },
        { label: "Pacific/Kosrae", value: "Pacific/Kosrae" },
        { label: "Pacific/Kwajalein", value: "Pacific/Kwajalein" },
        { label: "Pacific/Majuro", value: "Pacific/Majuro" },
        { label: "Pacific/Marquesas", value: "Pacific/Marquesas" },
        { label: "Pacific/Midway", value: "Pacific/Midway" },
        { label: "Pacific/Nauru", value: "Pacific/Nauru" },
        { label: "Pacific/Niue", value: "Pacific/Niue" },
        { label: "Pacific/Norfolk", value: "Pacific/Norfolk" },
        { label: "Pacific/Noumea", value: "Pacific/Noumea" },
        { label: "Pacific/Pago_Pago", value: "Pacific/Pago_Pago" },
        { label: "Pacific/Palau", value: "Pacific/Palau" },
        { label: "Pacific/Pitcairn", value: "Pacific/Pitcairn" },
        { label: "Pacific/Pohnpei", value: "Pacific/Pohnpei" },
        { label: "Pacific/Ponape", value: "Pacific/Ponape" },
        { label: "Pacific/Port_Moresby", value: "Pacific/Port_Moresby" },
        { label: "Pacific/Rarotonga", value: "Pacific/Rarotonga" },
        { label: "Pacific/Saipan", value: "Pacific/Saipan" },
        { label: "Pacific/Samoa", value: "Pacific/Samoa" },
        { label: "Pacific/Tahiti", value: "Pacific/Tahiti" },
        { label: "Pacific/Tarawa", value: "Pacific/Tarawa" },
        { label: "Pacific/Tongatapu", value: "Pacific/Tongatapu" },
        { label: "Pacific/Truk", value: "Pacific/Truk" },
        { label: "Pacific/Wake", value: "Pacific/Wake" },
        { label: "Pacific/Wallis", value: "Pacific/Wallis" },
        { label: "Pacific/Yap", value: "Pacific/Yap" },
        { label: "Poland", value: "Poland" },
        { label: "Portugal", value: "Portugal" },
        { label: "ROC", value: "ROC" },
        { label: "ROK", value: "ROK" },
        { label: "Singapore", value: "Singapore" },
        { label: "Turkey", value: "Turkey" },
        { label: "UCT", value: "UCT" },
        { label: "US/Alaska", value: "US/Alaska" },
        { label: "US/Aleutian", value: "US/Aleutian" },
        { label: "US/Arizona", value: "US/Arizona" },
        { label: "US/Central", value: "US/Central" },
        { label: "US/East-Indiana", value: "US/East-Indiana" },
        { label: "US/Eastern", value: "US/Eastern" },
        { label: "US/Hawaii", value: "US/Hawaii" },
        { label: "US/Indiana-Starke", value: "US/Indiana-Starke" },
        { label: "US/Michigan", value: "US/Michigan" },
        { label: "US/Mountain", value: "US/Mountain" },
        { label: "US/Pacific", value: "US/Pacific" },
        { label: "US/Samoa", value: "US/Samoa" },
        { label: "UTC", value: "UTC" },
        { label: "Universal", value: "Universal" },
        { label: "W-SU", value: "W-SU" },
        { label: "WET", value: "WET" },
        { label: "Zulu", value: "Zulu" }
      ],
      default: { label: "UTC", value: "UTC" }
    },
    parse: function(value) {
      if (typeof value !== "string" || value.trim() === "") {
        throw new Error("Timezone cannot be empty");
      }
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Control Flow", "Utility"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/webhook_trigger.ts
var node134 = { "name": "Webhook", "id": "webhook_trigger", "descripition": "Starts a workflow when data is received from an external webhook, extracting contact information", "inputSchema": {}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex2.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Integration"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/index.ts
var nodes = { add_note_to_lead_service_titan: node, add_tag_to_lead: node2, add_to_sms_campaign: node3, address_validation_api_get_geo_address: node4, apply_tag_service_titan: node5, certapro_api_get_events: node6, certapro_api_update_event: node7, certapro_v2_api_get_events: node8, certapro_v2_api_update_event: node9, checkcondition: node10, check_if_invoice_overdue: node11, custom_webhook: node12, extract_common_field: node13, extract_with_a_i: node14, genesys_cloud_api_forward_to_agent: node15, get_agent_chat_history: node16, get_chat_response: node17, get_constant: node18, get_lead_service_titan: node19, get_live_staging_leads: node20, get_s_m_s_campaign_messages: node21, get_service_titan_recurring_service_estimates: node22, get_service_titan_accounts_receievables: node23, get_tags: node24, get_unassigned_recurring_events: node25, get_uploaded_leads_trigger: node26, get_variable: node27, housecall_v1_api_book_estimate: node28, housecall_v1_api_find_or_create_customer: node29, housecall_v1_api_get_customer: node30, housecall_v1_api_list_available_estimate_slots: node31, housecall_v1_api_search_customers_by_phone: node32, hubspot_crm_api_book_meeting: node33, hubspot_crm_api_book_meeting_slot: node34, hubspot_crm_api_create_crm_meeting: node35, hubspot_crm_api_create_contact: node36, hubspot_crm_api_create_meeting: node37, hubspot_crm_api_create_note: node38, hubspot_crm_api_get_available_time_slots: node39, hubspot_crm_api_get_crm_meeting: node40, hubspot_crm_api_get_contact: node41, hubspot_crm_api_get_meeting: node42, hubspot_crm_api_get_meeting_availability: node43, hubspot_crm_api_get_meeting_booking_info: node44, hubspot_crm_api_search_crm_meetings: node45, hubspot_crm_api_search_contacts: node46, hubspot_crm_api_search_meetings: node47, hubspot_crm_api_test_connection: node48, hubspot_crm_api_update_crm_meeting: node49, hubspot_crm_api_update_meeting: node50, inbound_call_trigger: node51, is_public_holiday: node52, make_call: node53, manual_trigger: node54, on_email_received: node55, on_new_appoinment_service_titan: node56, on_new_call_service_titan: node57, on_new_customer_service_titan: node58, on_new_estimate_service_titan: node59, on_new_invoice_service_titan: node60, on_new_job_or_project_note_service_titan: node61, on_new_job_service_titan: node62, on_new_lead_note_service_titan: node63, on_new_lead_service_titan: node64, on_new_payment_service_titan: node65, on_new_project_service_titan: node66, on_s_m_s_received: node67, on_tag_added: node68, on_updated_call_service_titan: node69, on_updated_estimate_service_titan: node70, on_website_vistor_indentified: node71, outreachgenius_calendar_book_slot: node72, outreachgenius_calendar_get_available_slots: node73, psa_api_add_company: node74, psa_api_add_contact: node75, psa_api_add_job: node76, psa_api_get_company: node77, psa_api_get_contact: node78, psa_api_get_job: node79, process_variable: node80, public_holiday_api_holiday_check_v1: node81, remove_tag_from_lead: node82, repeat_job: node83, run_another_workflow: node84, run_once_trigger: node85, sample_api_counter_tool: node86, sample_api_sample_tool: node87, send_direct_mail: node88, send_email_notification: node89, send_s_m_s_notification: node90, send_sms_reply: node91, serviceminder_api_add_note_to_contact: node92, serviceminder_api_add_or_update_contact: node93, serviceminder_api_book_appointment: node94, serviceminder_api_cancel_appointment: node95, serviceminder_api_find_appointments: node96, serviceminder_api_get_all_service_agents: node97, serviceminder_api_get_all_services: node98, serviceminder_api_get_cancel_reasons: node99, serviceminder_api_locate_contact: node100, serviceminder_api_log_call: node101, serviceminder_api_query_appointments: node102, serviceminder_api_quick_book_appointment: node103, serviceminder_api_search_available_slots: node104, serviceminder_api_test_connection: node105, serviceminder_api_update_appointment: node106, servicetitan_api_add_call_summary_note: node107, servicetitan_api_cancel_job: node108, servicetitan_api_create_customer: node109, servicetitan_api_create_customer_location: node110, servicetitan_api_create_job_for_existing_customer: node111, servicetitan_api_create_job_for_new_customer: node112, servicetitan_api_get_active_technicians: node113, servicetitan_api_get_appointments: node114, servicetitan_api_get_available_technicians: node115, servicetitan_api_get_business_units: node116, servicetitan_api_get_campaigns: node117, servicetitan_api_get_cancellation_reasons: node118, servicetitan_api_get_customer_by_phone: node119, servicetitan_api_get_customer_locations: node120, servicetitan_api_get_geo_address: node121, servicetitan_api_get_job_types: node122, servicetitan_api_get_jobs_by_customer: node123, servicetitan_api_reschedule_appointment: node124, servicetitan_api_update_customer: node125, servicetitan_api_update_customer_contact: node126, servicetitan_api_update_customer_details: node127, servicetitan_api_update_job: node128, servicetitan_api_update_location_contact: node129, service_titan_technicion_sms: node130, split_for_test: node131, store_variable: node132, waittime: node133, webhook_trigger: node134 };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  nodes
});
