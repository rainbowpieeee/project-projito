import {IListItem} from "./index";

export interface IProjectItem extends IListItem {
  title:string;
  subtitle?:string;
  annotation:string;
  layout:string;
  date_published:string;
  cover: string;
  tags: Array<string>;
  slug:string;
}
