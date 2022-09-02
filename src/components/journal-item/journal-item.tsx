import { FC } from "react";
import {
  IJournalExperienceItem,
  IJournalItem,
  IJournalMagazineItem,
} from "../../services/types/journal";
import journalItemStyles from "./journal-item.module.css";

interface IJournalItemProps {
  item: IJournalItem;
  isExp: boolean;
}
export const JournalItem: FC<IJournalItemProps> = ({ item, isExp }) => {
  const itemTypeName =
    item.type === "project" ? "Спецпроект" : "Тематическая подборка";

  return isExp ? (
    <article className={`${journalItemStyles.cardExp}`} key={item.id}>
      <p className={journalItemStyles.name}>
        {(item as IJournalExperienceItem).name}
      </p>
      <img
        src={require(`../../images/${item.image}`)}
        className={journalItemStyles.imgExp}
        alt={"Картинка журнала"}
      />
      <p className={`${journalItemStyles.quoteExp}`}>{item.text}</p>
      <p className={journalItemStyles.typeExp}>Опыт читателя</p>
    </article>
  ) : (
    <article className={journalItemStyles.card} key={item.id}>
      <img
        src={require(`../../images/${item.image}`)}
        className={journalItemStyles.img}
        alt={"Картинка журнала"}
      />
      <p className={journalItemStyles.type}>{itemTypeName}</p>
      <div className={journalItemStyles.text}>
        <p className={journalItemStyles.title}>
          {(item as IJournalMagazineItem).title}
        </p>
        <p className={journalItemStyles.subtitle}>
          {(item as IJournalMagazineItem).subtitle}
        </p>
        <p className={journalItemStyles.quote}>{item.text}</p>
      </div>
    </article>
  );
};
