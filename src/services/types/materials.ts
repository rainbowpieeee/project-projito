export interface IMaterialsProps {
  title: string;
  cards: Array<ICard>;
}

export interface ICard {
  title: string;
  annotation: string;
  label: string;
  links: Array<{ label: string; page_slug?: string; url?: string }>;
  cover: string;
  id?: number;
}

export interface IMaterialsItem {
  name: string;
  image: string;
  text: string;
  tag: string;
  sample?: string;
}
