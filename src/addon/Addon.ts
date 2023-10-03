export interface Addon {
  readonly id: string,
  readonly displayName: string,
  readonly parameters?: Record<string, string>
}
