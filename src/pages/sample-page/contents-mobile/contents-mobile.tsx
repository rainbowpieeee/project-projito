import {FC, useState} from "react";
import { useNavigate } from 'react-router-dom';
import contentsMobileStyles from "./contents-mobile.module.css";
import imageBurger from "../../../images/menu-mobil-open.svg";
import imgArrowLeft from "../../../images/Arrow_left.svg";
import ContentsSample from "../contents-sample/contents-sample";


export const ContentsMobile: FC = () => {
  const [contentsBurgerOpen, setContentsBurgerOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const openMobileContents = (): void => {
    setContentsBurgerOpen(true)
  }

  const returnBack = () => {
    navigate("/")
  }

  return (
    <div className={contentsMobileStyles.contents}>
      <div className={contentsMobileStyles.container}>
        <button
          type="button"
          className={contentsMobileStyles.arrow__button}
          onClick={()=> returnBack()}
        >
          <img src={imgArrowLeft} alt='стрелка назад' />
        </button>
        <h2 className={contentsMobileStyles.heading}>оглавление</h2>
        <button
          type="button"
          className={contentsMobileStyles.menu__button}
          onClick={()=> openMobileContents()}
        >
          <img src={imageBurger} alt='кнопка меню' />
        </button>
        {
          contentsBurgerOpen && (
            <ContentsSample
              openContents={() => setContentsBurgerOpen(true)}
              closeContents={() => setContentsBurgerOpen(false)}
            />
          )
        }
      </div>
    </div>
  )
}

export default ContentsMobile

