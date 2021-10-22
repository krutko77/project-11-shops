import s from "./BlockVariousGoods.module.scss";

import TitleBlock from "./title-block/TitleBlock";
import SliderProduct from "./slider-goods/SliderProduct";



// const data = {
//   title: "Популярные товары"
// }


function BlockVariousGoods(props) {
   return (
      <div className={s.blockVariousGoods}>
         <TitleBlock title={props.title} />
         <SliderProduct cardsData={props.cardsData} />
      </div>
   );
}

export default BlockVariousGoods;