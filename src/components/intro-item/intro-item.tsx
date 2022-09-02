import { FC } from "react";
import introItemStyles from "./intro-item.module.css";
import { LinkButton } from "../link-button/link-button";

export interface IntroItemProps {
  title: string;
  text: string;
  action: string;
  link: string;
}

export const IntroItem: FC<IntroItemProps> = (introData: IntroItemProps) => {
  const { title, text, action, link } = introData;

  return (
    <li className={introItemStyles.intro__card}>
      <h3 className={introItemStyles.intro__cardTitle}>{title}</h3>
      <p className={introItemStyles.intro__cardSubtitle}>{text}</p>
      <div className={introItemStyles.intro__linkContainer}>
        <p className={introItemStyles.intro__aboutLink}>{action}</p>
        <LinkButton to={link} round size="large" />
      </div>
    </li>
  );
};
