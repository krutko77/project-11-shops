import SectionProductsCard from "./section-products-card/SectionProductsCard.jsx";
import s from "./SectionProducts.module.scss";


function SectionProducts(props) {
  return (
    <div className={s.container}>
      <section className={s.sectionProducts}>
        <SectionProductsCard cardsProductData={props.cardsProductData.cardData1}/>
        <SectionProductsCard cardsProductData={props.cardsProductData.cardData2}/>
        <SectionProductsCard cardsProductData={props.cardsProductData.cardData3}/>
        <SectionProductsCard cardsProductData={props.cardsProductData.cardData4}/>
        <SectionProductsCard cardsProductData={props.cardsProductData.cardData5}/>
        <SectionProductsCard cardsProductData={props.cardsProductData.cardData6}/>
      </section>
    </div>
  );
 }
 
 export default SectionProducts;