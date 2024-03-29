import headerDropdownStyles from "./headerDropdown.module.css";
import headerNavStyles from "../headerNav/headerNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent } from "react";

interface IHeaderDropdownProps {
  visible: boolean;
  desktop: boolean;
  setDropDownVisible: (visible: boolean) => void;
  closeMenu: () => void;
  dropDownData?: any;
}
const HeaderDropdown: FunctionComponent<IHeaderDropdownProps> = ({
  visible,
  desktop,
  setDropDownVisible,
  closeMenu,
  dropDownData,
}) => {
  const dropdownStylesMobile = `${headerDropdownStyles.menu__mobileLinksSection}`;
console.log(dropDownData);

  const dropdownStylesDesktop = visible
    ? `${headerDropdownStyles.menu__dropdown} ${headerDropdownStyles.menu__dropdown_visible} `
    : `${headerDropdownStyles.menu__dropdown} `;

  return dropDownData ? (desktop  ? (
    <ul
      className={dropdownStylesDesktop}
      onMouseEnter={() => setDropDownVisible(true)}
      onMouseLeave={() => setDropDownVisible(false)}
    >
      {dropDownData.map((link:any, i:number) => (
        <li className={headerDropdownStyles.menu__dropdownItem}>
          <Link
            to="/"
            onClick={closeMenu}
            className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
            key={i}
          >
            {link.title}
          </Link>
        </li>
      ))}
      
    </ul>
  ) : (
    <div className={dropdownStylesMobile}>
      <ul className={headerDropdownStyles.menu__mobileLinks}>
        {}

        <li className={headerNavStyles.menu__item}>
          <Link
            to="/"
            onClick={closeMenu}
            className={headerNavStyles.menu__link}
          >
            О&nbsp;прожито
          </Link>
        </li>
      </ul>
    </div>
  )):null
};
export default HeaderDropdown;
