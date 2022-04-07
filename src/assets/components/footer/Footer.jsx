import s from './Footer.module.scss';
import Mailing from './mailing/Mailing';
import Contract from './contract/Contract';
import InfoMenu from './infoMenu/InfoMenu';
import ShopMenu from './shopMenu/ShopMenu';
import Social from './social/Social';
import ScrollUpButton from './../common/scroll-up-button/ScrollUpButton.jsx';
// import icon from './../../img/go-top-icon.png'; 


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
         <ScrollUpButton />
         {/* <Link className={s.goTop} to="#top">
            <img className={s.goTopIcon} src={icon} alt="icon"/>
         </Link> */}
      </footer>
   );
}

export default Footer;

