import s from "./ProductCard.module.scss";
import ProductDescription from "./product-description/ProductDescription.jsx";
// import { Breadcrumbs } from "@mui/material";
import BuyProduct from "./buy-product/BuyProduct.jsx";
import BlockVariousGoods from "./../main/block-various-goods/BlockVariousGoods.jsx";
import BreadcrumbsProductCard from "./breadcrumbs/BreadcrumbsProductCard.jsx";

import imgProductCard from "./../../img/product-card/product-card-img.png";

import imgSlider2Card1 from "./../../img/slider2/img1.png";
import imgSlider2Card2 from "./../../img/slider2/img2.png";
import imgSlider2Card3 from "./../../img/slider2/img3.png";
import imgSlider2Card4 from "./../../img/slider2/img4.png";


const productDescriptionData = {
   style: {
      display: "block"
   },
   img: imgProductCard,
   oldPrice: "1 200 475 ₽",
   newPrice: "1 100 475 ₽",
   title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
   itemNumber: "366666-2",
   rating: 4,
   link: '/'   
}

const buyProductData = {}

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

function ProductCard() {
   return (
      <div className={s.productCard}>
         <div className={s.container}>
            <BreadcrumbsProductCard/>
            <ProductDescription descriptionData={productDescriptionData}/>
            <BuyProduct buyProductData={buyProductData} />
            <BlockVariousGoods title="С этим товаром покупают" cardsData={otherProductCardsData} btnStyle={{ display: "none" }}/>
         </div>
      </div>
   );
}

export default ProductCard;