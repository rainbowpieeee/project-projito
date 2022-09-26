import { FunctionComponent, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import headerStyles from "./header.module.css";
import openImg from "../../images/menu-mobil-open.svg";
import closeImg from "../../images/menu-mobil-close.svg";
import HeaderNav from "../headerNav/headerNav";
import useMediaQuery from "../../hooks/useMediaQuery";

import {API_URL_FOR_IMAGE, DESKTOP_MEDIA_QUERY} from "../../constants/index"
import {IHeaderProps} from "../../services/types/layout"


const Header: FunctionComponent<IHeaderProps> = ({ logos, mainMenu }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const desktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const location = useLocation();

  const btnState = menuOpen
    ? { img: closeImg, alt: "закрыть" }
    : { img: openImg, alt: "открыть" };

  const toggleMobileMenu = (): void => {
    setMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <header
      className={`${
        menuOpen
          ? `${headerStyles.header} ${headerStyles.header_theme_dark}`
          : headerStyles.header
      } ${location.pathname !== "/" ? headerStyles.header_theme_white : null}`}
    >
      <div className={`${headerStyles.header__container} ${headerStyles.menu}`}>
        <div className={headerStyles.header__links}>
          <Link to="/" className={headerStyles.link}>
            <img
              src={`${API_URL_FOR_IMAGE}${logos[0].icon}`}
              alt={logos[0].alt_text}
              className={headerStyles.mainLogo}
            />
          </Link>
          <a
            href="https://eusp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.link}
          >
            <img
              src={`${API_URL_FOR_IMAGE}${logos[1].icon}`}
              alt={logos[1].alt_text}
              className={headerStyles.euLogo}
            />
          </a>
        </div>
        <HeaderNav
          menuLinks={mainMenu}
          desktop={desktop}
          open={menuOpen}
          closeMenu={() => setMenuOpen(false)}
        />
        {!desktop && (
          <button
            type="button"
            className={headerStyles.menu__button}
            onClick={toggleMobileMenu}
          >
            <img alt={btnState.alt} src={btnState.img} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
