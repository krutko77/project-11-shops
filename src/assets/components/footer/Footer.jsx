import s from './Footer.module.scss';

import Mailing from './mailing/Mailing';
import Contract from './contract/Contract';
import InfoMenu from './infoMenu/InfoMenu';
import ShopMenu from './shopMenu/ShopMenu';
import Social from './social/Social';

function Footer() {
   return (
      <footer className={s.footer}>
         <div className={s.container}>
         <div className={s.inner}>
            <Mailing />
            <InfoMenu />
            <ShopMenu />
            <Social />
         </div>
         <Contract />
         </div>
      </footer>
   );
}

export default Footer;