import s from "./ProductCard.module.scss";
import BlockVariousGoods from './block-various-goods/BlockVariousGoods';
import Breadcrumbs from "./../product-card/Breadcrumbs.jsx";

import imgProductCard from "./../../img/product-card/product-card-img.png";

import imgSlider2Card1 from "./../../img/slider2/img1.png";
import imgSlider2Card2 from "./../../img/slider2/img2.png";
import imgSlider2Card3 from "./../../img/slider2/img3.png";
import imgSlider2Card4 from "./../../img/slider2/img4.png";

const otherProductCardsData = {
   cardData1: {
      title: "Спасательное снаряжение",
      img: imgSlider2Card1,
      price: "45 800 ₽",
   },
   cardData2: {
      title: "Garmin Echomap Plus 62cv",
      img: imgSlider2Card2,
      price: "45 800 ₽",
      sale: "SALE",
   },
   cardData3: {
      title: "Garmin Echomap Plus 62cv",
      img: imgSlider2Card3,
      price: "45 800 ₽",
   },

   cardData4: {
      title: "Спасательное снаряжение",
      img: imgSlider2Card4,
      sale: "SALE",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении"
   },
   cardData5: {
      title: "Спасательное снаряжение",
      img: imgSlider2Card1,
      sale: "SALE",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении"
   },
   cardData6: {
      title: "Garmin Echomap Plus 62cv",
      img: imgSlider2Card2,
      price: "45 800 ₽"
   },
   cardData7: {
      title: "Спасательное снаряжение",
      img: imgSlider2Card3,
      sale: "SALE",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении"
   },
   cardData8: {
      title: "Спасательное снаряжение",
      img: imgSlider2Card4,
      sale: "SALE",
      price: "7 000 ₽"
   },
}

function productDescription() {
   return (
      <div className={s.productDescription}>
         
      </div>

   );
}

export default productDescription;