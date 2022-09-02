import {IListItem} from "./index";

export interface IProjectItem extends IListItem {
  title  : string;
  image  : string;
  text   : string;
  date   : string;
  sample : string;
}
