import { IListItem } from "./index";

export interface INewsItem extends IListItem {
  annotation: string;
  cover: string;
  date_published: string;
  layout: string;
  slug: string;
  subtitle: string;
  tags: string[] | string;
  title: string;
}

export type TObj = {
  annotation: string;
  cover: string;
  date_published: string;
  layout: string;
  slug: string;
  subtitle: string;
  tags: string[] | string;
  title: string;
};

export interface INewsData {
  page: number;
  size: number;
  total: number;
  data: Array<INewsItem>;
}

export type TNewsRequest = Omit<INewsData, "data" | "total">;
