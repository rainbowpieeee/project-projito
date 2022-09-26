import React, { FC, useState } from "react";
import { dataAPI } from "../../services/api/data";
import pageStyles from "../css/page.module.css";
import { Intro } from "../../components/intro/intro";
import { Materials } from "../../components/materials/materials";
import Popup from "../../components/popup/popup";
import Project from "../../components/project/project";
import Banner from "../../components/banner/banner";
import CardsSlider from "../../components/cards-slider/cards-slider";
import NewsItem from "../../components/news-item/news-item";
import { JournalItem } from "../../components/journal-item/journal-item";
import Loader from "../../components/loader/loader";
import { useSelector } from "react-redux";
import { IJournalItem } from "../../services/types/journal";

const MainPage: FC = () => {
  const { data, isLoading }: any = dataAPI.useGetFrontpageDataQuery();

  const popupData = data?.anchored[0];
  const introData = data?.blocks.find(
    (block: any) => block.layout === "actions"
  ).cards;
  const materialsData = data?.blocks.find(
    (block: any) => block.layout === "cards"
  );
  const bannerData = data?.blocks.find(
    (block: any) => block.layout === "card"
  ).cards;
  const specialData = data?.blocks.find(
    (block: any) => block.layout === "special"
  ).category;
  const journalData = data?.blocks.find(
    (block: any) => block.layout === "journal"
  );

  const newsDatas = useSelector((store) => (store as any).news.data);

  const [popupOpen, setPopupOpen] = useState(true);
  type TObj = {
    annotation: string;
    cover: string;
    date_published: string;
    layout: string;
    slug: string;
    subtitle: string;
    tags: string[] | string;
    title: string;
  };
  const newsForSlider = newsDatas
    ? newsDatas.map(
        (
          obj: {
            slug: string;
            date_published: string;
            tags: string | null | undefined;
            annotation: string;
            cover: string;
            id: string | number | undefined;
          },
          i: number
        ) => {
          return (
            <NewsItem
              date={obj.date_published}
              slug={obj.slug}
              tag={obj.tags}
              text={obj.annotation}
              image={`https://dev.archive.prozhito.org/${obj.cover}`}
              imageMobile={obj.cover}
              key={i}
            />
          );
        }
      )
    : [];

  const journalForSlider = journalData
    ? journalData.category.items.map((item: any) => {
        return <JournalItem item={item} key={item.id} />;
      })
    : [];

  if (isLoading) return <Loader />;
  return (
    <main>
      {popupData && popupOpen && (
        <Popup data={popupData} closePopup={setPopupOpen} />
      )}
      <Intro introData={introData} />
      {newsForSlider && (
        <section>
          <CardsSlider
            title="Новости и события"
            textLink="Ко всем новостям"
            cards={newsForSlider}
            sliderTitle="Свежее"
            to={"/news"}
          />
        </section>
      )}
      {materialsData && <Materials {...materialsData} />}

      {bannerData && (
        <section className={pageStyles.page__section}>
          <Banner {...bannerData[0]} />
        </section>
      )}

      {journalData && (
        <section className={pageStyles.page__overflow}>
          <CardsSlider
            title={journalData.category.title}
            textLink={journalData.category.archive_link_label}
            cards={journalForSlider}
            sliderTitle={journalData.category.subtitle}
            to={`/${journalData.category.slug}`}
            slider={true}
          />
        </section>
      )}

      <Project {...specialData} />
    </main>
  );
};

export default MainPage;
