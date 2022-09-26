import { FC } from "react";
import { dataAPI } from "../../services/api/data";
import projectStyle from "./project.module.css";
import { LinkButton } from "../link-button/link-button";
import { useNavigate } from "react-router";
import ProjectCard from "../project-card/project-card";
import { IProjectItem } from "../../services/types/project";

interface IProject {
  title: string;
  subtitle?: string;
  slug?: string;
  archive_link_label: string;
  items: Array<IProjectItem>;
}

export const Project: FC<IProject> = ({ title, items, archive_link_label }) => {
  const navigate = useNavigate();
  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <section className={projectStyle.project}>
      <h1 className={projectStyle.title}>{title}</h1>
      {items && (
        <ul className={projectStyle.container}>
          {items.slice(0, 2).map((item, i) => (
            <li key={i}>
              <ProjectCard
                item={item}
                onClick={() => handleNavigate(`/page/${item.slug}`)}
              />
            </li>
          ))}
        </ul>
      )}
      <div className={projectStyle.button}>
        <LinkButton to={`/not/found`}>{archive_link_label}</LinkButton>
      </div>
    </section>
  );
};

export default Project;
