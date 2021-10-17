import style from "./Country.module.scss";
import arrow from "./../../../../img/arrow.svg";
import Subtitle from "../subtitle/Subtitle";

function Country(props) {
  return (
    <div className={style.country}>
      <img className={style.arrow} src={arrow} alt="" />
      <Subtitle subtitle={props.subtitle} />
    </div>
  );
}
export default Country;
