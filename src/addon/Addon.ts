export interface Addon {
  readonly id: string,
  readonly displayName: string,
  readonly type: "pieTaskAddon" | "NULL",
  readonly parameters?: Record<string, string>
}
