import style from "./Сharacteristic.module.scss";
import arrow from "./../../../../img/arrow.svg";
import Subtitle from "../subtitle/Subtitle";

function Characteristic(props) {
  return (
    <div className={style.characteristic}>
      <img className={style.arrow} src={arrow} alt="" />
      <Subtitle subtitle={props.subtitle} />
    </div>
  );
}
export default Characteristic;
