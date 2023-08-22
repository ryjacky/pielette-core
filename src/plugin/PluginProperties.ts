export class PluginProperties {
  constructor(
    public name: string,
    public type: PluginType,
    public description: string = '',
    public author: string = '',
  ) {
  }
}

export enum PluginType {
  ACTION_PLUGIN = 'actionPlugin',
}