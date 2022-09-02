import {IListItem} from "./index";

export type TJournalType = "topic" | "project" | "experience"

export interface IJournalAbstractItem extends IListItem {
  type     : TJournalType;
  image    : string;
  text     : string;
}

export interface IJournalMagazineItem extends IJournalAbstractItem {
  title    : string;
  subtitle : string;
}

export interface IJournalExperienceItem extends IJournalAbstractItem {
  name     : string;
}

export type IJournalItem = IJournalMagazineItem | IJournalExperienceItem

export type TJournalFilter = "all" | TJournalType

export type TJournalFilterDictionary = {
  [x in TJournalFilter]?: string;
}

export interface IJournalData {
  page   : number;
  size   : number;
  filter : TJournalFilter;
  total  : number;
  data   : Array<IJournalItem>;
}

export type TJournalRequest = Omit<IJournalData, "data" | "total">
