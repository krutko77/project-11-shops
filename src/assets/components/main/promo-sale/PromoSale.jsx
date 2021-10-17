import s from "./PromoSale.module.scss";
import imgPromoSale from './../../../img/promo-sale-img.jpg';
import iconBig from './../../../img/icons-rub-1.svg';
import iconSmall from './../../../img/icons-rub-2.svg';

function PromoSale() {
   const data = {
      img: imgPromoSale,
      newPrice: "190 000",
      oldPrice: "225 000",
      productName: "Лодочный мотор Suzuki DF9.9BRS",
      text: "Акция действует до",
      date: "31.08.2020"
   }

   return (
      <div className={s.promoSale}>
         <div className={s.priceBlock}>
            <button>АКЦИЯ</button>
            <div className={s.newPriceBlock}>
               <span className={s.newPrice}>{data.newPrice}</span>
               <img className={s.iconBig} src={iconBig} alt="" />
            </div>
         </div>
         <div className={s.oldPriceBlock}>
         <span className={s.oldPrice}>{data.oldPrice}</span>
         <img className={s.iconSmall} src={iconSmall} alt="" />
         </div>
         <img className={s.imgProduct} src={data.img} alt="img" />
         <div className={s.label}>
            <span className={s.productName}>{data.productName}</span>
         </div>
         <div className={s.validity}>
            <span className={s.text}>{data.text}</span>
            <span className={s.date}>{data.date}</span>
         </div>
      </div>
   );
}

export default PromoSale;