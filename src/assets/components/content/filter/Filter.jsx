import style from "./Filter.module.scss";
import Characteristic from "../filter/characteristic/Сharacteristic";
import Options from "../filter/options/Options";
import Track from "./track/Track";
import Subtitle from "./subtitle/Subtitle";
import Select from "./select/Select";
import { NavLink } from "react-router-dom";
import Stack from "./button/Button";
import Country from "./country/Country";
import ContainedButtons from "./buttonFilter/ButtonFilter";
import arrow from "./../../../img/arrow.svg";

function Filter(props) {
  // const data = { ссылка1 };
  // const data2 = { ссылка2 };
  // const data3 = { ссылка3 };
  // const data4 = { ссылка4 };
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
      <div className={style.fifthWrap}>
        <Subtitle subtitle="Мощность, л.с." />
        <Select />
      </div>
      <div className={style.fifthWrap}>
        <Subtitle subtitle="Мощность двигателя, л.с." />
        <Select />
      </div>
      <div className={style.fifthWrap}>
        <Subtitle subtitle="Макс. скорость" />
        <Select />
      </div>
      <div className={style.sixtWrap}>
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
      <div className={style.seventhWrap}>
        <Characteristic subtitle="Модель" />

        <input className={style.input} placeholder="Введите модель" />
        <div className={style.availability}>
          <Options textOptions="Sea-doo Spark 2" />
          <Options textOptions="SeaDoo Spark 90 " />
          <Options textOptions="SeaDoo GTI 155" />
          <Options textOptions="SeaDoo GTR 230" />
        </div>
      </div>
      <NavLink className={style.navLink} to={"/"}>
        Показать еще
      </NavLink>
      <div className={style.eighthWrap}>
        <Characteristic subtitle="Акции" />
        <div className={style.availability}>
          <Stack />
        </div>
      </div>
      <div className={style.tenthWrap}>
        <Country subtitle="Страны" />
        <div className={style.countryOptions}>
          <Options textOptions="Россия" />
          <Options textOptions="Германия" />
          <Options textOptions="Китай" />
          <Options textOptions="CША" />
        </div>
      </div>
      <NavLink className={style.navLink} to={"/"}>
        Показать еще
      </NavLink>
      <div className={style.footerFilter}>
        <ContainedButtons />
        <div>
          <p>Дополнительные параметры</p>
          <img className={style.arrow} src={arrow} alt="" />
        </div>
      </div>
      <input
        className={style.reset}
        type="reset"
        value="Сбросить фильтр"
      ></input>

      <div></div>
    </div>
  );
}
export default Filter;
