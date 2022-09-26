export interface ILayoutData {
  logos: Array<ILogo>;

  main_menu: Array<ILink>;
  footer_menu: Array<ILink>;
  footer_links: Array<ILink>;
  footer_social: Array<IFooterSocial>

}

export interface ILogo {
  alt_text: string;
  page_slug: string;
  url: string;
  icon: string;
}

export interface ILink {
  title: string;
  page_slug: string;
  url: string;
  children?: [
    {
      title: string;
      page_slug: string;
      url: string;
      children?: [string];
    }
  ];
}

export interface IHeaderNavProps {
  menuLinks: Array<ILink>;
  closeMenu: () => void;
  desktop: boolean;
  open: boolean;
}


export interface IFooterSocial {
  title: string;
  page_slug: string;
  url: string;
  icon: string;
}

export interface IHeaderProps {
  logos: Array<ILogo>;
  mainMenu: Array<ILink>;
}

export interface IFooterProps {
  logos: Array<ILogo>;
  footerMenu: Array<ILink>;
  footerLinks: Array<ILink>;
  footerSocial: Array<IFooterSocial>;
}
