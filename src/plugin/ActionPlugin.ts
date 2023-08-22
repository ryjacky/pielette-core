import { PluginProperties } from './PluginProperties';

export abstract class ActionPlugin {
  protected constructor(
    public pluginProperties: PluginProperties,
  ) {
  }

  abstract onExecuted(args: Map<string, any>): void;
}