import s from "./ProductDescription.module.scss";
import { NavLink } from "react-router-dom";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import IconCheckboxes from "../../common/icon-boxes/IconCheckboxes.jsx";
import SmallTable from "./small-table/SmallTable.jsx";
import Button from "../../common/button/Button.jsx";

// стилизация рейтинга
const StyledRating = styled(Rating)({
   "& .MuiRating-icon ": {
      marginRight: 6,
      paddingTop: 10,
   },
   "& .MuiRating-iconFilled": {
      color: "#1C62CD",
   },
});

// стилизация кнопки
const styleButton = {
   padding: "19px 61px",
   fontSize: "14px",
   letterSpacing: "0.8px",
};

function productDescription(props) {
   return (
      <section className={s.productDescription}>
         <div className={s.leftBlock}>
            <div className={s.productAppearancePrice}>
               <span className={s.saleLabel} style={props.descriptionData.style}>
                  SALE
               </span>
               <img className={s.img} src={props.descriptionData.img} alt="img" />
               <span className={s.oldPrice}>{props.descriptionData.oldPrice}</span>
               <span className={s.newPrice}>{props.descriptionData.newPrice}</span>
               <NavLink className={s.link} to={"/"}>
                  Нашли дешевле? Снизим цену!
               </NavLink>
            </div>
         </div>
         <div className={s.productCharacteristics}>
            <div className={s.titleBlock}>
               <h2 className={s.title}>{props.descriptionData.title}</h2>
               <span className={s.itemNumber}>
                  Код товара: {props.descriptionData.itemNumber}
               </span>
               <div className={s.rating}>
                  <div className={s.checkbox}>
                     <IconCheckboxes />
                  </div>
                  <svg className={s.diagramIcon} width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="16" y="15.7708" width="4" height="11.7255" rx="2" fill="#2F3035" />
                     <rect x="8" y="0.527588" width="4" height="26.9687" rx="2" fill="#2F3035" />
                     <rect y="9.90796" width="4" height="17.5883" rx="2" fill="#2F3035" />
                  </svg>
                  <StyledRating
                     readOnly
                     defaultValue={props.descriptionData.rating}
                     emptyIcon={
                        <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                     }
                  />
               </div>
            </div>
            <nav className={s.navigationList}>
               <ul className={s.list}>
                  <li className={s.item}>
                     <NavLink className={`${s.linkList} ${s.active}`} to={"/"}>
                        Характеристики
                     </NavLink>
                  </li>
                  <li className={s.item}>
                     <NavLink className={s.linkList} to={"/"}>
                        Наличие в магазине
                     </NavLink>
                  </li>
               </ul>
            </nav>
            <div className={s.smallTableWrap}>
               <SmallTable rows={props.rows} />
               <NavLink className={s.linkSmallTable} to={"/"}>
                  Показать еще
               </NavLink>
            </div>
            <Button className={s.button} style={styleButton} label={"Купить"} />
         </div>
      </section>
   );
}

export default productDescription;
