export type TDateStyle = "long" | "full" | "medium" | "short";

export const formatDate = (str: string, style: TDateStyle): string => {
  const refactoredDate = str.split(".").reverse().join("-");

  const date = new Date(Date.parse(refactoredDate));
  return new Intl.DateTimeFormat("ru", { dateStyle: style }).format(date);
};
