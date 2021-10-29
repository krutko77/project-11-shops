import s from "./ProductCard.module.scss";
import ProductDescription from "./product-description/ProductDescription.jsx";
import { Breadcrumbs } from "@mui/material";
import BuyProduct from "./buy-product/BuyProduct.jsx";
import BlockVariousGoods from "./../main/block-various-goods/BlockVariousGoods.jsx";

import imgProductCard from "./../../img/product-card/product-card-img.png";

const productDescriptionData = {
   style: {
      display: "block"
   },
   img: imgProductCard,
   oldPrice: "1 200 475 ₽",
   newPrice: "1 100 475 ₽",
   title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
   itemNumber: "Код товара: 	366666-2"
   
}

const buyProductData = {}
const otherProductCardsData = {}

function ProductCard() {
   return (
      <div className={s.productCard}>
         <div className={s.container}>
            <Breadcrumbs />
            <ProductDescription descriptionData={productDescriptionData}/>
            <BuyProduct buyProductData={buyProductData} />
            {/* <BlockVariousGoods title="С этим товаром покупают" cardsData={otherProductCardsData} btnStyle={{ display: "none" }}/> */}
         </div>
      </div>
   );
}

export default ProductCard;