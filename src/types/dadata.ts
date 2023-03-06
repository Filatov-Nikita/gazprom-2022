export interface Item {
  data: Record<string, unknown>,
  unrestricted_value: string,
  value: string
}

export interface Response {
  access_error: boolean
  errors: string[],
  response: Item[]
}
