import s from "./BlockVariousGoods.module.scss";

import TitleBlock from "./title-block/TitleBlock";
import SliderProduct from "./slider-goods/SliderProduct";
import NavigationBlock from "./navigation-block/NavigationBlock";
import ButtonBlock from "./button-block/ButtonBlock";



const data = {
  title: "Популярные товары",
  btn: "Показать еще"
}





function BlockVariousGoods() {
  return (
    <div>
      <TitleBlock title={data.title} />
      <NavigationBlock/>
      <SliderProduct />
      <ButtonBlock btn={data.btn}/>
    </div>
  );
}

 export default BlockVariousGoods;