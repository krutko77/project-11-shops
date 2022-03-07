import s from "./Catalog.module.scss";

import Filter from "../content/filter/Filter";
import Directory from "../content/directory/Directory";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from "react-router-dom";
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
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card1,
      title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango",
      price: "1 049 500 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data2: {
      sale: "SALE",
      img: imgSlider2Card2,
      title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
      price: "1 543 000 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data3: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card3,
      title: "Гидроцикл BRP SeaDoo GTR 230hp X California green",
      price: "732 345 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data4: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card4,
      title: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении",
      styleCart: {
         display: "none"
      },
      link: "/product-page",
      informLink: "/"
   },
   data5: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card5,
      title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",
      price: "1 543 000 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data6: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card6,
      title: "Гидроцикл BRP SeaDoo Spark 60hp 2 up",
      price: "732 345 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data7: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card7,
      title: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",
      price: "857 666 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data8: {
      sale: "SALE",
      img: imgSlider2Card8,
      title: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal bluel",
      price: "1 229 711 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data9: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card9,
      title: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
      price: "587 440 ₽",
      link: "/product-page",
      informLink: "/"
   },
   data10: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card10,
      title: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении",
      styleCart: {
         display: "none"
      },
      link: "/product-page",
      informLink: "/"
   },
   data11: {
      sale: "SALE",
      img: imgSlider2Card11,
      title: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ",
      link: "/product-page",
      informLink: "/"
   },
   data12: {
      styleSale: {
         display: "none"
      },
      img: imgSlider2Card12,
      title: "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",
      nope: "нет в наличии",
      inform: "Сообщить о поступлении",
      styleCart: {
         display: "none"
      },
      link: "/product-page",
      informLink: "/"
   },
};

const data = {
   heading: "Гидроциклы",
};

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

function Catalog() {
   return (
      <div>
         <div className={s.container}>
            <nav className={s.NavBreadcrumbs}>
               <StyledBreadcrumbs
                  separator={<NavigateNextIcon fontSize="medium" />} aria-label="breadcrumb">
                  <NavLink key="1" color="inherit" to="/">Главная</NavLink>,
                  <MyTypography key="3" color="inherit" >
                     Гидроциклы</MyTypography>
               </StyledBreadcrumbs>
            </nav>
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
