import style from "./Directory.module.scss";
import ProductCard from "./../../common/product-card/ProductCard.jsx";

function Directory(props) {
   return (
      <div className={style.products}>
         <ProductCard cardData={props.cardsData.data1} />
         <ProductCard cardData={props.cardsData.data2} />
         <ProductCard cardData={props.cardsData.data3} />
         <ProductCard cardData={props.cardsData.data4} />
         <ProductCard cardData={props.cardsData.data5} />
         <ProductCard cardData={props.cardsData.data6} />
         <ProductCard cardData={props.cardsData.data7} />
         <ProductCard cardData={props.cardsData.data8} />
         <ProductCard cardData={props.cardsData.data9} />
         <ProductCard cardData={props.cardsData.data10} />
         <ProductCard cardData={props.cardsData.data11} />
         <ProductCard cardData={props.cardsData.data12} />
      </div>
   );
}

export default Directory;
