import { FC } from "react";
import materialsStyle from "./materials.module.css";
import { MaterialsItem } from "../materials-item/materials-item";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMaterialsProps } from "../../services/types/materials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useMediaQuery from "../../hooks/useMediaQuery";

export const Materials: FC<IMaterialsProps> = ({ title, cards }) => {
  const desktop = useMediaQuery("(min-width: 768px)");
  return (
    <section className={materialsStyle.materials}>
      <h2 className={materialsStyle.title}>{title}</h2>
      {desktop ? (
        <ul className={materialsStyle.cards}>
          {cards.map((item, index: number) => (
            <MaterialsItem
              name={item.title}
              image={item.cover}
              text={item.annotation}
              tag={item.label}
              key={index}
              sample={item.links[0].page_slug}
            />
          ))}
        </ul>
      ) : (
        <>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={12}
            slidesPerView={"auto"}
            pagination={{ el: ".pagination", clickable: true }}
            className={materialsStyle.swiper}
          >
            {cards.map((item, index: number) => (
              <SwiperSlide
                className={materialsStyle.swiperSlide}
                key={index + 100}
              >
                <MaterialsItem
                  name={item.title}
                  image={item.cover}
                  text={item.annotation}
                  tag={item.label}
                  key={index}
                  sample={item.links[0].page_slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`${materialsStyle.pagination} pagination`} />
        </>
      )}
    </section>
  );
};
