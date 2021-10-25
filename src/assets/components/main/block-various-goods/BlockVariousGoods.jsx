import s from "./BlockVariousGoods.module.scss";

import TitleBlock from "./title-block/TitleBlock";
import SliderProduct from "./slider-goods/SliderProduct";
import ButtonBlock from "./button-block/ButtonBlock";





function BlockVariousGoods(props) {
   return (
      <div className={s.blockVariousGoods}>
         <TitleBlock title={props.title} />
         <SliderProduct cardsData={props.cardsData} />
         <ButtonBlock style={props.btnStyle} btnData={props.btnData}/>
      </div>
   );
}

export default BlockVariousGoods;
