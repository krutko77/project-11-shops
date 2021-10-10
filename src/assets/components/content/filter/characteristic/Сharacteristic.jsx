import style from "./Сharacteristic.module.scss";
import arrow from "./../../../../img/arrow.svg";

function Characteristic(props) {
  return (
    <div className={style.characteristic}>
      <img className={style.arrow} src={arrow} alt="" />
      <h4 className={style.subtitle}>{props.charTitle}</h4>
    </div>
  );
}
export default Characteristic;
