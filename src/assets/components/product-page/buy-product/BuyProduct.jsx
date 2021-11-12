import Navigation from "../../common/navigation/Navigation.jsx";
import s from "./BuyProduct.module.scss";
import RadioButtons from "./radio-buttons/RadioButtons.jsx";
import Table from './table/Table.jsx'

// стилизация блока навигации
const styledNavigation = {
   justifyContent: "space-around",
   height: "70px"
}

// стилизация элементов навигации
const styledNavItem = {
   fontSize: "20px",
   lineHeight: "150%"
}

function BuyProduct(props) {
   return (
      <section className={s.buyProduct}>
         <Navigation navData={props.navData} styledNavigation={styledNavigation}
            styledNavItem={styledNavItem} />
         <div className={s.contentBlock}>
            <div className={s.searchBlock}>
               <div className={s.search}>
                  <span className={s.labelName}>Магазин</span>
                  <input className={s.inputSearch} name="name" type="text" autofocus />
               </div>
               <RadioButtons />
            </div>            
            <Table tableData={props.tableData} />
         </div>
      </section>
   );
}

export default BuyProduct;