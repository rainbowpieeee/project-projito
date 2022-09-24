import { FC } from "react";
import { IProjectItem } from "../../services/types/project";
import { formatDate } from "../../utils/dateHelper";
import projectCardStyle from "./project-card.module.css";
import {API_URL_FOR_IMAGE} from "../../constants/index"

interface IProjectCardProps {
  readonly item: IProjectItem;
  readonly onClick: (projectId: number) => void
}

export const ProjectCard: FC<IProjectCardProps> = ({item, onClick}) => {

  return (
    <div className={projectCardStyle.card} onClick={() => onClick(item.id)}>
      <img className={projectCardStyle.image} src={`${API_URL_FOR_IMAGE}${item.cover}`} alt={'Картинка проекта'}/>
      <div className={projectCardStyle.text}>
        <div className={projectCardStyle.field}>
          <h3 className={projectCardStyle.title}>{item.title}</h3>
          <p className={projectCardStyle.description}>{item.annotation}</p>
        </div>
        <p className={projectCardStyle.date}>{formatDate(item.date_published, "long")}</p>
      </div>
    </div>

  )
}

export default ProjectCard;
