import { FC, useState } from "react";
import { dataAPI } from "../../services/api/data";
import { useDispatch, useSelector } from "../../hooks";
import {
  dataJournalSelector,
  filterJournalSelector,
  pageJournalSelector,
  totalJournalSelector,
} from "../../services/selectors/journal";
import {
  setJournalFilter,
  setJournalPage,
} from "../../services/slices/journal";
import TabItem from "../../components/tabs-item/tabs-item";
import journalPageStyles from "./journal-page.module.css";
import { JournalItem } from "../../components/journal-item/journal-item";
import { LinkButton } from "../../components/link-button/link-button";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  JOURNAL_PAGE_LIMIT_DESKTOP,
  JOURNAL_PAGE_LIMIT_TABLET,
  JOURNAL_PAGE_LIMIT_MOBILE,
} from "../../constants";
import Loader from "../../components/loader/loader";
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs";
import { TJournalTags } from "../../services/types/journal";

const JournalPage: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector);
  const page = useSelector(pageJournalSelector);
  const total = useSelector(totalJournalSelector);
  const journal = useSelector(dataJournalSelector);
  const [selectedTab, setSelectedTab] = useState<string>(filter);

  const tablet = useMediaQuery("(max-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 425px)");

  const journalTags = journal.category_tags;

  let pageLimit = JOURNAL_PAGE_LIMIT_DESKTOP;
  if (tablet) {
    pageLimit = JOURNAL_PAGE_LIMIT_TABLET;
  }
  if (mobile) {
    pageLimit = JOURNAL_PAGE_LIMIT_MOBILE;
  }

  const { isLoading: isJournalLoading } = dataAPI.useGetJournalQuery(
    { page, size: pageLimit, filter: filter },
    { refetchOnMountOrArgChange: true }
  );
  const handleLoad = () => {
    dispatch(setJournalPage(page + 1));
  };

  const handleFilter = (value: string) => {
    setSelectedTab(value);
    dispatch(setJournalFilter(value));
  };

  if (isJournalLoading) return <Loader />;
  return (
    <main className={journalPageStyles.main}>
      <Breadcrumbs />
      <h1 className={journalPageStyles.heading}>{journal.title}</h1>
      <p className={journalPageStyles.heading_tags}>Сортировать :</p>
      <ul className={journalPageStyles.tabs}>
        <TabItem
          value={"all"}
          selected={selectedTab === "all"}
          setSelected={() => handleFilter("all")}
          name={"Все"}
        />
        {journalTags &&
          journalTags.map((tag: TJournalTags) => (
            <TabItem
              value={tag.slug}
              selected={selectedTab === tag.slug}
              setSelected={() => handleFilter(tag.slug)}
              name={
                journalTags.find(({ slug }: any) => slug === tag.slug).title
              }
            />
          ))}
      </ul>
      {!isJournalLoading && journal && (
        <ul className={journalPageStyles.list}>
          {journal &&
            journal.items?.map((item: any) => (
              <li className={journalPageStyles.list__item}>
                <JournalItem key={item.id} item={item} />
              </li>
            ))}
        </ul>
      )}
      <div className={journalPageStyles.buttonContainer}>
        <LinkButton
          type={"button"}
          onClick={handleLoad}
          disabled={total === journal.length}
        >
          Загрузить еще
        </LinkButton>
      </div>
    </main>
  );
};

export default JournalPage;
