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

// Mock workflow test types
export type MockMessage = {
  msSinceStart: number;
  stepId: string;
  nodeId: string;
  data:
    | {
        status: "success";
        output: any;
      }
    | {
        status: "failure";
        error: string;
      };
};

export type MockRunResultBranch = {
  run_branch_id: string; // eg step1_p_0_step2_p_1
  messages: MockMessage[];
};

export type MockRunConf = {
  triggersConf: {
    step_id: string;
    waitMs: number;
  }[];
  steps: WorkflowStep[];
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
