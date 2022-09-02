import {FC} from "react";
import popupStyles from "./popup.module.css";

interface IPopupProps{
  closePopup: ()=> void
}
export const PopupSample: FC<IPopupProps> = ({ closePopup }) => {


  return (
    <div className={popupStyles.popup}>
      <button type="button" onClick={()=> closePopup()} className={popupStyles.popup__closeButton} />
    <article className={popupStyles.popup__article}>
      <h2 className={popupStyles.popup__title}>Это верно</h2>
      <p className={popupStyles.popup__subtitle}>Информация достоверна</p>
    </article>
  </div>
  );
};

export default PopupSample;
