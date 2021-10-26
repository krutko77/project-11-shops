import s from "./SectionProductsCard.module.scss";
import {NavLink} from "react-router-dom";




function SectionProductsCard(props) {
   return (
      <article className={s.productCard}>
         <div className={s.wrap}>
            <h1 className={s.heading}>{props.cardsProductData.title}</h1>
            <NavLink to={props.cardsProductData.link} className={s.details}>Подробнее</NavLink>
         </div>
         <div className={s.imgWrap}>
         <img className={s.img} src={props.cardsProductData.img} alt="img" />
         </div>
      </article>
   );
 }
 
 export default SectionProductsCard;