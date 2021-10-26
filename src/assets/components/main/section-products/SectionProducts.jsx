import SectionProductsCard from "./section-products-card/SectionProductsCard.jsx";
import s from "./SectionProducts.module.scss";

// import img1 from "./../../../img/section_products/img1.png";
// import img2 from "./../../../img/section_products/img2.png";
// import img3 from "./../../../img/section_products/img3.png";
// import img4 from "./../../../img/section_products/img4.png";
// import img5 from "./../../../img/section_products/img5.png";
// import img6 from "./../../../img/section_products/img6.png";

// const data = {
//   title: "Квадроциклы",
//   img: img1,
//   details: "Подробее"
// }
// const data2 = {
//   title: "Гидроциклы",
//   img: img2,
//   details: "Подробее"
// }
// const data3 = {
//   title: "Катера",
//   img: img3,
//   details: "Подробее"
// }
// const data4 = {
//   title: "Снегоходы",
//   img: img4,
//   details: "Подробее"
// }
// const data5 = {
//   title: "Вездеходы",
//   img: img5,
//   details: "Подробее"
// }
// const data6 = {
//   title: "Двигатели",
//   img: img6,
//   details: "Подробее"
// }

function SectionProducts(props) {
  return (
    <div className={s.container}>
      <section className={s.sectionProducts}>
        {/* <ProductCard title={data.title} details={data.details}  img={data.img}/>       
        <ProductCard title={data2.title} details={data2.details} img={data2.img} />
        <ProductCard title={data3.title} details={data3.details} img={data3.img} />
        <ProductCard title={data4.title} details={data4.details} img={data4.img} />
        <ProductCard title={data5.title} details={data5.details} img={data5.img} />
        <ProductCard title={data6.title} details={data6.details} img={data6.img} /> */}

        <SectionProductsCard
          cardsProductData={props.cardsProductData.cardData1}
        />
        <SectionProductsCard
          cardsProductData={props.cardsProductData.cardData2}
        />
        <SectionProductsCard
          cardsProductData={props.cardsProductData.cardData3}
        />
        <SectionProductsCard
          cardsProductData={props.cardsProductData.cardData4}
        />
        <SectionProductsCard
          cardsProductData={props.cardsProductData.cardData5}
        />
        <SectionProductsCard
          cardsProductData={props.cardsProductData.cardData6}
        />
      </section>
    </div>
  );
}

export default SectionProducts;
