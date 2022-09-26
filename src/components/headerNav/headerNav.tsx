import headerNavStyles from "./headerNav.module.css";
import { FunctionComponent, useState } from "react";
import HeaderDropdown from "../headerDropdown/headerDropdown";
import { HeaderNavItem } from "../header-nav-ltem/header-nav-item";
import { IHeaderNavProps } from "../../services/types/layout";
import { Link } from "react-router-dom";
const HeaderNav: FunctionComponent<IHeaderNavProps> = ({
  desktop,
  open,
  closeMenu,
  menuLinks,
}) => {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [dropDownData, setDropDownData] = useState(null);

  const handleMouseEnter = (itemData: any) => {
    setDropDownData(itemData);
    setDropDownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropDownVisible(false);
  };

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
          {menuLinks.map((link, i: number) => (

            <li className={headerNavStyles.menu__item} key={i}>

              <HeaderNavItem
                linkData={link}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></HeaderNavItem>
              {!desktop && link.children && (
                <ul className={headerNavStyles.mobileSubMenu}>
                  {link.children.map((sublink, i: number) => (
                    <li
                      key={i + 200}
                      className={headerNavStyles.mobileSubMenuItem}
                    >
                      {sublink.page_slug ? (
                        <Link
                          to={sublink.page_slug}
                          className={headerNavStyles.mobileSubMenuLink}
                        >
                          {sublink.title}
                        </Link>
                      ) : (
                        <a
                          href={sublink.url}
                          target="_blank"
                          className={headerNavStyles.mobileSubMenuLink}
                        >
                          {sublink.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {dropDownData && desktop && (
        <HeaderDropdown
          visible={dropDownVisible}
          desktop={desktop}
          setDropDownVisible={setDropDownVisible}
          closeMenu={closeMenu}
          dropDownData={dropDownData}
        />
      )}
    </div>
  );
};

export default HeaderNav;
