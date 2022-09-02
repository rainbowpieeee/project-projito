import { IListItem } from "./index";

export interface INewsItem extends IListItem {
  date: string;
  tag?: string | null;
  image: string;
  imageMobile: string;
  text: string;
}

export interface INewsData {
  page: number;
  size: number;
  total: number;
  data: Array<INewsItem>;
}

export type TNewsRequest = Omit<INewsData, "data" | "total">;
