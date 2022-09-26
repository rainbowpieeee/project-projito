import { IPopup } from "./popup";

export interface IFrontpageData {
  anchored: Array<IPopup>;
  blocks: Array<{
    title?: string;
    layout?: string;
    text?: string;
    category?: string;
    cards?: any;
  }>;
}
