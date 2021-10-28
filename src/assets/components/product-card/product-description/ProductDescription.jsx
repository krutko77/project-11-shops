import s from "./ProductCard.module.scss";



import imgProductCard from "./../../img/product-card/product-card-img.png";



function productDescription() {
   return (
      <section className={s.productDescription}>
      <div className={s.productAppearanceCost}></div>
      <div className={s.productCharacteristics}></div>
    </section>
     

   );
}

export default productDescription;