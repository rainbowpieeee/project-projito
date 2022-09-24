
export interface ILayoutData {
  logos: Array<ILogo>;
  main_menu: Array<IMenuLink>;
  footer_menu: Array<IMenuLink>;
  footer_links: Array<IFooterLink>;
  footer_social: Array<IFooterSocial>
}



export interface ILogo {
  alt_text: string;
  page_slug: string;
  url: string;
  icon: string;
}

export interface IMenuLink {
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
  menuLinks: Array<IMenuLink>;
  closeMenu: () => void;
  desktop: boolean;
  open: boolean;
}

export interface IFooterLink {
  title: string;
  page_slug: string;
  url: string;
  children?: [
    {
      title: string;
      page_slug: string;
      url: string;
      children: [string];
    }
  ];
}

export interface IFooterSocial {
  title: string;
  page_slug: string;
  url: string;
  icon: string;
}

export interface IHeaderProps {
  logos: Array<ILogo>;
  mainMenu: Array<IMenuLink>;
}

export interface IFooterProps {
  logos: Array<ILogo>;
  footerMenu: Array<IMenuLink>;
  footerLinks: Array<IFooterLink>;
  footerSocial: Array<IFooterSocial>;
}


