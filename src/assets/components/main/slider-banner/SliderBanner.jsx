import Slider from "react-slick";
import "./SliderBanner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './../../../img/slider-banner/img.jpg';
import img2 from './../../../img/slider-banner/img.jpg';
import img3 from './../../../img/slider-banner/img.jpg';
import img4 from './../../../img/slider-banner/img.jpg';
import img5 from './../../../img/slider-banner/img.jpg';
import img6 from './../../../img/slider-banner/img.jpg';

export default function SliderBanner() {
   let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   return (
      <div className="slider-banner">
         <Slider {...settings}>
            <div><img src={img1} alt="img" /></div>
            <div><img src={img2} alt="img" /></div>
            <div><img src={img3} alt="img" /></div>
            <div><img src={img4} alt="img" /></div>
            <div><img src={img5} alt="img" /></div>
            <div><img src={img6} alt="img" /></div>
         </Slider>
      </div>
   );
}


