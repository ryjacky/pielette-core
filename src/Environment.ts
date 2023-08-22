export class Environment {
  static readonly DEFAULT_DATA_PATH = `${
    process.env.APPDATA ?? ''
  }/AutoHotPie3/`;
}
