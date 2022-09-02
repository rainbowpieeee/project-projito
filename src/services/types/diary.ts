import {IListItem} from "./index";

export interface IDiaryItem extends IListItem{
  name  : string;
  image : string;
  text  : string;
  tag?  : string;
  sample: string
}
