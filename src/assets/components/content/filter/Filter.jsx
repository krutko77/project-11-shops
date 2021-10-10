import style from "./Filter.module.scss";
import Characteristic from "../filter/characteristic/Сharacteristic";
import Options from "../filter/options/Options";
import Track from "./track/Track";
import Subtitle from "./subtitle/Subtitle";

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
      </div>
      <div></div>
    </div>
  );
}
export default Filter;
