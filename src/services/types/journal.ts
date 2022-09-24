import { IListItem } from "./index";

export type TJournalType = "topic" | "project" | "experience" | "kids";

export interface IJournalAbstractItem extends IListItem {
  type: TJournalType;
  image: string;
  text: string;
}

export interface IJournalMagazineItem extends IJournalAbstractItem {
  title: string;
  subtitle: string;
}

export interface IJournalExperienceItem extends IJournalAbstractItem {
  name: string;
}

//export type IJournalItem = IJournalMagazineItem | IJournalExperienceItem;
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
export type TJournalFilter = "all" | TJournalType;

export type TJournalFilterDictionary = {
  [x in TJournalFilter]?: string;
};

export interface IJournalData {
  page: number;
  size: number;
  filter: TJournalFilter;
  total: number;
  data: Array<IJournalItem>;
}

export type TJournalRequest = Omit<IJournalData, "data" | "total">;
