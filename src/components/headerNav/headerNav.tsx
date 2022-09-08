import headerNavStyles from "./headerNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent, useState } from "react";
import HeaderDropdown from "../headerDropdown/headerDropdown";
import {HeaderNavItem} from "../header-nav-ltem/header-nav-item"

interface IHeaderNavProps {
  menuLinks: any;
  // menuLinks: Array<{
  //   title:string;
  //   page_slug:string | null;
  //   url: string | null;
  //   children: null | Array<{
  //       title:string;
  //       page_slug:string | null;
  //       url: string | null;
  //       children: null;
  //   }>;
  // }>;
  desktop: boolean;
  open: boolean;
  closeMenu: () => void;
}
const HeaderNav: FunctionComponent<IHeaderNavProps> = ({
  desktop,
  open,
  closeMenu,
  menuLinks,
}: IHeaderNavProps) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [dropDownData, setDropDownData] = useState(null)
  

  const isMobileMenuStyle = open
    ? headerNavStyles.menu__mobile
    : `${headerNavStyles.menu__mobile} ${headerNavStyles.menu__mobile_open}`;

  const isMobileContainerStyle = open
    ? `${headerNavStyles.menu__mobileContainer} ${headerNavStyles.menu__mobileContainer_open}`
    : headerNavStyles.menu__mobileContainer;

  const style = desktop ? headerNavStyles.menu__desktop : isMobileMenuStyle;

  return (
    <nav className={`${desktop ? "" : isMobileContainerStyle} header__nav`}>
      <ul className={style}>
       {  menuLinks.map((link: any ) => <HeaderNavItem linkData = {link}></HeaderNavItem>)}
      </ul>
    </nav>
  )
}

export default HeaderNav;
