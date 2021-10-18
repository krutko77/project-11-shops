import s from "./Main.module.scss";
import SliderBanner from './slider-banner/SliderBanner.jsx';
import PromoSale from './promo-sale/PromoSale.jsx';
import Search from './search/Search.jsx';
import SectionProduct from './section-product/SectionProduct';
import BlockVariousGoods from './block-various-goods/BlockVariousGoods';
import Banner from './banner/Banner';

function Main(props) {
   return (
     <div className={s.main}>
        <div className={s.container}>
            <section className={s.topBlock}>
               <SliderBanner/>
               <PromoSale/>
            </section>
            <Search/>
            <SectionProduct/>
            <BlockVariousGoods/>
            <Banner/>
            <BlockVariousGoods/>
        </div>        
     </div>
   );
 }
 
 export default Main;