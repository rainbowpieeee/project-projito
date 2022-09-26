import { FC } from "react";
import introStyles from "./intro.module.css";
import { IntroItem, IntroItemProps } from "../intro-item/intro-item";

interface IIntroProps {
  introData: Array<IntroItemProps>;
}

export const Intro: FC<IIntroProps> = (props: IIntroProps) => {
  return (
    <section className={introStyles.intro}>
      <div className={introStyles.intro__container}>
        <h1 className={introStyles.intro__title}>
          Центр «Прожито» собирает, описывает и публикует документы личного
          происхождения и разрабатывает исследовательские инструменты для работы
          с ними. Материалы публикуются и описываются силами
          участников-волонтёров, к сообществу которых может присоединиться
          каждый.
        </h1>

        <div className={introStyles.intro__cardContainer}>
          <ul className={introStyles.intro__cards}>
            {props.introData?.map((item: IntroItemProps, index) => (
              <IntroItem
                title={item.title}
                annotation={item.annotation}
                label={item.links[0].label}
                links={item.links}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
