import headerDropdownStyles from "./headerDropdown.module.css";
import headerNavStyles from "../headerNav/headerNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent } from "react";
import {ILink} from "../../services/types/layout"

interface IHeaderDropdownProps {
  visible: boolean;
  desktop: boolean;
  setDropDownVisible: (visible: boolean) => void;
  closeMenu: () => void;
  dropDownData?: Array<ILink>;
}
const HeaderDropdown: FunctionComponent<IHeaderDropdownProps> = ({
  visible,
  desktop,
  setDropDownVisible,
  closeMenu,
  dropDownData,
}) => {
  const dropdownStylesMobile = `${headerDropdownStyles.menu__mobileLinksSection}`;

  const dropdownStylesDesktop = visible
    ? `${headerDropdownStyles.menu__dropdown} ${headerDropdownStyles.menu__dropdown_visible} `
    : `${headerDropdownStyles.menu__dropdown} `;

  return dropDownData ? (desktop  ? (
    <ul
      className={dropdownStylesDesktop}
      onMouseEnter={() => setDropDownVisible(true)}
      onMouseLeave={() => setDropDownVisible(false)}
    >
      {dropDownData.map((link, i:number) => (
        <li className={headerDropdownStyles.menu__dropdownItem} key={i}>
          <Link
            to="/"
            onClick={closeMenu}
            className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
            
          >
            {link.title}
          </Link>
        </li>
      ))}
      
    </ul>
  ) : (
    <div className={dropdownStylesMobile}>
      <ul className={headerDropdownStyles.menu__mobileLinks}>
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
