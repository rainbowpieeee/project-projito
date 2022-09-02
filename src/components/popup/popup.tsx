import {FC} from "react";
import {IPopup} from "../../services/types/popup";
import {Link, useNavigate} from "react-router-dom";
import popupStyles from "./popup.module.css";

interface IPopupProps{
  data: IPopup,
  closePopup: ()=> void
}
export const Popup: FC<IPopupProps> = ({data, closePopup}) => {
  const navigate = useNavigate();

  return (
    <div className={popupStyles.popup}>
      <button type="button" onClick={()=> closePopup()} className={popupStyles.popup__closeButton} />
    <Link to='/sample/blockade' className={popupStyles.popup__link}>
    <article
      onClick={() => navigate(`/sample/blockade`)}
    >
      <h2 className={popupStyles.popup__title}>{data.title}</h2>
      <p className={popupStyles.popup__subtitle}>{data.caption}</p>
    </article>

    </Link>
  </div>
  );
};

export default Popup;
