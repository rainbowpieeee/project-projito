import { FC } from "react";
import { IDiaryItem } from "../../services/types/diary";
import materialsStyle from "./materials.module.css";
import { MaterialsItem } from "../materials-item/materials-item";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useMediaQuery from "../../hooks/useMediaQuery";

interface IMaterialsProps {
  data: IDiaryItem[];
}

export const Materials: FC<IMaterialsProps> = ({ data }) => {
  const desktop = useMediaQuery("(min-width: 768px)")
  return (
    <section className={materialsStyle.materials}>
      <h2 className={materialsStyle.title}>Материалы</h2>
      {desktop ? (
        <ul className={materialsStyle.cards}>
          {
            data.map(item => (
              <MaterialsItem
                id={item.id}
                name={item.name}
                image={item.image}
                text={item.text}
                tag={item.tag}
                key={item.id}
                sample={item.sample}
              />
            ))
          }
        </ul>
      ) : (
        <>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={12}
            slidesPerView={"auto"}
            pagination={{ el: ".pagination", clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className={materialsStyle.swiper}
          >
            {
              data.map(item => (
                <SwiperSlide className={materialsStyle.swiperSlide} key={item.id}>
                  <MaterialsItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    text={item.text}
                    tag={item.tag}
                    key={item.id}
                    sample={item.sample}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className={`${materialsStyle.pagination} pagination`} />
        </>
      )}
    </section>
  )
}
