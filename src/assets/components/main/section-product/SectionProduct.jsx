import ProductCard from "./product-card/ProductCard";
import s from "./SectionProduct.module.scss";

import img1 from "./../../../img/section_products/img1.png";
import img2 from "./../../../img/section_products/img2.png";
import img3 from "./../../../img/section_products/img3.png";
import img4 from "./../../../img/section_products/img4.png";
import img5 from "./../../../img/section_products/img5.png";
import img6 from "./../../../img/section_products/img6.png";



const data = {
  title: "Квадроциклы"
}
const data2 = {
  title: "Гидроциклы"
}
const data3 = {
  title: "Катера"
}
const data4 = {
  title: "Снегоходы"
}
const data5 = {
  title: "Вездеходы"
}
const data6 = {
  title: "Двигатели"
}


const data7 = {
  details: "Подробее"
}


const data8 = {
  img: img1
}
const data9 = {
  img: img2
}
const data10 = {
  img: img3
}
const data11 = {
  img: img4
}
const data12 = {
  img: img5
}
const data13 = {
  img: img6
}





function SectionProduct() {
  return (
    <div className={s.container}>
      <section className={s.sectionProduct}>

        <ProductCard title={data.title} details={data7.details}  img={data8.img}/>
        <ProductCard title={data2.title} details={data7.details} img={data9.img} />
        <ProductCard title={data3.title} details={data7.details} img={data10.img} />
        <ProductCard title={data4.title} details={data7.details} img={data11.img} />
        <ProductCard title={data5.title} details={data7.details} img={data12.img} />
        <ProductCard title={data6.title} details={data7.details} img={data13.img} />

      </section>
    </div>
  );
 }
 
 export default SectionProduct;