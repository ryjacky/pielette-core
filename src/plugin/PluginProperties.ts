export interface PluginProperties {
  name: string,
  type: PluginType,
  description?: string,
  author?: string,
  parameters?: Map<string, string>
}

export enum PluginType {
  ACTION_PLUGIN = 'actionPlugin',
}