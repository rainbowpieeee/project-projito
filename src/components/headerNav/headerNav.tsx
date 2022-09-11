import headerNavStyles from "./headerNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent, useState, useRef } from "react";
import HeaderDropdown from "../headerDropdown/headerDropdown";
import { HeaderNavItem } from "../header-nav-ltem/header-nav-item";

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
  const [dropDownData, setDropDownData] = useState(null);



  const handleMouseEnter = (itemData:any) => {
    setDropDownData(itemData)
    setDropDownVisible(true);
  }

  const handleMouseLeave = () => {
    setDropDownVisible(false)
  }

  const isMobileMenuStyle = open
    ? headerNavStyles.menu__mobile
    : `${headerNavStyles.menu__mobile} ${headerNavStyles.menu__mobile_open}`;

  const isMobileContainerStyle = open
    ? `${headerNavStyles.menu__mobileContainer} ${headerNavStyles.menu__mobileContainer_open}`
    : headerNavStyles.menu__mobileContainer;

  const style = desktop ? headerNavStyles.menu__desktop : isMobileMenuStyle;

  return (

      <div>
        <nav className={`${desktop ? "" : isMobileContainerStyle} header__nav`}>
          <ul className={style}>
            {menuLinks.map((link: any, index:Number) => (
              <li className={headerNavStyles.menu__item}>
                <HeaderNavItem
                  linkData={link}
                  onMouseEnter = {handleMouseEnter}
                  onMouseLeave = {handleMouseLeave}
                  key={index}
                ></HeaderNavItem>
              </li>
            ))}
          </ul>
        </nav>
        {      dropDownData && <HeaderDropdown
          visible={dropDownVisible}
          desktop={desktop}
          setDropDownVisible={setDropDownVisible}
          closeMenu={closeMenu}
          dropDownData = {dropDownData}
        />}
      </div>

  );
};

export default HeaderNav;
