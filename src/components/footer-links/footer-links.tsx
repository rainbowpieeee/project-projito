import { FC } from 'react';
import footerLinksStyles from './footer-links.module.css';

export const FooterLinks: FC = () => {

  return (
    <section className={footerLinksStyles.container}>
      <ul className={footerLinksStyles.links}>
        <li className={footerLinksStyles.item}>
          <button className={footerLinksStyles.link}>О команде</button>
        </li>
        <li className={footerLinksStyles.item}>
          <button className={footerLinksStyles.link}>Благодарности</button>
        </li>
        <li className={footerLinksStyles.item}>
          <button className={footerLinksStyles.link}>Партнёры</button>
        </li>
        <li className={footerLinksStyles.item}>
          <button className={footerLinksStyles.link}>FAQ</button>
        </li>
        <li className={footerLinksStyles.item}>
          <button className={footerLinksStyles.link}>Инструкции</button>
        </li>
      </ul>
    </section>
  )
}

export default FooterLinks;
