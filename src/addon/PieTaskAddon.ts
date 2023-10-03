import { Addon } from "./Addon";

export interface PieTaskAddon extends Addon {
  /**
   * List of arguments that is requested, each entry is formatted as:
   * argumentName:type
   */
  readonly receiveArgs?: string[];

  onExecuted(args: OnExecutedArgs): void;
}

export type OnExecutedArgs = Record<string, string>;