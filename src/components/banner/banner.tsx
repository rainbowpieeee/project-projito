import { FC } from "react";
import { IBanner } from "../../services/types/banner";
import bannerStyles from "./banner.module.css";
import { LinkButton } from "../link-button/link-button";
import useMediaQuery from "../../hooks/useMediaQuery";

// to={`/sample/${data.sample}}`}

interface IBannerProps {
  data: IBanner;
}
const Banner: FC<IBannerProps> = ({ data }) => {
  const desktop = useMediaQuery('(min-width: 480px)');

  return (
    <article className={bannerStyles.banner}>
      <img
        className={bannerStyles.banner__image}
        src={require(`../../images/${data.photo}`)}
        alt={"Картинка баннер"}
      />
      <h2 className={bannerStyles.banner__title}>{data.title}</h2>
      <p className={bannerStyles.banner__text}>{data.text}</p>
      <div className={bannerStyles.banner__buttonsWrapper}>
        {desktop
          ?(
            <>
            <LinkButton to={`/sample/banner`} color={false}>
          Перейти к материалу
        </LinkButton>
          <LinkButton to={`/`}>Оставить заявку</LinkButton>
            </>
          )
        :(
          <>
          <LinkButton to={`/`}>Оставить заявку</LinkButton>
          <LinkButton to={`/sample/banner`} color={false}>
          Перейти к материалу
          </LinkButton>
          </>
          )}
      </div>
    </article>
  );
};
export default Banner;
