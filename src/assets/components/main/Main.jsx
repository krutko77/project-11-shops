import s from "./Main.module.scss";
import SliderBanner from './slider-banner/SliderBanner.jsx';
import PriceAction from './price-action/PriceAction.jsx';
import Search from './search/Search.jsx';
import SectionProduct from './section-product/SectionProduct';
import PopularGoods from './popular-goods/PopularGoods';
import Banner from './banner/Banner';
import BuyMore from './buy-more/BuyMore.jsx';

function Main(props) {
   return (
     <main>
        <div className={s.container}>
            <div className={s.SliderBanner}>
               <SliderBanner/>
               <PriceAction/>
            </div>
            <Search/>
            <SectionProduct/>
            <PopularGoods/>
            <Banner/>
            <BuyMore/>
        </div>        
     </main>
   );
 }
 
 export default Main;