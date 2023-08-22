
export abstract class Action {
  protected constructor(
    public delay = 0,
    public repeat = 1) {
  }

  abstract onRun(): void;
}
