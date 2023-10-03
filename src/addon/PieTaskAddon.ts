import { Addon } from "./Addon";

export interface PieTaskAddon extends Addon {
  readonly receiveArgs?: string[];

  onExecuted(args: OnExecutedArgs): void;
}

export type OnExecutedArgs = Record<string, string>;