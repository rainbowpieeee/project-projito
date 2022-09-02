import { FC } from "react";
import { dataAPI } from "../../services/api/data";
import { useDispatch, useSelector } from "../../hooks";
import {
  dataNewsSelector,
  pageNewsSelector,
  totalNewsSelector,
} from "../../services/selectors/news";
import { setNewsPage } from "../../services/slices/news";
import {
  NEWS_PAGE_LIMIT_DESKTOP,
  NEWS_PAGE_LIMIT_MOBILE,
  NEWS_PAGE_LIMIT_TABLET,
} from "../../constants";
import newsPageStyle from "./news-page.module.css";
import { LinkButton } from "../../components/link-button/link-button";
import useMediaQuery from "../../hooks/useMediaQuery";
import NewsItem from "../../components/news-item/news-item";
import Loader from "../../components/loader/loader";

const NewsPage: FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageNewsSelector);
  const data = useSelector(dataNewsSelector);
  const total = useSelector(totalNewsSelector);

  const tablet = useMediaQuery("(max-width: 1023px)");
  const mobile = useMediaQuery("(max-width: 767px)");
  let pageLimit = NEWS_PAGE_LIMIT_DESKTOP;
  if (tablet) {
    pageLimit = NEWS_PAGE_LIMIT_TABLET;
  }
  if (mobile) {
    pageLimit = NEWS_PAGE_LIMIT_MOBILE;
  }

  const { isLoading } = dataAPI.useGetNewsQuery(
    { page, size: pageLimit },
    { refetchOnMountOrArgChange: true }
  );

  const handleLoad = () => {
    dispatch(setNewsPage(page + 1));
  };

  if (isLoading) return <Loader />

  return (
    <div className={newsPageStyle.main}>
      <h1 className={newsPageStyle.title}>Новости и события</h1>
      {!isLoading && data && (
        <>
          <ul className={newsPageStyle.container}>
            {data.map((item) => (
              <li key={item.id}>
                <NewsItem
                  text={item.text}
                  date={item.date}
                  image={item.image}
                  imageMobile={item.imageMobile}
                />
              </li>
            ))}
          </ul>
          {total > data.length && (
            <div className={newsPageStyle.button}>
              <LinkButton type={"button"} onClick={handleLoad}>
                Загрузить еще
              </LinkButton>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsPage;
