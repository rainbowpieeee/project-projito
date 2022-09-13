import { FC } from "react";
import footerLinksStyles from "./footer-links.module.css";

interface IFooterLinks {
  footerMenu: any;
}

export const FooterLinks: FC<IFooterLinks> = ({ footerMenu }) => {
  return ( footerMenu ? 
    <section className={footerLinksStyles.container}>
      <ul className={footerLinksStyles.links}>
        {footerMenu.map((link:any) => (
          <li className={footerLinksStyles.item}>
            <a href={link.url} className={footerLinksStyles.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </section>
    :null
  )
};

export default FooterLinks;
