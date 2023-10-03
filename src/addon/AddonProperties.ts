export interface AddonProperties {
  id: string,
  name: string,
  type: PluginType,
  description?: string,
  author?: string,
  parameters?: { name: string, type: string }[]
}

export enum PluginType {
  ACTION_PLUGIN = 'actionPlugin',
}