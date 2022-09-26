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
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { API_URL_FOR_IMAGE } from "../../constants";
import { TObj } from "../../services/types/news";

const NewsPage: FC = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageNewsSelector);
  const data = useSelector(dataNewsSelector);
  const total = useSelector(totalNewsSelector);

  const newsDatas = useSelector((store) => (store as any).news.data);

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

  if (isLoading) return <Loader />;

  return (
    <div className={newsPageStyle.main}>
      <Breadcrumbs />
      <h1 className={newsPageStyle.title}>Новости и события</h1>
      {!isLoading && newsDatas && (
        <>
          <ul className={newsPageStyle.container}>
            {newsDatas.map((obj: TObj, i: number) => (
              <li key={i}>
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
              </li>
            ))}
          </ul>
          {total > newsDatas.length && (
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
