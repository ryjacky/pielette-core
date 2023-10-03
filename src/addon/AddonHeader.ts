export interface AddonHeader {
  displayName: string,

  /**
   * The list of arguments that the addon wants to receive. All arguments are passed as strings.
   * fileType specifies how the user can input the argument.
   * */
  receiveArgs?: { argName: string, fieldType: string }[]
}