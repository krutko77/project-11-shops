import s from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";
import imgCart from "./../../../img/slider1/cart.png";
import IconCheckboxes from "./../icon-boxes/IconCheckboxes.jsx";

function ProductCard(props) {
   return (
      <div className={s.box}>
         <span className={s.sale} style={props.cardData.styleSale}>
            {props.cardData.sale}
         </span>
         <div className={s.like}>
            <IconCheckboxes />
         </div>
         <div className={s.contentWrap}>
            <NavLink to={props.cardData.link}>
               <div className={s.imgWrap}>
                  <img className={s.productImg} src={props.cardData.img} alt="img" />
               </div>
            </NavLink>
            <span className={s.title}>{props.cardData.title}</span>
            <span className={s.price}>{props.cardData.price}</span>
            <span className={s.nope}>{props.cardData.nope}</span>
            <NavLink className={s.inform} to={props.cardData.informLink}>
               {props.cardData.inform}
            </NavLink>
         </div>
         <div className={s.cartLink} style={props.cardData.styleCart}>
            <img className={s.cartImg} src={imgCart} alt="" />
         </div>
      </div>
   );
}

export default ProductCard;
