export abstract class PieTaskAddon {
  onExecuted(args: RuntimeArgs): void {}
}

export type RuntimeArgs = Record<string, unknown>;