import { FC } from 'react';
import FooterInfo from '../footer-info/footer-info';
import { FooterLinks } from '../footer-links/footer-links';
import footerStyles from './footer.module.css';

export const Footer: FC = () => {

  return (
      <footer className={footerStyles.footer}>
        <FooterLinks />

        <FooterInfo />
      </footer>
  )
}

export default Footer;
