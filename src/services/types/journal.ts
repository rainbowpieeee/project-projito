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
export interface IJournalData {
  page: number;
  size: number;
  filter: string;
  total: number;
  data: any;
}
export type TJournalData = {
  archive_layout: string;
  category_tags: any;
  items: any;
  pageNumber: number;
  pageSize: number;
  slug: string;
  title: string;
  totalCount: number;
  totalPages: number;
};

export type TJournalRequest = Omit<IJournalData, "data" | "total">;
