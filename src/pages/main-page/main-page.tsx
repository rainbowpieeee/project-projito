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
import { lookup } from "dns";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import store from "../../services/store";

const MainPage: FC = () => {
  const data: any = dataAPI.useGetFrontpageDataQuery();

  const popupData = data.data?.anchored[0];
  const introData = data.data?.blocks.find(
    (block: any) => block.layout === "actions"
  ).cards;
  const materialsData = data.data?.blocks.find(
    (block: any) => block.layout === "cards"
  );
  const bannerData = data.data?.blocks.find(
    (block: any) => block.layout === "card"
  ).cards;
  const specialData = data.data?.blocks.find(
    (block: any) => block.layout === "special"
  ).category;
  const journalData = data.data?.blocks.find(
    (block: any) => block.layout === "journal"
  ).category;
  const { isLoading: isNewsLoading, data: newsData } =
    dataAPI.useGetMainNewsQuery();
  const { isLoading: isDiaryLoading, data: diaryData } =
    dataAPI.useGetDiariesQuery();
  const { isLoading: isJournalLoading } = dataAPI.useGetMainJournalQuery();

  const { isLoading: isFrontpageLoading, data: frontpageData } =
    dataAPI.useGetFrontpageDataQuery();

  const dispatch = useDispatch();

  const newsDatas = useSelector((store) => (store as any).news.data);

  const allData = frontpageData ? frontpageData.blocks : [];
  const [news] = allData?.filter(
    (obj: { layout: string }) => obj.layout === "news"
  );

  const newsLoad = news?.category.items;

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
        (obj: {
          date_published: string;
          tags: string | null | undefined;
          annotation: string;
          cover: string;
          id: string | number | undefined;
        }) => {
          return (
            <NewsItem
              date={obj.date_published}
              tag={obj.tags}
              text={obj.annotation}
              image={`https://dev.archive.prozhito.org/${obj.cover}`}
              imageMobile={obj.cover}
              key={obj.id}
            />
          );
        }
      )
    : [];

  if (isNewsLoading || isDiaryLoading || isJournalLoading) {
    return <Loader />;
  }

  const journalForSlider = journalData
    ? journalData.items.map((item: any) => {
        return <JournalItem item={item} key={item.id} />;
      })
    : [];

  return (
    <main>
      {popupData && popupOpen && (
        <Popup data={popupData} closePopup={() => setPopupOpen(false)} />
      )}
      <Intro introData={introData} />
      {!isNewsLoading && newsForSlider && (
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

      {!isJournalLoading && journalData && (
        <section className={pageStyles.page__overflow}>
          <CardsSlider
            title={journalData.title}
            textLink={journalData.archive_link_label}
            cards={journalForSlider}
            sliderTitle={journalData.subtitle}
            to={`/${journalData.slug}`}
            slider={true}
          />
        </section>
      )}

      <Project {...specialData} />
    </main>
  );
};

export default MainPage;
