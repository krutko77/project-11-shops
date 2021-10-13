import style from "./Filter.module.scss";
import Characteristic from "../filter/characteristic/Сharacteristic";
import Options from "../filter/options/Options";
import Track from "./track/Track";
import Subtitle from "./subtitle/Subtitle";
import Select from "./select/Select";
import { NavLink } from "react-router-dom";
import Stack from "./button/Button";

function Filter(props) {
  return (
    <div className={style.filter}>
      <h3 className={style.title}>Параметры</h3>
      <div className={style.firstWrap}>
        <Characteristic subtitle="Наличие" />
        <div className={style.availability}>
          <Options textOptions="В наличие" />
          <Options textOptions="Под заказ" />
        </div>
      </div>
      <div className={style.secondWrap}>
        <Characteristic subtitle="Новинки" />
        <div className={style.availability}>
          <Options textOptions="Все" />
          <Options textOptions="Новинки" />
          <Options textOptions="Акции" />
        </div>
      </div>
      <div className={style.thirdWrap}>
        <Characteristic subtitle="Цена" />
        <div className={style.availability}>
          <Track />
        </div>
      </div>
      <div className={style.fourthWrap}>
        <Subtitle subtitle="Мощность, л.с." />
        <Select />
      </div>
      <div className={style.fourthWrap}>
        <Subtitle subtitle="Мощность двигателя, л.с." />
        <Select />
      </div>
      <div className={style.fourthWrap}>
        <Subtitle subtitle="Макс. скорость" />
        <Select />
      </div>
      <div className={style.secondWrap}>
        <Characteristic subtitle="Бренд" />
        <div className={style.availability}>
          <Options textOptions="BRP" />
          <Options textOptions="Spark 2" />
          <Options textOptions="Spark 3" />
        </div>
      </div>
      <NavLink className={style.navLink} to={"/"}>
        Показать еще
      </NavLink>
      <div className={style.secondWrap}>
        <Characteristic subtitle="Модель" />

        <input className={style.input} placeholder="Введите модель" />
        <div className={style.availability}>
          <Options textOptions="Sea-doo Spark 2" />
          <Options textOptions="SeaDoo Spark 90 " />
          <Options textOptions="SeaDoo GTI 155" />
          <Options textOptions="SeaDoo GTR 230" />
        </div>
        <NavLink className={style.navLink} to={"/"}>
          Показать еще
        </NavLink>
        <div className={style.firstWrap}>
          <Characteristic subtitle="Акции" />
          <div className={style.availability}>
            <Stack />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
export default Filter;
