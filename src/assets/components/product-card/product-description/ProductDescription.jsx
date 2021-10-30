import s from "./ProductDescription.module.scss";
import { NavLink } from "react-router-dom";
import { Rating } from "@mui/material";
import { styled } from '@mui/material/styles';

const ProductRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
     color: '#1C62CD',
   },
   '& .MuiRating-iconEmpty': {
     color: '#C4C4C4',     
   },
 });
<

function productDescription(props) {
   return (
      <section className={s.productDescription}>
         <div className={s.leftBlock}>
            <div className={s.productAppearancePrice}>
               <span className={s.saleLabel} style={props.descriptionData.style}>SALE</span>
               <img className={s.img} src={props.descriptionData.img} alt="img" />
               <span className={s.oldPrice}>{props.descriptionData.oldPrice}</span>
               <span className={s.newPrice}>{props.descriptionData.newPrice}</span>
               <NavLink className={s.link} to={'/'}>Нашли дешевле? Снизим цену!</NavLink>
            </div>
         </div>
         <div className={s.productCharacteristics}>
            <div className={s.titleRating}>
               <h2 className={s.title}>{props.descriptionData.title}</h2>
               <span className={s.itemNumber}>Код товара:<span className={s.itemNumberData}>{props.descriptionData.itemNumber}</span></span>
               <span className={s.rating}>
               <ProductRating 
                  readOnly 
                  defaultValue={props.descriptionData.rating} />
               </span>
            </div>
         </div>
      </section>


   );
}

export default productDescription;