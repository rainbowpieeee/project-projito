import headerDropdownStyles from "./headerDropdown.module.css";
import headerNavStyles from "../headerNav/headerNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent } from "react";

interface IHeaderDropdownProps {
  visible: boolean;
  desktop: boolean;
  setDropDownVisible: (visible: boolean) => void;
  closeMenu: () => void;
}
const HeaderDropdown: FunctionComponent<IHeaderDropdownProps> = ({
  visible,
  desktop,
  setDropDownVisible,
  closeMenu,
}) => {
  const dropdownStylesMobile = `${headerDropdownStyles.menu__mobileLinksSection}`;

  const dropdownStylesDesktop = visible
    ? `${headerDropdownStyles.menu__dropdown} ${headerDropdownStyles.menu__dropdown_visible} `
    : `${headerDropdownStyles.menu__dropdown} `;

  return desktop ? (
    <ul
      className={dropdownStylesDesktop}
      onMouseEnter={() => setDropDownVisible(true)}
      onMouseLeave={() => setDropDownVisible(false)}
    >
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          onClick={closeMenu}
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          О&nbsp;прожито
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          onClick={closeMenu}
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Как&nbsp;работать?
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          onClick={closeMenu}
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Медиа
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          onClick={closeMenu}
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Новости
        </Link>
      </li>
      <li className={headerDropdownStyles.menu__dropdownItem}>
        <Link
          to="/"
          onClick={closeMenu}
          className={`${headerNavStyles.menu__link} ${headerDropdownStyles.menu__link_dropdown}`}
        >
          Спецпроекты
        </Link>
      </li>
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
        <li className={headerNavStyles.menu__item}>
          <Link
            to="/"
            onClick={closeMenu}
            className={headerNavStyles.menu__link}
          >
            Как&nbsp;работать?
          </Link>
        </li>
        <li className={headerNavStyles.menu__item}>
          <Link
            to="/"
            onClick={closeMenu}
            className={headerNavStyles.menu__link}
          >
            Медиа
          </Link>
        </li>
      </ul>
      <ul className={headerDropdownStyles.menu__mobileLinks}>
        <li className={headerNavStyles.menu__item}>
          <Link
            to="/"
            onClick={closeMenu}
            className={headerNavStyles.menu__link}
          >
            Новости
          </Link>
        </li>
        <li className={headerNavStyles.menu__item}>
          <Link
            to="/"
            onClick={closeMenu}
            className={headerNavStyles.menu__link}
          >
            Спецпроекты
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HeaderDropdown;
