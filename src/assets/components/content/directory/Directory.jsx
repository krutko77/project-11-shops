import style from "./Directory.module.scss";
import imgSlider2Card1 from "./../../../img/jet-skis/jetski1.png";
import imgSlider2Card2 from "./../../../img/jet-skis/jetski2.png";
import imgSlider2Card3 from "./../../../img/jet-skis/jetski3.png";
import imgSlider2Card4 from "./../../../img/jet-skis/jetski4.png";
import imgSlider2Card5 from "./../../../img/jet-skis/jetski5.png";
import imgSlider2Card6 from "./../../../img/jet-skis/jetski6.png";
import imgSlider2Card7 from "./../../../img/jet-skis/jetski7.png";
import imgSlider2Card8 from "./../../../img/jet-skis/jetski8.png";
import imgSlider2Card12 from "./../../../img/jet-skis/jetski9.png";
import SliderProductCard from "../../../components/main-page/block-various-goods/slider-product-card/SliderProductCard";

function Directory(props) {
  return (
    <div className={style.products}>
      <SliderProductCard img={imgSlider2Card1} />
      <SliderProductCard img={imgSlider2Card2} />
      <SliderProductCard img={imgSlider2Card3} />
      <SliderProductCard img={imgSlider2Card4} />
      <SliderProductCard img={imgSlider2Card5} />
      <SliderProductCard img={imgSlider2Card6} />
      <SliderProductCard img={imgSlider2Card7} />
      <SliderProductCard img={imgSlider2Card8} />
      <SliderProductCard img={imgSlider2Card12} />
    </div>
  );
}

export default Directory;
