import {FC} from "react";
import {TJournalFilter} from "../../services/types/journal";
import {JOURNAL_ITEM_TYPE} from "../../constants";
import tabsItemStyles from "./tabs-item.module.css";

type TTabItemProps = {
  value : TJournalFilter,
  selected : boolean,
  setSelected : (value: TJournalFilter) => void
}

const TabsItem: FC<TTabItemProps> = ({value, selected, setSelected}) => {
  const tabsItemStylesLine = `${tabsItemStyles.line}`
  return (
    <li className={tabsItemStyles.tab}>
      <button
        className={`${tabsItemStyles.button} ${selected && tabsItemStylesLine}`}
        onClick={() => {
          if (!selected) {
            setSelected(value)
          }
        }}
      >
        {
          JOURNAL_ITEM_TYPE[value]
        }
      </button>
    </li>
  )
}

export default TabsItem;
