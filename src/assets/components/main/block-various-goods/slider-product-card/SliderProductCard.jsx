import s from './SliderProductCard.module.scss';

import img from './../../../../img/slider1/like.svg';


const data = {
  likeImg: img
}




function SliderProductCard(props) {
  return (
    <div className={s.box}>
      <a className={s.like} href="#">
        <img className={s.likeImg} src={data.likeImg} alt="" />
      </a>
    <div className={s.wrap}>
      <img src={props.img} alt="" />
      <span className={s.title}>{props.title}</span>
      <span className={s.price}>{props.price}</span>
    </div>
    </div>
  );
}

 export default SliderProductCard;