export class PieletteEnv {
  static readonly DEFAULT_DATA_PATH = `${process.env.APPDATA ?? ''}/Pielette/`;
  static readonly DEFAULT_PLUGIN_PATH = `${this.DEFAULT_DATA_PATH}/Plugins/`;
}
