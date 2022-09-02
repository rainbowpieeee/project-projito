import React, {FC} from "react"
import styles from "./not-found-page.module.css"
import {LinkButton} from "../../components/link-button/link-button";
import errorImg from "../../images/404page.svg";

const NotFoundPage: FC = () => {
  return (
    <article className={styles.container}>
      <img className={styles.img} src={errorImg} alt='ошибка 404'/>
      <h1 className="text text_type_main-large">
        Страница не найдена
      </h1>
      <div className={styles.link}>
        <LinkButton to={`/`} arrow={false}>На главную</LinkButton>
      </div>
    </article>
  );
}

export default NotFoundPage


