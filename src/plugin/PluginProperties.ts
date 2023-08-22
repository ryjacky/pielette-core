export interface PluginProperties {
  name: string,
  type: PluginType,
  description?: string,
  author?: string
}

export enum PluginType {
  ACTION_PLUGIN = 'actionPlugin',
}