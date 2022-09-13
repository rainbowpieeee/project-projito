import { Link} from "react-router-dom";
import {useState} from 'react'
import headerNavItemStyles from "./header-nav-item.module.css";
import { set } from "immer/dist/internal";

export const HeaderNavItem = ({linkData, onMouseEnter, onMouseLeave}:any) => {
  const slug = linkData.page_slug;
  const url = linkData.url;
  const [itemData, ] = useState(linkData)


 

  return slug ? (
    <Link to={slug} className={headerNavItemStyles.menu__link}
    onMouseEnter = {() => onMouseEnter(itemData.children)}
    onMouseLeave = {() => onMouseLeave()}
    >
      {linkData.title}
    </Link>
  ) : (
    <a
    onMouseEnter = {() => onMouseEnter(itemData.children)}
    onMouseLeave = {() => onMouseLeave()}
    href={url}
    className={headerNavItemStyles.menu__link}
    target="_blank"
  >
    {linkData.title}
  </a>
  );
};

// link.page_slug ? (
//   <Link
//     to={link.page_slug}
//     className={headerNavStyles.menu__link}
//   >
//     {" "}
//     {link.title}
//   </Link>
// ) : (
//   <a
//     href={link.url}
//     className={headerNavStyles.menu__link}
//     target="_blank"
//   >
//     {link.title}
//   </a>
// );
// })}
// <HeaderDropdown
// visible={dropDownVisible}
// desktop={desktop}
// setDropDownVisible={setDropDownVisible}
// closeMenu={closeMenu}
// />

// <li
// className={headerNavStyles.menu__item}
// onMouseEnter={() => setDropDownVisible(true)}
// onMouseLeave={() => setDropDownVisible(false)}
// >
// <Link to="/" className={headerNavStyles.menu__link} onClick={closeMenu}>
//   О&nbsp;проекте
// </Link>
// </li>
