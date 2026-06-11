import { InputField, OutputField, Branches } from "./Schema";

export type Node = {
  name: string;
  id: string;
  descripition: string;
  inputSchema: Record<string, InputField<any>>;
  outputSchema: Record<string, OutputField<any>>;
  groups: string[];
  branches: Branches<any>;
  isTriggerNode: boolean;
};
