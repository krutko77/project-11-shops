import "./SliderProduct.scss";
import Slider from "react-slick";
import SliderProductCard from "../slider-product-card/SliderProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from "./../../../../img/slider1/img.png";
import img2 from "./../../../../img/slider1/img2.png";
import img3 from "./../../../../img/slider1/img3.png";
import img4 from "./../../../../img/slider1/img4.png";

import cartImg from './../../../../img/slider1/cart.png';



// const data = {
//    title: "Водонепроницаемый Рюкзак",
//    img: img,
//    price: "9 800 ₽",
//    cartImg: cartImg
// }


const data2 = {
   title: "Спасательный жилет BRP Men's Airflow PFD",
   img: img2,
   price: "6 900 ₽",
   sale: "SALE",
   cartImg: cartImg
}


const data3 = {
   title: "BRP Audio-Premium System",
   img: img3,
   price: "68 000 ₽",
   cartImg: cartImg
}


const data4 = {
   title: "Спасательное снаряжение",
   img: img4,
   nope: "нет в наличии",
   inform: "Сообщить о поступлении",
   sale: "SALE",
   cartImg: cartImg
}


const data5 = {
   title: "BRP Audio-Premium System",
   img: img,
   price: "6 900 ₽",
   cartImg: cartImg
}
const data6 = {
   title: "Водонепроницаемый Рюкзак",
   img: img3,
   nope: "нет в наличии",
   inform: "Сообщить о поступлении",
   cartImg: cartImg
}


export default function SliderProduct(props) {
   var settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
   };
   return (
      <div className="slider-product">
         <Slider  {...settings} >

            {/* <div>
               <SliderProductCard 
               sale= "" 
               styleSale= {{display: "none"}}

               title={data.title} 
               img={data.img} 
               price={data.price} 

               cartImg={data.cartImg}
               /> 
            </div> */}

<div>
               <SliderProductCard 
               sale= "" 
               styleSale= {{display: "none"}}
               title={props.cardsData.cardData1.title} 
               img={props.cardsData.cardData1.img} 
               price={props.cardsData.cardData1.price} 
               cartImg={cartImg}
               /> 
            </div>

            <div>
               <SliderProductCard 
               sale={data2.sale}

               title={data2.title} 
               img={data2.img}
               price={data2.price}

               cartImg={data2.cartImg}
               />
            </div>

            <div>
               <SliderProductCard 
               sale= "" 
               styleSale= {{display: "none"}}

               title={data3.title} 
               img={data3.img} 
               price={data3.price}

               cartImg={data3.cartImg}
               />
            </div>

            <div>
               <SliderProductCard 
               sale={data4.sale}

               title={data4.title} 
               img={data4.img}
               nope={data4.nope} 
               inform={data4.inform} 
               
               cartImg = ""
               styleCart = {{display: "none"}} />
            </div>

            <div>
               <SliderProductCard 
               sale= "" 
               styleSale= {{display: "none"}}

               title={data5.title} 
               img={data5.img} 
               price={data5.price} 

               cartImg={data5.cartImg}
               />
            </div>

            <div>
               <SliderProductCard 
               sale= "" 
               styleSale= {{display: "none"}}

               title={data6.title} 
               img={data6.img} 
               nope={data6.nope} 
               inform={data6.inform}

               cartImg = ""
               styleCart = {{display: "none"}}
                />
            </div>
         </Slider>
      </div>
   );
}