/**
 * This type represents a field in a schema with its associated properties and methods.
 * These fields are used to define the structure and validation of data in a schema.
 * This are also sent to the frontend to generate forms dynamically.
 */
export type InputField<OutputType> = {
  name: string;
  description: string;
  validationSchema: RegExp;
  errorMessage: string;
  required?: boolean;
  getVisible?: (currentValues: Record<string, string>) => boolean;
  input:
    | {
        type: "text";
        maxLength?: number;
        minLength?: number;
        placeholder?: string;
        default?: string;
      }
    | {
        type: "number";
        min: number;
        max: number;
        step?: number;
        default?: number;
      }
    | {
        type: "boolean";
        default?: boolean;
      }
    | {
        type: "password";
        default?: string;
      }
    | {
        type: "textarea";
        maxLength: number;
        minLength: number;
        placeholder: string;
        default?: string;
      }
    | {
        type: "select";
        options: { label: string; value: string }[];
        default?: { label: string; value: string };
      }
    | {
        type: "multiselect";
        options: { label: string; value: string }[];
        default?: { label: string; value: string }[];
      }
    | {
        type: "custom";
        tag: string; // e.g. 'code-editor'
        default?: string;
        options?: Record<string, any>; // additional options specific to the custom input type
      }
    | {
        type: "date";
        default?: string; // ISO date string
      }
    | {
        type: "datetime";
        default?: string; // ISO datetime string
      }
    | {
        type: "time";
        default?: string; // ISO time string
      };
  parse: (value: string) => OutputType;
};

/**
 * This type represents a field in a schema with its associated properties and methods.
 * These fields are used to define the structure and validation of data in a schema.
 * This are also sent to the frontend to generate forms dynamically.
 */
export type OutputField<OutputType> = {
  name: string;
  description: string;
  example: OutputType;
  validator: (value: OutputType) => boolean;
  required?: boolean;
};

/**
 * This type represents a schema, which is a collection of fields.
 */
export type InputSchema<Keys extends Lowercase<string>> = Record<
  Keys,
  InputField<any>
>;

/**
 * This type represents output schema, which is a collection of output fields.
 */
export type OutputSchema<Keys extends Lowercase<string>> = Record<
  Keys,
  OutputField<any>
>;

/**
 * This utility type infers the output type of a given field.
 */
type InferFieldType<K> =
  K extends InputField<infer OutputType>
    ? OutputType
    : K extends OutputField<infer OutputType>
      ? OutputType
      : never;

/**
 * This utility type infers the data type of a given schema.
 */
export type InferDataType<S> = {
  [key in keyof S]: InferFieldType<S[key]>;
};

/**
 * This type represents a branch in a workflow node.
 */
type BranchSchema = {
  id: string;
  name: string;
  description: string;
};

/**
 * This type represents the branches in a workflow node, where each key is a lowercase string
 * and the value is a BranchSchema.
 */
export type Branches<Keys extends Lowercase<string>> = Record<
  Keys,
  BranchSchema
>;

/**
 * This type represents metadata associated with a workflow run.
 */
export type RunMetadata = {
  runId: string;
  workflowId: string;
  stepId: string;
  projectId: string;
  sessionId: string;
  isGobalTrigger?: boolean; // indicates if the trigger is a global trigger. E.g. a phone call coming in from outside.
};
