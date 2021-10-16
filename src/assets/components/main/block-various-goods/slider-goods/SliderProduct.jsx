import  "./SliderProduct.module.css";
import Slider from "react-slick";
import 'styled-components'; 
import SliderProductCard from "../slider-product-card/SliderProductCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import img from "./../../../../img/slider1/img.png";
import img2 from "./../../../../img/slider1/img2.png";
import img3 from "./../../../../img/slider1/img3.png";
import img4 from "./../../../../img/slider1/img4.png";



const data = {
  title: "Водонепроницаемый Рюкзак"
}
const data2 = {
  img: img
}


const data3 = {
  title: "Спасательный жилет BRP Men's Airflow PFD"
}
const data4 = {
  img: img2
}


const data5 = {
  title: "BRP Audio-Premium System"
}
const data6 = {
  img: img3
}


const data7 = {
  title: "Спасательное снаряжение"
}
const data8 = {
  img: img4
}


export default function SliderProduct() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider  {...settings}>
      
      <div className="wrap">
      <SliderProductCard title = {data.title} img = {data2.img}/>
      </div>

      <div className="wrap">
      <SliderProductCard title = {data3.title} img = {data4.img}/>
      </div>
      
      <div className="wrap">
      <SliderProductCard title = {data5.title} img = {data6.img}/>
      </div>
      
      <div className="wrap">
      <SliderProductCard title = {data7.title} img = {data8.img}/>
      </div>
      
      <div className="wrap">
      {/* <SliderProductCard title = {data.title} img = {data2.img}/> */}
      </div>
     
      <div className="wrap">
      {/* <SliderProductCard title = {data.title} img = {data2.img}/> */}
      </div>
    </Slider>
  );
}