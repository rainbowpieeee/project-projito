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
import { useSelector } from "../../hooks";
import { IJournalItem } from "../../services/types/journal";
import { TBlock } from "../../services/types/front-page";
import { API_URL_FOR_IMAGE } from "../../constants";
import { TObj } from "../../services/types/news";

const MainPage: FC = () => {
  const { data, isLoading }: any = dataAPI.useGetFrontpageDataQuery();

  const popupData = data?.anchored[0];
  const introData = data?.blocks.find(
    (block: TBlock) => block.layout === "actions"
  ).cards;
  const materialsData = data?.blocks.find(
    (block: TBlock) => block.layout === "cards"
  );
  const bannerData = data?.blocks.find(
    (block: TBlock) => block.layout === "card"
  ).cards;
  const specialData = data?.blocks.find(
    (block: TBlock) => block.layout === "special"
  ).category;
  const journalData = data?.blocks.find(
    (block: TBlock) => block.layout === "journal"
  );

  const newsDatas = useSelector((store) => store.news.data);

  const [popupOpen, setPopupOpen] = useState(true);

  const newsForSlider = newsDatas
    ? newsDatas.map((obj: TObj, i: number) => {
        return (
          <NewsItem
            date_published={obj.date_published}
            slug={obj.slug}
            tags={obj.tags}
            annotation={obj.annotation}
            cover={`${API_URL_FOR_IMAGE}/${obj.cover}`}
            layout={obj.layout}
            subtitle={obj.subtitle}
            title={obj.title}
            key={i}
          />
        );
      })
    : [];

  const journalForSlider = journalData
    ? journalData.category.items.map((item: IJournalItem) => {
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
