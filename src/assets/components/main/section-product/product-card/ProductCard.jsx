import s from "./ProductCard.module.scss";




function ProductCard(props) {
   return (

      <article className={s.productCard}>
         <div className={s.wrap}>
            <h1 className={s.heading}>{props.title}</h1>
            <a className={s.details} href="#">{props.details}</a>
         </div>
         <div className={s.imgWrap}>
         <img className={s.img} src={props.img} alt="" />
         </div>
      </article>

   );
 }
 
 export default ProductCard;