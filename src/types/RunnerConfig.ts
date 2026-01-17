export type WorkflowStep = {
  stepId: string;
  nodeConfig: Record<string, any>;
  nodeId: string;
  nextSteps: { branchId: string; stepIds: string[] }[];
};

export type WorkflowConfig = {
  projectId: string;
  workflowId: string;
  steps: WorkflowStep[];
  status: "active" | "inactive";
  name: string;
};

export type WorkflowRun = {
  workflowId: string;
  sessionId: string;
  runId: string;
  status: "in-progress" | "completed" | "failed";
  stepId: string;
  input: Record<string, any>;
  output?: Record<string, any>;
  error?: string;
};
