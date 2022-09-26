import { FC } from "react";
import { IDiaryItem } from "../../services/types/diary";
import materialsItemStyle from "./materials-item.module.css";
import { API_URL_FOR_IMAGE } from "../../constants";
import { Link } from "react-router-dom";
import { IMaterialsItem } from "../../services/types/materials";

export const MaterialsItem: FC<IMaterialsItem> = (diaryData) => {
  const { name, image, text, tag, sample } = diaryData;

  const titleClassName =
    name.split(" ").length < 3
      ? `${materialsItemStyle.cardTitle} ${materialsItemStyle.cardTitle_short}`
      : `${materialsItemStyle.cardTitle}`;

  return (
    <li className={materialsItemStyle.card}>
      <Link to={`page/${sample}`} className={materialsItemStyle.card__link}>
        <p className={materialsItemStyle.card__tag}>{tag}</p>
        <p className={titleClassName}>{name}</p>
        <img
          src={`${API_URL_FOR_IMAGE}${image}`}
          alt={`фотография ${name}`}
          className={materialsItemStyle.card__image}
        />
        <p className={materialsItemStyle.card__text}>{text}</p>
      </Link>
    </li>
  );
};
