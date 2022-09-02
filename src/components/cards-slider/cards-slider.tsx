import { FC, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Scrollbar, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

import { LinkButton } from "../link-button/link-button";

import styles from "./cards-slider.module.css";
import { MOBYLE_MEDIA_QUERY } from "../../constants";
import useMediaQuery from "../../hooks/useMediaQuery";

interface ICardsSliderProps {
  to: string;
  title: string;
  textLink: string;
  cards: readonly JSX.Element[];
  sliderTitle: string;
  slider?: boolean;
}

const NavBtn: FC<{ direction: "left" | "right"; disabled: boolean }> = ({
  direction,
  disabled,
}) => {
  const swiper = useSwiper();
  const directionSlide = direction === "left" ? "slidePrev" : "slideNext";

  return (
    <LinkButton
      type="button"
      round
      size="medium"
      color={false}
      border
      direction={direction}
      disabled={disabled}
      onClick={() => swiper[directionSlide]()}
    />
  );
};

/**
 *
 * @arr Массив элементов для слайдера
 */
const Slider: FC<{ arr: readonly JSX.Element[]; title: string }> = ({
  arr,
  title,
}) => {
  const [disabledPrevBtn, setDisabledPrevBtn] = useState(true);
  const [disabledNextBtn, setDisabledNextBtn] = useState(false);
  return (
    <Swiper
      wrapperTag="ul"
      modules={[Navigation, Scrollbar]}
      scrollbar={{
        draggable: true,
        dragSize: 355,
        horizontalClass: `${styles.swiper__scrollbar}`,
      }}
      spaceBetween={20}
      slidesPerView={2.78}
      className={styles.swiper}
      onSlideChange={(e) => {
        !e.isBeginning ? setDisabledPrevBtn(false) : setDisabledPrevBtn(true);
        !e.isEnd && setDisabledNextBtn(false);
      }}
      onReachEnd={() => setDisabledNextBtn(true)}
    >
      <div className={styles.swiper__navContainer}>
        <h2
          className={`${styles.cardsSlider__title} ${styles.cardsSlider__sliderTitle}`}
        >
          {title}
        </h2>
        <div className={styles.swiper__btnContainer}>
          <NavBtn direction="left" disabled={disabledPrevBtn} />
          <NavBtn direction="right" disabled={disabledNextBtn} />
        </div>
      </div>
      {arr.map((item: JSX.Element) => (
        <SwiperSlide key={item.key} tag="li" className={styles.swiper__slide}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SliderMobile: FC<{ arr: readonly any[] }> = ({ arr }) => {
  return (
    <Swiper
      wrapperTag="ul"
      className={styles.swiperMobile}
      centeredSlides={true}
      slidesPerView={1}
      effect={"cards"}
      grabCursor={true}
      slideToClickedSlide={true}
      cardsEffect={{
        rotate: false,
        slideShadows: false,
      }}
      modules={[EffectCards]}
    >
      {arr.map((item) => (
        <SwiperSlide
          key={item.key}
          tag="li"
          className={styles.swiperMobile__slides}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const CardsSlider: FC<ICardsSliderProps> = ({
  to,
  title,
  textLink,
  cards,
  sliderTitle,
  slider = false,
}: ICardsSliderProps) => {
  const displayMobile = useMediaQuery(MOBYLE_MEDIA_QUERY);

  const desktopAndTablet = (
    <div className={styles.cardsSlider}>
      <div className={styles.cardsSlider__bgSection}>
        <h2
          className={`${styles.cardsSlider__title} ${styles.cardsSlider__bgTitle}`}
        >
          {title}
        </h2>
        <div className={styles.cardsSlider__linkButtonContainer}>
          <p className={styles.cardsSlider__textLink}>{textLink}</p>
          <LinkButton size="large" round to={to} />
        </div>
      </div>
      <div className={styles.cardsSlider__sliderContainer}>
        <Slider arr={cards} title={sliderTitle} />
      </div>
    </div>
  );

  const mobile = (
    <div className={styles.sliderMobile}>
      <div className={styles.title__container}>
        <h2 className={`${styles.sliderMobile__title}`}>{title}</h2>
        <div className={styles.sliderMobile__linkButtonContainer}>
          <LinkButton size="small" color={false} border={false} to={to}>
            {textLink}
          </LinkButton>
        </div>
      </div>
      {!slider && cards.slice(0, 3).map((el) => el)}
      {slider && <SliderMobile arr={cards} />}
    </div>
  );

  return displayMobile ? mobile : desktopAndTablet;
};

export default CardsSlider;
