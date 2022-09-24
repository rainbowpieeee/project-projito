import { FC } from "react";
import tabsItemStyles from "./tabs-item.module.css";

type TTabItemProps = {
  value: string;
  selected: boolean;
  setSelected: (value: string) => void;
  name: string;
};

const TabsItem: FC<TTabItemProps> = ({
  value,
  selected,
  setSelected,
  name,
}) => {
  const tabsItemStylesLine = `${tabsItemStyles.line}`;

  return (
    <li className={tabsItemStyles.tab}>
      <button
        className={`${tabsItemStyles.button} ${selected && tabsItemStylesLine}`}
        onClick={() => {
          if (!selected) {
            setSelected(value);
          }
        }}
      >
        {name}
      </button>
    </li>
  );
};

export default TabsItem;
