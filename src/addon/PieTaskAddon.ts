export abstract class PieTaskAddon {
  onExecuted(args: OnExecutedArgs): void {}
}

export type OnExecutedArgs = Record<string, string>;