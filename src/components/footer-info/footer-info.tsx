import { FC } from 'react';
import footerInfoStyles from './footer-info.module.css';
import logo_eu_ru from '../../images/logo_eu_ru.svg';
import logo_eu_ru_mobile from '../../images/eu_logo_ru_mobile.svg';
import logo from "../../images/logo_Prozhito.svg";
import logo_mobile from "../../images/logo_prozhito_mobile.svg"
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import useMediaQuery from "../../hooks/useMediaQuery";
import {Link} from "react-router-dom";


export const FooterInfo: FC = () => {
  const desktop = useMediaQuery('(min-width: 768px)');

  return(
    <section className={footerInfoStyles.info}>
      <div className={footerInfoStyles.logo}>
        <Link to="/" className={footerInfoStyles.link}>
          <img
          src={desktop? logo : logo_mobile}
          alt={desktop.toString()}
        />
        </Link>
        <a href="https://eusp.org/" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
        <img
          src={desktop? logo_eu_ru : logo_eu_ru_mobile}
          alt="Европейский университет в Санкт-Петербурге"
        />
        </a>
      </div>
      <section className={footerInfoStyles.social}>
        <ul className={footerInfoStyles.links}>
          <li className={footerInfoStyles.item}>
            <a href="https://t.me/prozhito" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
              <img
                src={telegram}
                className={footerInfoStyles.icon}
                alt="telegram"
              /><span className={footerInfoStyles.text}>Телеграм</span></a
            >
          </li>
          <li className={footerInfoStyles.item}>
            <a href="https://vk.com/prozhito" target="_blank" rel="noopener noreferrer" className={footerInfoStyles.link}>
              <img
                src={vk}
                className={footerInfoStyles.icon}
                alt="vk"
              /><span className={footerInfoStyles.text}>Вконтакте</span></a
            >
          </li>
        </ul>
      </section>

      <section className={footerInfoStyles.legal}>
        <ul className={footerInfoStyles.legals}>
          <li className={footerInfoStyles.item}>
            <button className={footerInfoStyles.link}>Юридическая информация</button>
          </li>
          <li className={footerInfoStyles.item}>
            <button className={footerInfoStyles.link}>Политика конфиденциальности</button>
          </li>
        </ul>
      </section>
    </section>

  )
}

export default FooterInfo;
