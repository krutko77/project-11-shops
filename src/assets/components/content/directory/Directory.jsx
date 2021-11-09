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
import ProductCard from "../../main/block-various-goods/product-card/ProductCard";

function Directory(props) {
  return (
    <div className={style.products}>
      <ProductCard img={imgSlider2Card1} />
      <ProductCard img={imgSlider2Card2} />
      <ProductCard img={imgSlider2Card3} />
      <ProductCard img={imgSlider2Card4} />
      <ProductCard img={imgSlider2Card5} />
      <ProductCard img={imgSlider2Card6} />
      <ProductCard img={imgSlider2Card7} />
      <ProductCard img={imgSlider2Card8} />
      <ProductCard img={imgSlider2Card12} />
    </div>
  );
}

export default Directory;
