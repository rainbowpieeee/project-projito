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
import { TJournalFilter } from "../../services/types/journal";
import Tabs from "../../components/tabs/tabs";
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
import { isExperience } from "../../utils/functions";
import Loader from "../../components/loader/loader";

const JournalPage: FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterJournalSelector);
  const page = useSelector(pageJournalSelector);
  const total = useSelector(totalJournalSelector);
  const journal = useSelector(dataJournalSelector);
  const [selectedTab, setSelectedTab] = useState<TJournalFilter>(filter);

  const tablet = useMediaQuery("(max-width: 1024px)");
  const mobile = useMediaQuery("(max-width: 425px)");

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

  const handleFilter = (value: TJournalFilter) => {
    setSelectedTab(value);
    dispatch(setJournalFilter(value));
  };

  if (isJournalLoading) return <Loader />;

  return (
    <main className={journalPageStyles.main}>
      <h1 className={journalPageStyles.heading}>
        Журнал &laquo;Прожито&raquo;
      </h1>
      <Tabs>
        <TabItem
          value={"all"}
          selected={selectedTab === "all"}
          setSelected={() => handleFilter("all")}
        />
        <TabItem
          value={"topic"}
          selected={selectedTab === "topic"}
          setSelected={() => handleFilter("topic")}
        />
        <TabItem
          value={"project"}
          selected={selectedTab === "project"}
          setSelected={() => handleFilter("project")}
        />
        <TabItem
          value={"experience"}
          selected={selectedTab === "experience"}
          setSelected={() => handleFilter("experience")}
        />
      </Tabs>
      {!isJournalLoading && journal && (
        <ul className={journalPageStyles.list}>
          {journal.map((item) => (
            <li className={journalPageStyles.list__item}>
              <JournalItem
                key={item.id}
                item={item}
                isExp={isExperience(item)}
              />
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
