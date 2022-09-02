import { FunctionComponent, useState } from "react";
import {useLocation, Link} from "react-router-dom";
import headerStyles from "./header.module.css";
import logo from "../../images/logo_Prozhito.svg";
import logo_mobile from "../../images/logo_prozhito_mobile.svg";
import logo_eu_ru from "../../images/logo_eu_ru.svg";
import openImg from "../../images/menu-mobil-open.svg";
import closeImg from "../../images/menu-mobil-close.svg";
import HeaderNav from "../headerNav/headerNav";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const desktop = useMediaQuery("(min-width: 768px)");
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
      className={
        `${menuOpen
          ? `${headerStyles.header} ${headerStyles.header_theme_dark}`
          : headerStyles.header} ${location.pathname !== '/' ? headerStyles.header_theme_white : null}`
      }
    >
      <div className={`${headerStyles.header__container} ${headerStyles.menu}`}>
        <div className={headerStyles.header__links}>
          <Link to="/" className={headerStyles.link}>
            <img
              src={desktop? logo : logo_mobile}
              alt={desktop.toString()}
            />
          </Link>
          <a
            href="https://eusp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.link}
          >
            <img
              src={logo_eu_ru}
              alt="Европейский университет в Санкт-Петербурге"
            />
          </a>
        </div>
        <HeaderNav desktop={desktop} open={menuOpen} closeMenu={()=>setMenuOpen(false)} />
        {
          !desktop && (
            <button
              type="button"
              className={headerStyles.menu__button}
              onClick={toggleMobileMenu}
            >
              <img alt={btnState.alt} src={btnState.img} />
            </button>
          )
        }
      </div>
    </header>
  );
};

export default Header;
