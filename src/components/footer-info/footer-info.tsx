import { FC } from "react";
import footerInfoStyles from "./footer-info.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { API_URL_FOR_IMAGE, DESKTOP_MEDIA_QUERY } from "../../constants/index";
import {IFooterProps} from "../../services/types/layout"

type FooterInfo = Omit<IFooterProps, "footerMenu">;

export const FooterInfo: FC<FooterInfo> = ({
  logos,
  footerLinks,
  footerSocial,
}) => {
  const desktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    logos &&
    footerLinks &&
    footerSocial && (
      <section className={footerInfoStyles.info}>
        <div className={footerInfoStyles.logo}>
          <Link to="/" className={footerInfoStyles.link}>
            <img
              className={footerInfoStyles.mainLogo}
              src={`${API_URL_FOR_IMAGE}${logos[0].icon}`}
              alt={logos[0].alt_text}
            />
          </Link>
          <a
            href={logos[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className={footerInfoStyles.link}
          >
            <img
              className={footerInfoStyles.euLogo}
              src={`${API_URL_FOR_IMAGE}${logos[1].icon}`}
              alt={logos[1].alt_text}
            />
          </a>
        </div>
        <section className={footerInfoStyles.social}>
          <ul className={footerInfoStyles.links}>
            {footerSocial.map((link, i: number) => (
              <li className={footerInfoStyles.item} key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerInfoStyles.link}
                >
                  <img
                    src={`${API_URL_FOR_IMAGE}${link.icon}`}
                    className={footerInfoStyles.icon}
                    alt={link.title}
                  />
                  <span className={footerInfoStyles.text}>{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={footerInfoStyles.legal}>
          <ul className={footerInfoStyles.legals}>
            {footerLinks.map((link, i: number) => (
              <li className={footerInfoStyles.item} key={i + 88}>
                <a className={footerInfoStyles.link} href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    )
  );
};

export default FooterInfo;
