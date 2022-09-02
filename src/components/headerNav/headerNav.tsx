import headerNavStyles from "./headerNav.module.css";
import { Link } from "react-router-dom";
import React, { FunctionComponent, useState } from "react";
import HeaderDropdown from "../headerDropdown/headerDropdown";

interface IHeaderNavProps {
  desktop: boolean;
  open: boolean;
  closeMenu: ()=>void;
}
const HeaderNav: FunctionComponent<IHeaderNavProps> = ({ desktop, open, closeMenu }) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const isMobileMenuStyle = open
    ? headerNavStyles.menu__mobile
    : `${headerNavStyles.menu__mobile} ${headerNavStyles.menu__mobile_open}`

  const isMobileContainerStyle = open
    ? `${headerNavStyles.menu__mobileContainer} ${headerNavStyles.menu__mobileContainer_open}`
    : headerNavStyles.menu__mobileContainer

  const style = desktop
    ? headerNavStyles.menu__desktop
    : isMobileMenuStyle;

  return (
    <nav
      className={
        `${desktop
          ? ""
          : isMobileContainerStyle} header__nav`
      }
    >
      <ul className={style}>
        <li className={headerNavStyles.menu__item}>
          <a href="https://prozhito.org/page/archive"
            className={headerNavStyles.menu__link}
            target="_blank" rel="noopener noreferrer"
          >
            Архив
          </a>
        </li>
        <li className={headerNavStyles.menu__item}>
          <a
            href="https://prozhito.org/persons"
            className={headerNavStyles.menu__link}
            target="_blank" rel="noopener noreferrer"
          >
            Корпус
          </a>
        </li>
        <li
          className={headerNavStyles.menu__item}
          onMouseEnter={() => setDropDownVisible(true)}
          onMouseLeave={() => setDropDownVisible(false)}
        >
          <Link to="/" className={headerNavStyles.menu__link} onClick={closeMenu}>
            О&nbsp;проекте
          </Link>
        </li>
        <HeaderDropdown visible={dropDownVisible} desktop={desktop} setDropDownVisible={setDropDownVisible } closeMenu={closeMenu} />
      </ul>
    </nav>
  );
};

export default HeaderNav;
