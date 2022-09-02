import { FC } from "react";
import introStyles from "./intro.module.css";
import { IntroItem, IntroItemProps } from "../intro-item/intro-item";

const introData: IntroItemProps[] = [{
  title: 'Передать документы',
  text: 'Передайте в «Прожито» копии документов из семейного архива, чтобы сделать их доступнее исследователям и читателям',
  action: 'Подробнее',
  link: '/sample/diary1'
},
{
  title: 'Стать волонтёром',
  text: 'Вы можете помочь нашему делу — для работы с документами нужен компьютер и несколько свободных часов в неделю',
  action: 'Узнать больше',
  link: '/sample/diary2'
},
{
  title: 'Дневники и воспоминания',
  text: 'Мы собрали тексты опубликованных дневников и воспоминаний и сделали по ним  расширенный поиск',
  action: 'Ознакомиться',
  link: '/sample/diary3'
},
{
  title: 'Работа с архивом',
  text: 'Как устроен наш архив и поиск по сохранённым документам',
  action: 'Перейти к архиву',
  link: '/sample/diary3'
}];


export const Intro: FC = () => {
  return (
    <section className={introStyles.intro}>
      <div className={introStyles.intro__container}>
        <h1 className={introStyles.intro__title}>
          Центр «Прожито» собирает, описывает и публикует документы личного
          происхождения и разрабатывает исследовательские инструменты
          для работы с ними. Материалы публикуются и описываются силами
          участников-волонтёров, к сообществу которых может присоединиться
          каждый.
        </h1>

        <div className={introStyles.intro__cardContainer}>
          <ul className={introStyles.intro__cards}>
            {
              introData.map((item: IntroItemProps, index) => (
                <IntroItem
                  title={item.title}
                  text={item.text}
                  action={item.action}
                  link={item.link}
                  key={index}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
