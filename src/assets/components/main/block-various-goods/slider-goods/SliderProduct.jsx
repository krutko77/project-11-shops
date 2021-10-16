import "./SliderProduct.module.scss";
import Slider from "react-slick";
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

const price = {
  value: "9 800 ₽"
}
const price2 = {
  value: "6 900 ₽"
}
const price3 = {
  value: "68 000 ₽"
}
const price4 = {
  value: "нет в наличии"
}
const price5 = {
  value: "19 800 ₽"
}
const price6 = {
  value: "49 800 ₽"
}


export default function SliderProduct() {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <Slider  {...settings}>
      
      <div>
      <SliderProductCard title = {data.title} img = {data2.img} price = {price.value}/>
      </div>

      <div>
      <SliderProductCard title = {data3.title} img = {data4.img} price = {price2.value}/>
      </div>
      
      <div>
      <SliderProductCard title = {data5.title} img = {data6.img} price = {price3.value}/>
      </div>
      
      <div>
      <SliderProductCard title = {data7.title} img = {data8.img} price = {price4.value}/>
      </div>
      
      <div>
      <SliderProductCard title = {data.title} img = {data6.img} price = {price5.value}/>
      </div>
     
      <div>
      <SliderProductCard title = {data.title} img = {data4.img} price = {price6.value}/>
      </div>
    </Slider>
  );
}