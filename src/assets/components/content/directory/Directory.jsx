import style from "./Directory.module.scss";
import { NavLink } from "react-router-dom";
import ProductCard from "./../../common/product-card/ProductCard";

function Directory(props) {
   return (
      <div className={style.products}>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data1} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data2} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data3} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data4} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data5} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data6} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data7} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data8} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data9} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data10} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data11} />
         </NavLink>
         <NavLink to="/product-page">
            <ProductCard cardData={props.cardsData.data12} />
         </NavLink>
      </div>
   );
}

export default Directory;
