export interface ActionPlugin {
  onExecuted(args: Map<string, any>): void;
}