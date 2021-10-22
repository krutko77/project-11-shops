import s from "./Main.module.scss";
import SliderBanner from './slider-banner/SliderBanner.jsx';
import PromoSale from './promo-sale/PromoSale.jsx';
import Search from './search/Search.jsx';
import SectionProduct from './section-product/SectionProduct';
import BlockVariousGoods from './block-various-goods/BlockVariousGoods';
import Banner from './banner/Banner';

import imgSliderBanner1 from './../../img/slider-banner/img.jpg';
import imgSliderBanner2 from './../../img/slider-banner/img.jpg';
import imgSliderBanner3 from './../../img/slider-banner/img.jpg';
import imgSliderBanner4 from './../../img/slider-banner/img.jpg';
import imgSliderBanner5 from './../../img/slider-banner/img.jpg';
import imgSliderBanner6 from './../../img/slider-banner/img.jpg';

import imgPromo from './../../img/promo-sale/img.jpg';

import imgSliderCard1 from "./../../img/slider1/img.png";


function Main() {
   const bannerData = {
      img1: imgSliderBanner1,
      img2: imgSliderBanner2,
      img3: imgSliderBanner3,
      img4: imgSliderBanner4,
      img5: imgSliderBanner5,
      img6: imgSliderBanner6
   }

   const promoData = {
      newPrice: "190 000",
      oldPrice: "225 000",
      img: imgPromo,
      productName: "Лодочный мотор Suzuki DF9.9BRS",
      text: "Акция действует до",
      date: "31.08.2020"
   }

   const searchData = {
      label1: "Поиск по номеру",
      label2: "Поиск по марке",
      label3: "Поиск по названию товара"      
   }

   const popularProductCardsData = {
      cardData1: {
         title: "Водонепроницаемый Рюкзак",
         img: imgSliderCard1,
         price: "9 800 ₽"        
      },
      cardData2: {},
      cardData3: {},
      cardData4: {},      
   }

   const otherProductCardsData = {
      cardData1: {},
      cardData2: {},
      cardData3: {},
      cardData4: {}, 
   }

   return (
      <div className={s.main}>
         <div className={s.container}>
            <div className={s.topBlock}>
               <SliderBanner bannerData={bannerData} />
               <PromoSale promoData={promoData} />
            </div>
            <Search searchData={searchData} />
            <SectionProduct />
            <BlockVariousGoods title="Популярные товары" cardsData={popularProductCardsData} />
            <Banner />
            <BlockVariousGoods title="С этим товаром покупают" cardsData={otherProductCardsData} />
         </div>
      </div>
   );
}

export default Main;