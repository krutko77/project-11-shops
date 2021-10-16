import s from "./SliderProductCard.scss";






function SliderProductCard(props) {
  return (
    <div className={s.wrap}>
      <img src={props.img} alt="" />
      <span>{props.title}</span>
    </div>
  );
}

 export default SliderProductCard;