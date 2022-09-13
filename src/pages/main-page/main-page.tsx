import { FC, useState } from "react";
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
import { isExperience } from "../../utils/functions";
import Loader from "../../components/loader/loader";
import { lookup } from "dns";

const MainPage: FC = () => {
  const data: any =
    dataAPI.useGetFrontpageDataQuery();

  const popupData = data.data?.anchored[0]
  const introData = data.data?.blocks.find((block:any)=> block.layout === "actions").cards
  
 

  const { isLoading: isNewsLoading, data: newsData } =
    dataAPI.useGetMainNewsQuery();
  const { isLoading: isDiaryLoading, data: diaryData } =
    dataAPI.useGetDiariesQuery();
  const { isLoading: isBannerLoading, data: bannerData } =
    dataAPI.useGetBannerQuery();
  const { isLoading: isJournalLoading, data: journalData } =
    dataAPI.useGetMainJournalQuery();

  const [popupOpen, setPopupOpen] = useState(true);
  const newsForSlider = newsData
    ? newsData.map((news) => {
        return (
          <NewsItem
            date={news.date}
            tag={news.tag}
            text={news.text}
            image={news.image}
            imageMobile={news.imageMobile}
            key={news.id}
          />
        );
      })
    : [];

  if (
    isNewsLoading ||
    isBannerLoading ||
    isDiaryLoading ||
    isJournalLoading 
  ) {
    return <Loader />;
  }

  const journalForSlider = journalData
    ? journalData.map((item) => {
        return (
          <JournalItem isExp={isExperience(item)} item={item} key={item.id} />
        );
      })
    : [];

  return (
    <main>
      { popupData && popupOpen && (
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
      {!isDiaryLoading && diaryData && <Materials data={diaryData} />}
      {!isBannerLoading && bannerData && (
        <section className={pageStyles.page__section}>
          <Banner data={bannerData} />
        </section>
      )}

      {!isJournalLoading && journalData && (
        <section className={pageStyles.page__overflow}>
          <CardsSlider
            title="Журнал «Прожито»"
            textLink="Посмотреть всю подборку"
            cards={journalForSlider}
            sliderTitle="Новые материалы"
            to={"/journal"}
            slider={true}
          />
        </section>
      )}

      <Project />
    </main>
  );
};

export default MainPage;
