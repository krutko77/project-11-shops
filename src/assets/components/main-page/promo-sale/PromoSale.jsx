import s from "./PromoSale.module.scss";
import { NavLink } from "react-router-dom";
import iconBig from './../../../img/promo-sale/icons-rub-1.svg';
import iconSmall from './../../../img/promo-sale/icons-rub-2.svg';

function PromoSale(props) {

   return (
      <div className={s.promoSale}>
         <span className={s.PromoSaleLabel}>АКЦИЯ</span>
         <div className={s.newPriceBlock}>
            <span className={s.newPrice}>{props.promoData.newPrice}</span>
            <img className={s.iconBig} src={iconBig} alt="img" />
         </div>
         <div className={s.oldPriceBlock}>
            <span className={s.oldPrice}>{props.promoData.oldPrice}</span>
            <img className={s.iconSmall} src={iconSmall} alt="" />
         </div>
         <NavLink to={props.promoData.link}>
            <div className={s.imgProductWrap}>
               <img className={s.imgProduct} src={props.promoData.img} alt="img" />
            </div>
         </NavLink>
         <div className={s.productNameBlock}>
            <span className={s.productName}>{props.promoData.productName}</span>
         </div>
         <div className={s.validity}>
            <span className={s.text}>{props.promoData.text}</span>
            <span className={s.date}>{props.promoData.date}</span>
         </div>
      </div>
   );
}

export default PromoSale;