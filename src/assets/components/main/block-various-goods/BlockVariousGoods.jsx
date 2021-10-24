import s from "./BlockVariousGoods.module.scss";

import TitleBlock from "./title-block/TitleBlock";
import SliderProduct from "./slider-goods/SliderProduct";
import NavigationBlock from "./navigation-block/NavigationBlock";
import ButtonBlock from "./button-block/ButtonBlock";



// const data = {
//   title: "Популярные товары"
// }


function BlockVariousGoods(props) {
   return (
      <div className={s.blockVariousGoods}>
         <TitleBlock title={props.title} />
         <SliderProduct cardsData={props.cardsData} />
         <ButtonBlock style={props.style} btnData={props.btnData}/>
      </div>
   );
}

export default BlockVariousGoods;
