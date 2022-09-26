import { FC } from "react";
import FooterInfo from "../footer-info/footer-info";
import { FooterLinks } from "../footer-links/footer-links";
import footerStyles from "./footer.module.css";
import { IFooterProps } from "../../services/types/layout";

export const Footer: FC<IFooterProps> = ({
  footerMenu,
  logos,
  footerLinks,
  footerSocial,
}) => {
  return (
    <footer className={footerStyles.footer}>
      <FooterLinks footerMenu={footerMenu} />

      <FooterInfo
        logos={logos}
        footerLinks={footerLinks}
        footerSocial={footerSocial}
      />
    </footer>
  );
};

export default Footer;
