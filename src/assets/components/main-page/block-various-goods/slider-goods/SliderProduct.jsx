import "./SliderProduct.scss";
import Slider from "react-slick";
import ProductCard from "./../../../common/product-card/ProductCard.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";



export default function SliderProduct(props) {
   var settings = {
      '.slick-slide .slick-cloned': {
         width: "300px"
      },
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
            <ProductCard cardData={props.cardsData.cardData1} />
            <ProductCard cardData={props.cardsData.cardData2} />
            <ProductCard cardData={props.cardsData.cardData3} />
            <ProductCard cardData={props.cardsData.cardData4} />
            <ProductCard cardData={props.cardsData.cardData1} />
            <ProductCard cardData={props.cardsData.cardData2} />
            <ProductCard cardData={props.cardsData.cardData3} />
            <ProductCard cardData={props.cardsData.cardData4} />
         </Slider>
      </div>
   );
}