import s from "./ProductPage.module.scss";
import ProductDescription from "./product-description/ProductDescription.jsx";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import BuyProduct from "./buy-product/BuyProduct.jsx";
import BlockVariousGoods from "../main-page/block-various-goods/BlockVariousGoods.jsx";

import imgProductCard from "./../../img/product-card/product-card-img.png";

import imgSlider2Card1 from "./../../img/slider2/img1.png";
import imgSlider2Card2 from "./../../img/slider2/img2.png";
import imgSlider2Card3 from "./../../img/slider2/img3.png";
import imgSlider2Card4 from "./../../img/slider2/img4.png";


// стилизация "хлебных крошек"
const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => {
   return {
      fontFamily: "SFProDisplayRegular",
      fontSize: 15,
      color: "#C4C4C4",
      "& .MuiBreadcrumbs-separator": {
         marginLeft: 0,
         marginRight: 0
      }
   };
})

const MyTypography = styled(Typography)(({ theme }) => {
   return {
      fontFamily: "SFProDisplayRegular",
      fontSize: 15,
   };
})

// данные для секции productDescription
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

// данные для маленькой таблицы в секции productDescription
function createData(name, value) {
   return { name, value };
}

const rowsData = [
   createData('Производитель', 'Канада'),
   createData('Количество мест, шт:', 3),
   createData('Мощность, л.с.', 155),
   createData('Тип двигателя', 'Бензиновый'),
   createData('Год выпуска', 2018),
];

// данные для навигации секции buyProduct
const navBuyProductData = {
   data1: {
      title: "О товаре",
      path: "/"
   },
   data2: {
      title: "Характеристики",
      path: "/"
   },
   data3: {
      title: "Отзывы",
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
      title: "Самовывоз",
      path: "/"
   },
   data5: {
      title: "Доставка",
      path: "/"
   },
   data6: {
      title: "Сервис",
      path: "/"
   },
   data7: {
      title: "Гарантия",
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

// данные для большой таблицы в секции buyProduct
const tableBuyProductData = {
   dataRow1: {
      operatingMode: {
         mode1: "08:00-19:00",
         mode2: "09:00-17:00",
      },
      address: "Москва, ул.Науки 25",
      availability: "В наличии",
      quantity: "1"
   },
   dataRow2: {
      operatingMode: {
         mode1: "08:00-19:00",
         mode2: "09:00-17:00",
      },
      address: "Москва, ул.Южная 134",
      availability: "В наличии",
      quantity: "2"
   },
   dataRow3: {
      operatingMode: {
         mode1: "08:00-19:00",
         mode2: "09:00-17:00",
      },
      address: "Санкт-Петербург, ул.Красная 19",     
      availability: "Нет в наличии",
      quantity: "0"
   },
   dataRow4: {
      operatingMode: {
         mode1: "08:00-19:00",
         mode2: "09:00-17:00",
      },
      address: "Киев, ул.Шевченко 167",      
      availability: "Нет в наличии",
      quantity: "0"
   },
}

// данные для навигации секции BlockVariousGoods
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


// данные для слайдера
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


function ProductPage() {
   return (
      <div className={s.productPage}>
         <div className={s.container}>
            <nav className={s.NavBreadcrumbs}>
               <StyledBreadcrumbs
                  separator={<NavigateNextIcon fontSize="medium" />} aria-label="breadcrumb">
                  <Link underline="hover" key="1" color="inherit" href="/">Главная</Link>,
                  <Link underline="hover" key="2" color="inherit" href="/">Гидроциклы</Link>,
                  <MyTypography key="3" color="inherit" >
                     Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                  </MyTypography>
               </StyledBreadcrumbs>
            </nav>
            <ProductDescription descriptionData={productDescriptionData} rows={rowsData} labelButton="КУПИТЬ" />
            <BuyProduct navData={navBuyProductData} tableData={tableBuyProductData} labelButton="КУПИТЬ" />
            <BlockVariousGoods navData={navOtherProductData} title="С этим товаром покупают" cardsData={otherProductCardsData} btnStyle={{ display: "none" }} />
         </div>
      </div>
   );
}

export default ProductPage;