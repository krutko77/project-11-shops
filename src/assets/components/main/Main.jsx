import s from "./Main.module.scss";
import SliderBanner from './slider-banner/SliderBanner.jsx';
import PromoSale from './promo-sale/PromoSale.jsx';
import Search from './search/Search.jsx';
import SectionProduct from './section-product/SectionProduct';
import BlockVariousGoods from './block-various-goods/BlockVariousGoods';
import Banner from './banner/Banner';

import imgBanner1 from './../../img/slider-banner/img.jpg';
import imgBanner2 from './../../img/slider-banner/img.jpg';
import imgBanner3 from './../../img/slider-banner/img.jpg';
import imgBanner4 from './../../img/slider-banner/img.jpg';
import imgBanner5 from './../../img/slider-banner/img.jpg';
import imgBanner6 from './../../img/slider-banner/img.jpg';

import imgPromo from './../../img/promo-sale/img.jpg';

import imgCard1 from "./../../img/slider1/img.png";


function Main() {
   const bannerData = {
      img1: imgBanner1,
      img2: imgBanner2,
      img3: imgBanner3,
      img4: imgBanner4,
      img5: imgBanner5,
      img6: imgBanner6
   }

   const promoData = {
      newPrice: "190 000",
      oldPrice: "225 000",
      img: imgPromo,
      productName: "Лодочный мотор Suzuki DF9.9BRS",
      text: "Акция действует до",
      date: "31.08.2020"
   }

   const popularProductCardsData = {
      cardData1: {
         title: "Водонепроницаемый Рюкзак",
         img: imgCard1,
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
            <Search />
            <SectionProduct />
            <BlockVariousGoods title="Популярные товары" cardsData={popularProductCardsData} />
            <Banner />
            <BlockVariousGoods title="С этим товаром покупают" cardsData={otherProductCardsData} />
         </div>
      </div>
   );
}

export default Main;