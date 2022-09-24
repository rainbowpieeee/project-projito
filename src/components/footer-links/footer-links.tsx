import { FC } from "react";
import footerLinksStyles from "./footer-links.module.css";
import {IFooterProps} from "../../services/types/layout"

type IFooterLinks = Omit<IFooterProps, "logos" | "footerLinks" | "footerSocial">

export const FooterLinks: FC<IFooterLinks> = ({ footerMenu }) => {
  return ( footerMenu ? 
    <section className={footerLinksStyles.container}>
      <ul className={footerLinksStyles.links}>
        {footerMenu.map((link, i:number ) => (
          <li className={footerLinksStyles.item} key = {i}>
            <a href={link.url} className={footerLinksStyles.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </section>
    :null
  )
};

export default FooterLinks;
