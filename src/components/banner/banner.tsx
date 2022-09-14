import { FC } from "react";
import { Link, To } from "react-router-dom";
import { IBanner } from "../../services/types/banner";
import bannerStyles from "./banner.module.css";
import { LinkButton } from "../link-button/link-button";
import useMediaQuery from "../../hooks/useMediaQuery";
import { BASE_URL } from "../../constants/index";

// to={`/sample/${data.sample}}`}

interface IBannerProps {
  title: string;
  annotation: string;
  cover: string;
  links: Array<{
    label: string;
    page_slug: string | To;
    url: URL | undefined | string;
  }>;
}
const Banner: FC<IBannerProps> = ({ title, annotation, cover, links }) => {
  const desktop = useMediaQuery("(min-width: 480px)");

  return (
    <article className={bannerStyles.banner}>
      <img
        className={bannerStyles.banner__image}
        src={`${BASE_URL}${cover}`}
        alt={title}
      />
      <h2 className={bannerStyles.banner__title}>{title}</h2>
      <p className={bannerStyles.banner__text}>{annotation}</p>
      <div className={bannerStyles.banner__buttonsWrapper}>
        {desktop ? (
          <>
            <LinkButton to={`sample/${links[1].page_slug}`} color={false}>
              {links[1].label}
            </LinkButton>
            <LinkButton
              type="button"
              onClick={() => window.open(links[0].url, "_blank")}
            >
              {links[0].label}
            </LinkButton>
          </>
        ) : (
          <>
            <LinkButton
              type="button"
              onClick={() => window.open(links[0].url, "_blank")}
            >
              {links[0].label}
            </LinkButton>
            <LinkButton to={`sample/${links[1].page_slug}`} color={false}>
              {links[1].label}
            </LinkButton>
          </>
        )}
      </div>
    </article>
  );
};
export default Banner;
