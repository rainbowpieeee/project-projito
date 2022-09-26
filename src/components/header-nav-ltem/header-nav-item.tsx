import { Link } from "react-router-dom";
import { EventHandler, FC, MouseEventHandler, useState } from "react";
import headerNavItemStyles from "./header-nav-item.module.css";
import { ILink } from "../../services/types/layout";

type THeaderNavItem = {

  linkData:ILink;
  onMouseEnter: (children:[{title: string;
    page_slug: string;
    url: string;
    children?: [string];}] | undefined)=>void;
  onMouseLeave: ()=>void;
}


export const HeaderNavItem: FC<THeaderNavItem> = ({
  linkData,
  onMouseEnter,
  onMouseLeave,
}) => {
  const slug = linkData.page_slug;
  const url = linkData.url;
  const [itemData] = useState(linkData);

  return slug ? (
    <Link
      to={slug}
      className={headerNavItemStyles.menu__link}
      onMouseEnter={() => onMouseEnter(itemData.children)}
      onMouseLeave={() => onMouseLeave()}
    >
      {linkData.title}
    </Link>
  ) : (
    <a
      onMouseEnter={() => onMouseEnter(itemData.children)}
      onMouseLeave={() => onMouseLeave()}
      href={url}
      className={headerNavItemStyles.menu__link}
      target="_blank"
    >
      {linkData.title}
    </a>
  );
};
