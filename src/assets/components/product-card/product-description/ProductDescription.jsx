import { NavLink } from "react-router-dom";
import s from "./ProductDescription.module.scss";




function productDescription(props) {
   return (
      <section className={s.productDescription}>
         <div className={s.productAppearanceCost}>
            <span className={s.saleLabel} style={props.descriptionData.style}>SALE</span>
            <img src={props.descriptionData.img} alt="img" />
            <span className={s.oldPrice}>{props.descriptionData.oldPrice}</span>
            <span className={s.newPrice}>{props.descriptionData.newPrice}</span>
            <NavLink className={s.link} to={'/'}>Нашли дешевле? Снизим цену!</NavLink>
         </div>
         <div className={s.productCharacteristics}></div>
      </section>


   );
}

export default productDescription;