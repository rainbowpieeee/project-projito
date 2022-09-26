import { FC } from "react";
import introItemStyles from "./intro-item.module.css";
import { LinkButton } from "../link-button/link-button";

export interface IntroItemProps {
  title: string;
  annotation: string;
  label?: string;
  cover?: string;
  links: [
    {
      label?: string;
      page_slug?: string;
      url?: string;
    }
  ];
}

export const IntroItem: FC<IntroItemProps> = (introData: IntroItemProps) => {
  const { title, annotation, label, links } = introData;

  return (
    <li className={introItemStyles.intro__card}>
      <h3 className={introItemStyles.intro__cardTitle}>{title}</h3>
      <p className={introItemStyles.intro__cardSubtitle}>{annotation}</p>
      <div className={introItemStyles.intro__linkContainer}>
        <p className={introItemStyles.intro__aboutLink}>{label}</p>



        {<LinkButton to={links[0].url || links[0].page_slug} round size="large" type={links[0].url ? "button" : "link"} />}



      </div>
    </li>
  );
};
