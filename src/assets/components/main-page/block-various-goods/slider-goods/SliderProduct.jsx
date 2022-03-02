import "./SliderProduct.scss";
import Slider from "react-slick";
import ProductCard from "./../../../common/product-card/ProductCard.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cartImg from './../../../../img/slider1/cart.png';
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

            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale=""
                     styleSale={{ display: "none" }}
                     title={props.cardsData.cardData1.title}
                     img={props.cardsData.cardData1.img}
                     price={props.cardsData.cardData1.price}
                     cartImg={cartImg}
                  />
               </NavLink>
            </div>

            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale={props.cardsData.cardData2.sale}
                     title={props.cardsData.cardData2.title}
                     img={props.cardsData.cardData2.img}
                     price={props.cardsData.cardData2.price}
                     cartImg={cartImg}
                  />
               </NavLink>
            </div>

            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale=""
                     styleSale={{ display: "none" }}
                     title={props.cardsData.cardData3.title}
                     img={props.cardsData.cardData3.img}
                     price={props.cardsData.cardData3.price}
                     cartImg={cartImg}
                  />
               </NavLink>
            </div>

            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale={props.cardsData.cardData4.sale}
                     title={props.cardsData.cardData4.title}
                     img={props.cardsData.cardData4.img}
                     nope={props.cardsData.cardData4.nope}
                     inform={props.cardsData.cardData4.inform}
                     cartImg=""
                     styleCart={{ display: "none" }}
                  />
               </NavLink>
            </div>

            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale={props.cardsData.cardData5.sale}
                     title={props.cardsData.cardData5.title}
                     img={props.cardsData.cardData5.img}
                     nope={props.cardsData.cardData5.nope}
                     inform={props.cardsData.cardData5.inform}
                     cartImg=""
                     styleCart={{ display: "none" }}
                  />
               </NavLink>
            </div>


            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale=""
                     styleSale={{ display: "none" }}
                     title={props.cardsData.cardData6.title}
                     img={props.cardsData.cardData6.img}
                     price={props.cardsData.cardData6.price}
                     cartImg={cartImg}
                  />
               </NavLink>
            </div>

            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale={props.cardsData.cardData7.sale}
                     title={props.cardsData.cardData7.title}
                     img={props.cardsData.cardData7.img}
                     nope={props.cardsData.cardData7.nope}
                     inform={props.cardsData.cardData7.inform}
                     cartImg=""
                     styleCart={{ display: "none" }}
                  />
               </NavLink>
            </div>

            <div>
               <NavLink to={'/'}>
                  <ProductCard
                     sale=""
                     styleSale={{ display: "none" }}
                     title={props.cardsData.cardData8.title}
                     img={props.cardsData.cardData8.img}
                     price={props.cardsData.cardData8.price}
                     cartImg=""
                     styleCart={{ display: "none" }}
                  />
               </NavLink>
            </div>

         </Slider>
      </div>
   );
}