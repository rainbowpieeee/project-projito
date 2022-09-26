import { ICard } from "./materials";
import { IPopup } from "./popup";

export interface TBlock {
  title?: string;
  layout?: string;
  text?: string;
  category?: string;
  cards?: Array<ICard>;
}
export interface IFrontpageBlocks<TBlock> {
  blocks: Array<TBlock>;
}

export interface IFrontpageData extends IFrontpageBlocks<TBlock> {
  anchored: Array<IPopup>;
}
