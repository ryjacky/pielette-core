export interface AddonHeader {
  displayName: string,

  /**
   * The list of arguments that the addon wants to receive. All arguments are passed as strings.
   * The following is a special list of arguments that enables the addon to receive special inputs.
   * _shortcut: Allows the user to specify a shortcut to the addon.
   * */
  receiveArgs?: string[]
}