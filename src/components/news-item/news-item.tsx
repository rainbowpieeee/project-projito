import { FC } from "react";
import styles from "./news-item.module.css";
import { formatDate } from "../../utils/dateHelper";
import { INewsItem } from "../../services/types/news";
import { MOBYLE_MEDIA_QUERY } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";

export type TNewsItemProps = Omit<INewsItem, "id">;

const NewsItem: FC<TNewsItemProps> = ({
  date,
  tag,
  image,
  imageMobile,
  text,
}) => {
  const displayMobile = useMediaQuery(MOBYLE_MEDIA_QUERY);

  return (
    <article className={styles.newsItem}>
      <div className={styles.newsItem__titleContainer}>
        {
          date && (
            <time dateTime={date} className={styles.newsItem__date}>
              {formatDate(date, "short")}
            </time>
          )
        }
        <h3 className={styles.newsItem__title}>{tag}</h3>
      </div>
      <img
        width={212}
        height={223}
        src={require(`../../images/${displayMobile ? imageMobile : image}`)}
        alt={tag ?? "Картинка к новости"}
        className={styles.newsItem__image}
      />
      <p className={styles.newsItem__text}>{text}</p>
    </article>
  );
};

export default NewsItem;
