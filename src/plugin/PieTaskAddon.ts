export interface PieTaskAddon {
  onExecuted(args: OnExecutedArgs): void;
}

export type OnExecutedArgs = Record<string, any>;