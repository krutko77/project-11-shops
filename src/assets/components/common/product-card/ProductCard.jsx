import s from "./ProductCard.module.scss";

import imgCart from "./../../../img/slider1/cart.png";
import IconCheckboxes from "./../../common/Icon-boxes/IconCheckboxes";

function ProductCard(props) {
  return (
    <div className={s.box}>
      <span className={s.sale} style={props.styleSale}>
        {props.sale}
      </span>
      <a className={s.like} href="#">
        <IconCheckboxes />
      </a>
      <div className={s.wrap}>
        <img className={s.productImg} src={props.cardData.img} alt="" />
        <span className={s.title}>{props.cardData.title}</span>
        <span className={s.price}>{props.cardData.price}</span>
        <span className={s.nope}>{props.cardData.nope}</span>
        <a className={s.inform} href="#">
          {props.inform}
        </a>
      </div>
      <a className={s.cartLink} style={props.styleCart}>
        <img className={s.cartImg} src={imgCart} alt="" />
      </a>
    </div>
  );
}

export default ProductCard;
