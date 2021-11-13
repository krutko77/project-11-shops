import s from "./SliderProductCard.module.scss";

import img from "./../../../../img/slider1/like.svg";
import imgCart from "./../../../../img/slider1/cart.png";

const data = {
  likeImg: img,
  imgCart: imgCart,
};

function SliderProductCard(props) {
  return (
    <div className={s.box}>
      <span className={s.sale} style={props.styleSale}>
        {props.sale}
      </span>
      <a className={s.like} href="#">
        <img className={s.likeImg} src={data.likeImg} alt="" />
      </a>
      <div className={s.wrap}>
        <img className={s.productImg} src={props.img} alt="" />
        <span className={s.title}>{props.title}</span>
        <span className={s.price}>{props.price}</span>
        <span className={s.nope}>{props.nope}</span>
        <a className={s.inform} href="#">
          {props.inform}
        </a>
      </div>
      <a className={s.cartLink} style={props.styleCart}>
        <img className={s.cartImg} src={props.cartImg} alt="" />
      </a>
    </div>
  );
}

export default SliderProductCard;
