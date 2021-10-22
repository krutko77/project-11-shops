import Slider from "react-slick";
import "./SliderBanner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderBanner(props) {
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
            <div><img src={props.bannerData.img1} alt="img" /></div>
            <div><img src={props.bannerData.img2} alt="img" /></div>
            <div><img src={props.bannerData.img3} alt="img" /></div>
            <div><img src={props.bannerData.img4} alt="img" /></div>
            <div><img src={props.bannerData.img5} alt="img" /></div>
            <div><img src={props.bannerData.img6} alt="img" /></div>
         </Slider>
      </div>
   );
}


