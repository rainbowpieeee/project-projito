import { FC } from "react";
import styles from "./news-item.module.css";
import { formatDate } from "../../utils/dateHelper";
import { INewsItem } from "../../services/types/news";
import { MOBYLE_MEDIA_QUERY } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";

export type TNewsItemProps = Omit<INewsItem, "id">;

const NewsItem: FC<TNewsItemProps> = ({
  annotation,
  cover,
  date_published,
  layout,
  slug,
  subtitle,
  tags,
  title,
}) => {
  const displayMobile = useMediaQuery(MOBYLE_MEDIA_QUERY);
  return (
    <article className={styles.newsItem}>
      <Link className={styles.link} to={`/page/${slug}`}>
        <div className={styles.newsItem__titleContainer}>
          {date_published && (
            <time dateTime={date_published} className={styles.newsItem__date}>
              {date_published}
            </time>
          )}
          <h3 className={styles.newsItem__title}>{tags}</h3>
        </div>
        <img
          width={212}
          height={223}
          src={cover}
          alt={"Картинка к новости"}
          className={styles.newsItem__image}
        />
        <p className={styles.newsItem__text}>{annotation}</p>
      </Link>
    </article>
  );
};

export default NewsItem;
