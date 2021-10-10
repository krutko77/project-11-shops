import style from "./Filter.module.scss";
import Characteristic from "../filter/characteristic/Сharacteristic";
import Options from "../filter/options/Options";

function Filter(props) {
  return (
    <div className={style.filter}>
      <div>
        <h3 className={style.title}>Параметры</h3>
        <Characteristic charTitle="Наличие" />
        <Options charTitle="В наличие" />
      </div>
      <div>
        <h3 className={style.title}>по марке</h3>
      </div>
    </div>
  );
}
export default Filter;
