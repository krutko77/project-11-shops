import s from "./ProductCard.module.scss";
import ProductDescription from "./product-description/productDescription.jsx";
import { Breadcrumbs } from "@mui/material";
import BuyProduct from "./buy-product/BuyProduct.jsx";
import BlockVariousGoods from "./../main/block-various-goods/BlockVariousGoods.jsx";

const otherProductCardsData = {}

function ProductCard() {
   return (
      <div className={s.productCard}>
         <div className={s.container}>
            <Breadcrumbs />
            <ProductDescription />
            <BuyProduct />
            <BlockVariousGoods title="С этим товаром покупают" cardsData={otherProductCardsData} btnStyle={{ display: "none" }}/>
         </div>
      </div>
   );
}

export default ProductCard;