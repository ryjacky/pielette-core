export interface IAddonHeader {
  displayName: string,

  /**
   * The list of arguments that the addon wants to receive. All arguments are passed as strings.
   * fileType specifies how the user can input the argument.
   * */
  receiveArgs?: ReceiveArgs[]
}

export type ReceiveArgs = {
  argName: string;
  fieldType: "text" | "number" | "boolean" | "select" | "file" | "folder" | "hotkeys";
};
