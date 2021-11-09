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
      <SliderProductCard
        img={imgSlider2Card1}
        title="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango"
      />
      <SliderProductCard
        img={imgSlider2Card2}
        title="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic"
        price="1 543 000 ₽"
      />
      <SliderProductCard
        img={imgSlider2Card3}
        title="Гидроцикл BRP SeaDoo GTR 230hp X California green "
        price="732 345 ₽"
      />
      <SliderProductCard
        img={imgSlider2Card4}
        title="Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream"
      />
      <SliderProductCard
        img={imgSlider2Card5}
        title="Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal"
        price="1 543 000 ₽"
      />
      <SliderProductCard
        img={imgSlider2Card6}
        title="Гидроцикл BRP SeaDoo Spark 60hp 2 up"
        price="732 345 ₽"
      />
      <SliderProductCard
        img={imgSlider2Card7}
        title="Гидроцикл BRP SeaDoo Spark GTS 90hp Rental"
        price="857 666 ₽"
      />
      <SliderProductCard
        img={imgSlider2Card8}
        title="Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue"
        price="1 229 711 ₽"
      />
      <SliderProductCard
        img={imgSlider2Card12}
        title="Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper"
        price="587 440 ₽"
      />
    </div>
  );
}

export default Directory;
