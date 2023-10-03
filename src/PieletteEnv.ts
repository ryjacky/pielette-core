export class PieletteEnv {
  static readonly DEFAULT_DATA_PATH = `${process.env.APPDATA ?? ''}/AutoHotPie3/`;
  static readonly DEFAULT_PLUGIN_PATH = `${this.DEFAULT_DATA_PATH}/Plugins/`;
}
