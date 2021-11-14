import s from "./Catalog.module.scss";

import Filter from "../content/filter/Filter";
import Directory from "../content/directory/Directory";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Sorter from "./sorter/Sorter";
import UsePagination from "./pagination/UsePagination.jsx";

import imgSlider2Card1 from "./../../img/jet-skis/jetski1.png";
import imgSlider2Card2 from "./../../img/jet-skis/jetski2.png";
import imgSlider2Card3 from "./../../img/jet-skis/jetski3.png";
import imgSlider2Card4 from "./../../img/jet-skis/jetski4.png";
import imgSlider2Card5 from "./../../img/jet-skis/jetski5.png";
import imgSlider2Card6 from "./../../img/jet-skis/jetski6.png";
import imgSlider2Card7 from "./../../img/jet-skis/jetski7.png";
import imgSlider2Card8 from "./../../img/jet-skis/jetski8.png";
import imgSlider2Card9 from "./../../img/jet-skis/jetski9.png";
import imgSlider2Card10 from "./../../img/jet-skis/jetski10.png";
import imgSlider2Card11 from "./../../img/jet-skis/jetski11.png";
import imgSlider2Card12 from "./../../img/jet-skis/jetski12.png";

// Данные для компоненты Directory
const ProductsCardData = {
   data1: {
      img: imgSlider2Card1,
      title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
   },
   data2: {
      img: imgSlider2Card2,
      title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
      price: "1 543 000 ₽",
   },
   data3: {
      img: imgSlider2Card3,
      title: "Гидроцикл BRP SeaDoo GTR 230hp X California green",
      price: "732 345 ₽",
   },
   data4: {
      img: imgSlider2Card4,
      title: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",
   },
   data5: {
      img: imgSlider2Card5,
      title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",
      price: "1 543 000 ₽",
   },
   data6: {
      img: imgSlider2Card6,
      title: "Гидроцикл BRP SeaDoo Spark 60hp 2 up",
      price: "732 345 ₽",
   },
   data7: {
      img: imgSlider2Card7,
      title: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",
      price: "857 666 ₽",
   },
   data8: {
      img: imgSlider2Card8,
      title: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal bluel",
      price: "1 229 711 ₽",
   },
   data9: {
      img: imgSlider2Card9,
      title: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
      price: "587 440 ₽",
   },
   data10: {
      img: imgSlider2Card10,
      title: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple r",
      price: "587 440 ₽",
   },
   data11: {
      img: imgSlider2Card11,
      title: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ",
   },
   data12: {
      img: imgSlider2Card12,
      title: "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",
   },
};

const data = {
   heading: "Гидроциклы",
};

function Catalog() {
   return (
      <div>
         <div className={s.container}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
               <Link underline="hover" color="#C4C4C4" href="/">
                  Главная
               </Link>
               <Typography color="#C4C4C4">Гидроциклы</Typography>
            </Breadcrumbs>
            <h1 className={s.heading}>{data.heading}</h1>
            <Sorter />
            <div className={s.wrapper}>
               <Filter />
               <div className={s.inner}>
                  <Directory cardsData={ProductsCardData} />
                  <UsePagination />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Catalog;
