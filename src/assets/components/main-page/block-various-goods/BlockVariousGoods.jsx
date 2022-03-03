import s from "./BlockVariousGoods.module.scss";
import TitleBlock from "./title-block/TitleBlock";
import SliderProduct from "./slider-goods/SliderProduct";
import ButtonShowMore from "./button-show-more/ButtonShowMore";
import Navigation from './../../common/navigation/Navigation.jsx';

// стилизация блока навигации
const styledNavigation = {
   justifyContent: "space-between",
   width: "755px",
   height: "40px"
}

const styledBackground = {
   backgroundColor: "transparent",
   marginBottom: "30px"   
}

// стилизация элементов навигации
const styledNavItem = {
   fontSize: "15px",
   lineHeight: "200%"
}

function BlockVariousGoods(props) {
   return (
      <div className={s.blockVariousGoods}>
         <TitleBlock title={props.title} />
         <Navigation navData={props.navData} styledNavigation={styledNavigation} styledBackground={styledBackground} styledNavItem={styledNavItem} />
         <SliderProduct cardsData={props.cardsData} />
         <ButtonShowMore style={props.btnStyle} />
      </div>
   );
}

export default BlockVariousGoods;
