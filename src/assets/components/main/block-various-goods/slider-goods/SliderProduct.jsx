import "./SliderProduct.scss";
import Slider from "react-slick";
import SliderProductCard from "../slider-product-card/SliderProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cartImg from './../../../../img/slider1/cart.png';




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
               sale= {props.cardsData.cardData2.sale}
               title={props.cardsData.cardData2.title} 
               img={props.cardsData.cardData2.img} 
               price={props.cardsData.cardData2.price} 
               cartImg={cartImg}
               /> 
            </div>

            <div>
               <SliderProductCard 
               sale= "" 
               styleSale= {{display: "none"}}
               title={props.cardsData.cardData3.title} 
               img={props.cardsData.cardData3.img} 
               price={props.cardsData.cardData3.price} 
               cartImg={cartImg}
               />
            </div>

            <div>
               <SliderProductCard 
               sale= {props.cardsData.cardData4.sale}
               title={props.cardsData.cardData4.title} 
               img={props.cardsData.cardData4.img} 
               nope={props.cardsData.cardData4.nope} 
               inform={props.cardsData.cardData4.inform}
               cartImg = ""
               styleCart = {{display: "none"}}
               />
            </div>

            <div>
            <SliderProductCard 
            sale= {props.cardsData.cardData5.sale}
            title={props.cardsData.cardData5.title} 
            img={props.cardsData.cardData5.img} 
            nope={props.cardsData.cardData5.nope} 
            inform={props.cardsData.cardData5.inform}
            cartImg = ""
            styleCart = {{display: "none"}}
               /> 
            </div>


            <div>
            <SliderProductCard 
            sale= "" 
            styleSale= {{display: "none"}}
            title={props.cardsData.cardData6.title} 
            img={props.cardsData.cardData6.img} 
            price={props.cardsData.cardData6.price} 
            cartImg={cartImg}
               /> 
            </div>

            <div>
               <SliderProductCard 
               sale= {props.cardsData.cardData7.sale}
               title={props.cardsData.cardData7.title} 
               img={props.cardsData.cardData7.img} 
               nope={props.cardsData.cardData7.nope} 
               inform={props.cardsData.cardData7.inform}
               cartImg = ""
               styleCart = {{display: "none"}}
               />
            </div>

            <div>
               <SliderProductCard 
               sale= "" 
               styleSale= {{display: "none"}}
               title={props.cardsData.cardData8.title} 
               img={props.cardsData.cardData8.img} 
               price={props.cardsData.cardData8.price} 
               cartImg = ""
               styleCart = {{display: "none"}}
               />
            </div>

         </Slider>
      </div>
   );
}