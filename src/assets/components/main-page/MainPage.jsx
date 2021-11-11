import s from "./MainPage.module.scss";
import SliderBanner from './slider-banner/SliderBanner.jsx';
import PromoSale from './promo-sale/PromoSale.jsx';
import Search from './search/Search.jsx';
import SectionProducts from './section-products/SectionProducts.jsx';
import BlockVariousGoods from './block-various-goods/BlockVariousGoods.jsx';
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

// картинки для верхнего слайдера
const sliderBannerData = {
   img1: imgSliderBanner1,
   img2: imgSliderBanner2,
   img3: imgSliderBanner3,
   img4: imgSliderBanner4,
   img5: imgSliderBanner5,
   img6: imgSliderBanner6
}

// данные для акционной карточки
const promoData = {
   newPrice: "190 000",
   oldPrice: "225 000",
   img: imgPromo,
   productName: "Лодочный мотор Suzuki DF9.9BRS",
   text: "Акция действует до",
   date: "31.08.2020"
}

// данные для поиска
const searchData = {
   label1: "Поиск по номеру",
   label2: "Поиск по марке",
   label3: "Поиск по названию товара"
}

// данные для секции товаров
const sectionProductsCardsData = {
   cardData1: {
      title: "Квадроциклы",
      img: imgProduct1,
      link: '/1'
   },
   cardData2: {
      title: "Гидроциклы",
      img: imgProduct2,
      link: '/product-card/jet-skis'
   },
   cardData3: {
      title: "Катера",
      img: imgProduct3,
      link: '/3'
   },
   cardData4: {
      title: "Снегоходы",
      img: imgProduct4,
      link: '/4'
   },
   cardData5: {
      title: "Вездеходы",
      img: imgProduct5,
      link: '/5'
   },
   cardData6: {
      title: "Двигатели",
      img: imgProduct6,
      link: '/6'
   }
}

// данные для навигации секции popularProduct
const navPopularProductData = {
   data1: {
      myStyle: {
         fontWeight: 600,
         borderBottomWidth: 2,
         borderBottomStyle: "solid",
         borderBottomColor: "#1C62CD",
         width: "max-content"
      },
      title: "запчасти",
      path: "/"
   },
   data2: {
      title: "моторы",
      path: "/"
   },
   data3: {
      title: "шины",
      path: "/"
   },
   data4: {      
      title: "электроника",
      path: "/"
   },
   data5: {
      title: "инструменты",
      path: "/"
   },
   data6: {
      title: "аксессуары",
      path: "/"
   },
   data7: {
      myStyle: {
         display: "none"
      },
      title: "",
      path: "/"
   },
   data8: {
      myStyle: {
         display: "none"
      },
      title: "",
      path: "/"
   },
}

// данные для навигации секции otherProduct
const navOtherProductData = {
   data1: {
      title: "запчасти",
      path: "/"
   },
   data2: {
      title: "моторы",
      path: "/"
   },
   data3: {
      title: "шины",
      path: "/"
   },
   data4: {
      myStyle: {
         fontWeight: 600,
         borderBottomWidth: 2,
         borderBottomStyle: "solid",
         borderBottomColor: "#1C62CD",
         width: "max-content"
      },
      title: "электроника",
      path: "/"
   },
   data5: {
      title: "инструменты",
      path: "/"
   },
   data6: {
      title: "аксессуары",
      path: "/"
   },
   data7: {
      myStyle: {
         display: "none"
      },
      title: "",
      path: "/"
   },
   data8: {
      myStyle: {
         display: "none"
      },
      title: "",
      path: "/"
   },
}

// данные для среднего слайдера
const popularProductCardsData = {
   cardData1: {
      title: "Водонепроницаемый Рюкзак",
      img: imgSlider1Card1,
      price: "9 800 ₽"
   },
   cardData2: {
      title: "Спасательный жилет BRP Men's Airflow PFD",
      img: imgSlider1Card2,
      price: "6 900 ₽",
      sale: "SALE"
   },
   cardData3: {
      title: "BRP Audio-Premium System",
      img: imgSlider1Card3,
      price: "68 000 ₽"
   },
   cardData4: {
      title: "Спасательное снаряжение",
      img: imgSlider1Card4,
      sale: "SALE",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении"
   },
   cardData5: {
      title: "Спасательное снаряжение",
      img: imgSlider1Card1,
      sale: "SALE",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении"
   },
   cardData6: {
      title: "Водонепроницаемый Рюкзак",
      img: imgSlider1Card1,
      price: "9 800 ₽"
   },
   cardData7: {
      title: "Спасательное снаряжение",
      img: imgSlider1Card4,
      sale: "SALE",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении"
   },
   cardData8: {
      title: "Спасательное снаряжение",
      img: imgSlider1Card4,
      sale: "SALE",
      price: "7 000 ₽"
   },
}

// данные для баннера
const bannerData = {
   bannerType: "Скидки",
   text: " на все запчасти до 70%",
   link: '/'
}

// данные для нижнего слайдера
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

function MainPage() {
   return (
      <div className={s.mainPage}>
         <div className={s.container}>
            <div className={s.topBlock}>
               <SliderBanner bannerData={sliderBannerData} />
               <PromoSale promoData={promoData} />
            </div>
            <Search searchData={searchData} />
            <SectionProducts cardsProductData={sectionProductsCardsData} />
            <BlockVariousGoods title="Популярные товары" navData={navPopularProductData} cardsData={popularProductCardsData} />
            <Banner bannerData={bannerData} />
            <BlockVariousGoods title="С этим товаром покупают" navData={navOtherProductData} cardsData={otherProductCardsData} btnStyle={{ display: "none" }} />
         </div>
      </div>
   );
}

export default MainPage;