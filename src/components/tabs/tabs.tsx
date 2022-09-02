import {FC, ReactElement} from "react";
import TabsItem from "../tabs-item/tabs-item";
import tabsStyles from "./tabs.module.css";

type TProps = {
  children: Array<ReactElement>
}

const Tabs: FC<TProps> = ({ children }) => {
  return (
    <>
      <p className={tabsStyles.heading}>Сортировать :</p>
      <ul className={tabsStyles.tabs}>
        {
          children.map(item => (
            <TabsItem
              value={item.props.value}
              selected={item.props.selected}
              setSelected={item.props.setSelected}
            />
          ))
        }
      </ul>
    </>
  )
}

export default Tabs
