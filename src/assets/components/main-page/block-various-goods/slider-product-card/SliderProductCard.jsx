import s from "./SliderProductCard.module.scss";
import { NavLink } from "react-router-dom";
import imgCart from "./../../../../img/slider1/cart.png";
import IconCheckboxes from "../../../common/icon-boxes/IconCheckboxes";

function SliderProductCard(props) {
   return (
      <div className={s.box}>
         <span className={s.sale} style={props.styleSale}>
            {props.sale}
         </span>
         <a className={s.like} href="#">
            {/* <img className={s.likeImg} src={data.likeImg} alt="" /> */}
            <IconCheckboxes />
         </a>
         <div className={s.wrap}>
            <img className={s.productImg} src={props.img} alt="" />
            <span className={s.title}>{props.title}</span>
            <span className={s.price}>{props.price}</span>
            <span className={s.nope}>{props.nope}</span>
            <NavLink className={s.inform} to={'/'}>
               {props.inform}
            </NavLink>
         </div>
         <div className={s.cartLink} style={props.styleCart}>
            <img className={s.cartImg} src={imgCart} alt="" />
         </div>
      </div>
   );
}

export default SliderProductCard;
