import s from './Footer.module.scss';
import { Link } from 'react-router-dom';
import Mailing from './mailing/Mailing';
import Contract from './contract/Contract';
import InfoMenu from './infoMenu/InfoMenu';
import ShopMenu from './shopMenu/ShopMenu';
import Social from './social/Social';
import icon from './../../img/go-top-icon.png'; 


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
         <Link className={s.goTop} to="#top">
            <img className={s.goTopIcon} src={icon} alt="icon"/>
         </Link>
      </footer>
   );
}

export default Footer;

