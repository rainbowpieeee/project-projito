export const getDefaultHeaders = (headers: Headers) => {
  headers.set("Accept", "application/json;charset=UTF-8")
  headers.set("Content-Type", "application/json;charset=UTF-8")
  return headers
}
