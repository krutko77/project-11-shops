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
         <div className={style.wrap}>
            <details>
               <summary>
                  <Characteristic subtitle="Наличие" />
               </summary>
               <div className={style.firstWrap}>
                  <Options textOptions="В наличие" />
                  <Options textOptions="Под заказ" />
               </div>
            </details>
         </div>
         <div className={style.wrap}>
            <details>
               <summary>
                  <Characteristic subtitle="Новинки" />
               </summary>
               <div className={style.secondWrap}>
                  <Options textOptions="Все" />
                  <Options textOptions="Новинки" />
                  <Options textOptions="Акции" />
               </div>
            </details>
         </div>
         <div className={style.wrap}>
            <details>
               <summary>
                  <Characteristic subtitle="Цена" />
               </summary>
               <div className={style.thirdWrap}>
                  <Track />
               </div>
            </details>
         </div>
         <div className={style.specifications}>
            <Subtitle subtitle="Мощность, л.с." />
            <Select />
         </div>
         <div className={style.specifications}>
            <Subtitle subtitle="Мощность двигателя, л.с." />
            <Select />
         </div>
         <div className={style.specifications}>
            <Subtitle subtitle="Макс. скорость" />
            <Select />
         </div>
         <div className={style.wrap}>
            <details>
               <summary>
                  <Characteristic subtitle="Бренд" />
               </summary>
               <div className={style.sixtWrap}>
                  <Options textOptions="BRP" />
                  <Options textOptions="Spark 2" />
                  <Options textOptions="Spark 3" />
               </div>
               <NavLink className={style.navLink} to={"/"}>
                  Показать еще
               </NavLink>
            </details>
         </div>

         <div className={style.wrap}>
            <details>
               <summary>
                  <Characteristic subtitle="Модель" />
               </summary>
               <input className={style.input} placeholder="Введите модель" />
               <div className={style.seventhWrap}>
                  <Options textOptions="Sea-doo Spark 2" />
                  <Options textOptions="SeaDoo Spark 90 " />
                  <Options textOptions="SeaDoo GTI 155" />
                  <Options textOptions="SeaDoo GTR 230" />
               </div>
               <NavLink className={style.navLink} to={"/"}>
                  Показать еще
               </NavLink>
            </details>
         </div>

         <div className={style.wrap}>
            <details>
               <summary>
                  <Characteristic subtitle="Акции" />
               </summary>
               <div className={style.availability}>
                  <Stack />
               </div>
            </details>
         </div>
         <div className={style.wrap}>
            <details>
               <summary>
                  <Country subtitle="Страны" />
               </summary>
               <div className={style.tenthWrap}>
                  <Options textOptions="Россия" />
                  <Options textOptions="Германия" />
                  <Options textOptions="Китай" />
                  <Options textOptions="CША" />
               </div>
               <NavLink className={style.navLink} to={"/"}>
                  Показать еще
               </NavLink>
            </details>
         </div>

         <div className={style.footerFilter}>
            <ContainedButtons />
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
