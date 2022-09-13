import { FC } from "react";
import footerInfoStyles from "./footer-info.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/index";

interface IFooterInfo {
  logos: any;
  footerLinks: any;
  footerSocial: any;
}

export const FooterInfo: FC<IFooterInfo> = ({
  logos,
  footerLinks,
  footerSocial,
}) => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (   logos && footerLinks && footerSocial &&
    <section className={footerInfoStyles.info}>
      <div className={footerInfoStyles.logo}>
        <Link to="/" className={footerInfoStyles.link}>
          <img
            className={footerInfoStyles.mainLogo}
            src={`${BASE_URL}${logos[0].icon}`}
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
            src={`${BASE_URL}${logos[1].icon}`}
            alt={logos[1].alt_text}
          />
        </a>
      </div>
      <section className={footerInfoStyles.social}>
        <ul className={footerInfoStyles.links}>
          {footerSocial.map((link:any) => (
            <li className={footerInfoStyles.item}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={footerInfoStyles.link}
              >
                <img
                  src={`${BASE_URL}${link.icon}`}
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

        {footerLinks.map((link:any) => <li className={footerInfoStyles.item}>
            <a className={footerInfoStyles.link}
            href={link.url}
            >
              {link.title}
            </a>
          </li>)}

          
          
        </ul>
      </section>
    </section>
  );
};

export default FooterInfo;
