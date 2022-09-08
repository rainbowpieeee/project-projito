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
import {BASE_URL} from "../../constants/index"


interface IHeaderData {
  logos:Array<{
    alt_text:string;
    icon:string;
    page_slug:string | null;
    url:string | null;
  }>,
  mainMenu: Array <any>
}

const Header: FunctionComponent<IHeaderData> = ({logos, mainMenu}:IHeaderData) => {
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
              src={`${BASE_URL}${logos[0].icon}`}
              alt={logos[0].alt_text}
              className = {headerStyles.mainLogo}
            />
          </Link>
          <a
            href="https://eusp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={headerStyles.link}
          >
            <img
              src={`${BASE_URL}${logos[1].icon}`}
              alt={logos[1].alt_text}
              className = {headerStyles.euLogo}
            />
          </a>
        </div>
        <HeaderNav menuLinks={mainMenu} desktop={desktop} open={menuOpen} closeMenu={()=>setMenuOpen(false)} />
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
