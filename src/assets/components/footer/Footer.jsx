import s from './Footer.module.scss';

import Mailing from './mailing/Mailing';
import Contract from './contract/Contract';
import InfoMenu from './infoMenu/InfoMenu';
import ShopMenu from './shopMenu/ShopMenu';
import Social from './social/Social';

function Footer() {
   return (
      <footer className={s.footer}>
         <div className={s.inner}>
            <Mailing />
            <InfoMenu />
            <ShopMenu />
            <Social />
         </div>
         <Contract />
      </footer>
   );
}

export default Footer;