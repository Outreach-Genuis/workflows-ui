import { InputField, OutputField, Branches } from "./Schema";

export type Node = {
  name: string;
  id: string;
  descripition: string;
  inputSchema: Record<string, Omit<InputField<any>, "parse">>;
  outputSchema: Record<string, Omit<OutputField<any>, "validator">>;
  groups: string[];
  branches: Branches<any>;
  isTriggerNode: boolean;
};
