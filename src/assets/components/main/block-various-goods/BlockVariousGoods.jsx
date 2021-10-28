import s from "./BlockVariousGoods.module.scss";

import TitleBlock from "./title-block/TitleBlock";
import SliderProduct from "./slider-goods/SliderProduct";
import NavigationBlock from "./navigation-block/NavigationBlock";
import ButtonShowMore from "./button-show-more/ButtonShowMore";


function BlockVariousGoods(props) {
   return (
      <div className={s.blockVariousGoods}>
         <TitleBlock title={props.title} />
         <SliderProduct cardsData={props.cardsData} />
         <ButtonShowMore style={props.style} />
      </div>
   );
}

export default BlockVariousGoods;
