export abstract class AHPAction {
  protected constructor(
    public args: Map<string, any>,
    public delay = 0,
    public repeat = 1
  ) {}

  abstract onRun(): void;
}
