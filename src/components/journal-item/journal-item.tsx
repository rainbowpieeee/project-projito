import { FC } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { API_URL_FOR_IMAGE } from "../../constants";
import { IJournalItem } from "../../services/types/journal";
import journalItemStyles from "./journal-item.module.css";

interface IJournalItemProps {
  item: IJournalItem;
  //slug: any;
}
export const JournalItem: FC<IJournalItemProps> = ({ item }) => {
  const itemTypeName = item.tags.map((tag) => tag != "Тематическая подборка")
    ? "Спецпроект"
    : "Тематическая подборка";

  return (
    <Link className={journalItemStyles.link} to={`/page/${item.slug}`}>
      {item.layout === "round" ? (
        <article className={`${journalItemStyles.cardExp}`} key={item.id}>
          <p className={journalItemStyles.name}>
            {(item as IJournalItem).title}
          </p>
          <img
            src={`${API_URL_FOR_IMAGE}${item.cover}`}
            className={journalItemStyles.imgExp}
            alt={"Картинка журнала"}
          />
          <p className={`${journalItemStyles.quoteExp}`}>{item.annotation}</p>
          <p className={journalItemStyles.typeExp}>{item.tags.join(", ")}</p>
        </article>
      ) : (
        <article className={journalItemStyles.card} key={item.id}>
          <img
            src={`${API_URL_FOR_IMAGE}${item.cover}`}
            className={journalItemStyles.img}
            alt={"Картинка журнала"}
          />
          <p className={journalItemStyles.type}>{itemTypeName}</p>
          <div className={journalItemStyles.text}>
            <p className={journalItemStyles.title}>
              {(item as IJournalItem).title}
            </p>
            <p className={journalItemStyles.subtitle}>
              {(item as IJournalItem).subtitle}
            </p>
            <p className={journalItemStyles.quote}>{item.annotation}</p>
          </div>
        </article>
      )}
    </Link>
  );
};
