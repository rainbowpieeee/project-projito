export type IJournalItem = {
  annotation: string;
  cover: string;
  date_published: string;
  layout: string;
  slug: string;
  subtitle: string;
  tags: Array<string>;
  title: string;
  id?: number;
};
export type TJournalTags = {
  slug: string;
  title: string;
};
export type TJournalData = {
  archive_layout?: string;
  category_tags: Array<TJournalTags>;
  items?: Array<IJournalItem>;
  pageNumber?: number;
  pageSize?: number;
  slug?: string;
  title?: string;
  totalCount?: number;
  totalPages?: number;
};
export interface IData<TJournalData> {
  data: Array<TJournalData> | any;
}
export interface IJournalData extends IData<TJournalData> {
  page: number;
  size: number;
  filter: string;
  total: number;
}

export type TJournalRequest = Omit<IJournalData, "data" | "total">;
