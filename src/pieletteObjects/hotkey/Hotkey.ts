import { PieletteObject } from "../PieletteObject";

export class Hotkey implements PieletteObject {
  public readonly typeName = "Hotkey";
  constructor(
    public readonly ctrl: boolean,
    public readonly alt: boolean,
    public readonly shift: boolean,
    public readonly key: string,
  ) {
  }
}