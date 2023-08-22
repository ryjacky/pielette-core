import { promises as fs } from 'fs';
import * as path from 'path';
import { Environment } from './Environment';

export async function GetPluginList(): Promise<string[]> {
  const pluginDir = path.join(Environment.DEFAULT_DATA_PATH, 'Plugins');

  const pluginDirList =
    (await fs.readdir(pluginDir, { withFileTypes: true }))
      .filter(file => {return file.isDirectory();})
      .map(file => file.name);

  const pluginList: string[] = [];
  for (const plugin of pluginDirList) {
    if (await isPluginValid(path.join(pluginDir, plugin))) {
      pluginList.push(plugin);
    }
  }

  return pluginList;
}

async function isPluginValid(dir: string): Promise<boolean> {
  const mainFile = 'main.ts';
  const confFile = 'config.json';

  let exists = await fs
    .stat(path.join(dir, mainFile))
    .then(() => true)
    .catch(() => {
      return false;
    });

  exists =
    exists &&
    (await fs
      .stat(path.join(dir, confFile))
      .then(() => true)
      .catch(() => {
        return false;
      }));

  // TODO: Add more checks here
  return exists;
}
