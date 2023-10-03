import { Addon } from "./Addon";

export interface PieTaskAddon extends Addon {
  onExecuted(args: OnExecutedArgs): void;
}

export type OnExecutedArgs = Record<string, any>;