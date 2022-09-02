import {FC} from "react";
import contentsSampleStyles from "./contents-sample.module.css";
import {IContentsSampleProps} from "../../../services/types/sample";

export const ContentsSample: FC<IContentsSampleProps> = ({ closeContents }) => {
  return (
    <div className={contentsSampleStyles.table}>
      <div className={contentsSampleStyles.table__container}>
        <button type="button" onClick={()=> closeContents()}
          className={contentsSampleStyles.table__close}>
        </button>
        <h2 className={contentsSampleStyles.table__title}>Часть один</h2>
        <h2 className={contentsSampleStyles.table__title}>Часть два</h2>
        <h2 className={contentsSampleStyles.table__title}>Часть три</h2>
      </div>
    </div>
  )
}

export default ContentsSample
