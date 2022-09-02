import { FC } from "react";
import { IProjectItem } from "../../services/types/project";
import { formatDate } from "../../utils/dateHelper";
import projectCardStyle from "./project-card.module.css";

interface IProjectCardProps {
  readonly item: IProjectItem;
  readonly onClick: (projectId: number) => void
}

export const ProjectCard: FC<IProjectCardProps> = ({item, onClick}) => {

  return (
    <div className={projectCardStyle.card} onClick={() => onClick(item.id)}>
      <img className={projectCardStyle.image} src={require(`../../images/${item.image}`)} alt={'Картинка проекта'}/>
      <div className={projectCardStyle.text}>
        <div className={projectCardStyle.field}>
          <h3 className={projectCardStyle.title}>{item.title}</h3>
          <p className={projectCardStyle.description}>{item.text}</p>
        </div>
        <p className={projectCardStyle.date}>{formatDate(item.date, "long")}</p>
      </div>
    </div>

  )
}

export default ProjectCard;
/*

          <div class="special-projects__container">
            <div class="special-projects__card">
              <img
                class="special-projects__image"
                alt="книга"
                src="./images/special-projects-card1.png"
              />
              <div class="special-projects__main-text">
                <div class="special-projects__field">
                  <h3 class="special-projects__subtitle">«Прожито» в Перми</h3>
                  <p class="special-projects__description">
                    Проект осуществляет поиск и копирование документов
                    в пермских государственных и семейных архивах для того,
                    чтобы собрать цифровую народную коллекцию документов
                    по истории города и края
                  </p>
                </div>
                <p class="special-projects__date">13 декабря 2021</p>
              </div>
            </div>

*/
