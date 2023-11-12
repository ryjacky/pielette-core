import { PieletteAddon } from "./PieletteAddon";

export interface PieItemTaskAddon extends PieletteAddon {
  onExecuted(): void;
}