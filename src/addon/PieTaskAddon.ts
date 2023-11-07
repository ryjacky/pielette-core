export interface PieTaskAddon {
  name: string;
  onExecuted(...args: any[]): void;
}