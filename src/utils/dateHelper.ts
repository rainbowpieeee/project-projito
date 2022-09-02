export type TDateStyle = "long" | "full" | "medium" | "short"

export const formatDate = (str:string, style:TDateStyle): string => {
  const date = new Date(Date.parse(str))
  return new Intl.DateTimeFormat("ru", {dateStyle: style}).format(date);
}
