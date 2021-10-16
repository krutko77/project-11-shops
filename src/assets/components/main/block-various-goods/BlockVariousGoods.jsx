import s from "./BlockVariousGoods.module.scss";

import TitleBlock from "./title-block/TitleBlock";
import SliderProduct from "./slider-goods/SliderProduct";



const data = {
  title: "Популярные товары"
}





function BlockVariousGoods() {
  return (
    <div>
      <TitleBlock title={data.title} />
      <SliderProduct />
    </div>
  );
}

 export default BlockVariousGoods;