import {IListItem} from "./index";

export type IContentsSampleProps = {
  openContents? : () => void,
  closeContents : () => void,
}

export interface ISamplePage {
  name: string;
}

export interface ISamplePageContent extends IListItem, ISamplePage {
  content: string;
}
