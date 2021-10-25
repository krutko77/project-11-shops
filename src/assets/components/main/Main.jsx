import s from "./Main.module.scss";
import SliderBanner from './slider-banner/SliderBanner.jsx';
import PromoSale from './promo-sale/PromoSale.jsx';
import Search from './search/Search.jsx';
import SectionProducts from './section-products/SectionProducts.jsx';
import BlockVariousGoods from './block-various-goods/BlockVariousGoods';
import Banner from './banner/Banner';

import imgSliderBanner1 from './../../img/slider-banner/img.jpg';
import imgSliderBanner2 from './../../img/slider-banner/img.jpg';
import imgSliderBanner3 from './../../img/slider-banner/img.jpg';
import imgSliderBanner4 from './../../img/slider-banner/img.jpg';
import imgSliderBanner5 from './../../img/slider-banner/img.jpg';
import imgSliderBanner6 from './../../img/slider-banner/img.jpg';

import imgPromo from './../../img/promo-sale/img.jpg';

import imgProduct1 from "./../../img/section_products/img1.png";
import imgProduct2 from "./../../img/section_products/img2.png";
import imgProduct3 from "./../../img/section_products/img3.png";
import imgProduct4 from "./../../img/section_products/img4.png";
import imgProduct5 from "./../../img/section_products/img5.png";
import imgProduct6 from "./../../img/section_products/img6.png";

import imgSlider1Card1 from "./../../img/slider1/img.png";
import imgSlider1Card2 from "./../../img/slider1/img2.png";
import imgSlider1Card3 from "./../../img/slider1/img3.png";
import imgSlider1Card4 from "./../../img/slider1/img4.png";

import imgSlider2Card1 from "./../../img/slider2/img1.png";
import imgSlider2Card2 from "./../../img/slider2/img2.png";
import imgSlider2Card3 from "./../../img/slider2/img3.png";
import imgSlider2Card4 from "./../../img/slider2/img4.png";

function Main() {
   const sliderBannerData = {
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

   const sectionProductsCardsData = {
      cardData1: {
         title: "Квадроциклы",
         img: imgProduct1,
         link: '/'
      },
      cardData2: {
         title: "Гидроциклы",
         img: imgProduct2,
         link: '/'
      },
      cardData3: {
         title: "Катера",
         img: imgProduct3,
         link: '/'
      },
      cardData4: {
         title: "Снегоходы",
         img: imgProduct4,
         link: '/'
      },
      cardData5: {
         title: "Вездеходы",
         img: imgProduct5,
         link: '/'
      },
      cardData6: {
         title: "Двигатели",
         img: imgProduct6,
         link: '/'
      }
   }

   const popularProductCardsData = {
      cardData1: {
         title: "Водонепроницаемый Рюкзак",
         img: imgSlider1Card1,
         price: "9 800 ₽"
      },
      cardData2: {},
      cardData3: {},
      cardData4: {},     
   }

   const bannerData = {
      bannerType: "Скидки",
      text: " на все запчасти до 70%",
      link: '/'
   }

   const otherProductCardsData = {
      cardData1: {
         title: "BRP Audio-портативная система",
         img: imgSlider2Card1,
         price: ""
      },
      cardData2: {},
      cardData3: {},
      cardData4: {},
   }

   return (
      <div className={s.main}>
         <div className={s.container}>
            <div className={s.topBlock}>
               <SliderBanner bannerData={sliderBannerData} />
               <PromoSale promoData={promoData} />
            </div>
            <Search searchData={searchData} />
            <SectionProducts cardsProductData={sectionProductsCardsData} />
            <BlockVariousGoods title="Популярные товары" cardsData={popularProductCardsData} />
            <Banner bannerData={bannerData} />
            <BlockVariousGoods title="С этим товаром покупают" cardsData={otherProductCardsData} style={{ display: "none" }} />
         </div>
      </div>
   );
}

export default Main;