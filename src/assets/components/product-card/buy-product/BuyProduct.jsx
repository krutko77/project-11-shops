import Navigation from "../../common/navigation/Navigation.jsx";
import s from "./BuyProduct.module.scss";

// стилизация блока навигации
const styledNavigation = {
   justifyContent: "space-around",
   height: "70px"   
}

// стилизация элементов навигации
const styledNavigationItem = {
   fontFamily: "SFProDisplayRegular",
   fontSize: "20px",
   lineHeight: "150%"
}

function BuyProduct(props) {
   return (
      <section className={s.buyProduct}>
         <Navigation className={s.navigation} navData={props.navData} styledNavigation={styledNavigation} styledNavigationItem={styledNavigationItem}/>
         <div className={s.search}>
            <span className={s.labelName}>Магазин</span>
            <input className={s.inputSearch} type="text" />
         </div>
         <div className={s.checkBoxes}>
            <div className={s.checkBoxLeft}>
               <span className={s.labelTimeLeft}>Забрать сегодня</span>
            </div>
            <div className={s.checkBoxRight}>
               <span className={s.labelTimeRight}>Забрать в течение недели</span>
            </div>
         </div>
         <div className={s.table}>

         </div>
      </section>
   );
}

export default BuyProduct;