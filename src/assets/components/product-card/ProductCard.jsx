import s from "./ProductCard.module.scss";

function ProductCard() {
  return (
    <section className={s.productDescription}>
      <div className={s.productAppearanceCost}></div>
      <div className={s.productCharacteristics}></div>
    </section>
  );
}

export default ProductCard;