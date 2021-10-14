import s from "./Catalog.module.scss";
import Sorter from "./sorter/Sorter";







const data = {
   heading: "Гидроциклы"
 }






function Catalog() {
   return (
      <div>
         <div className={s.container}>



            <ol class={s.breadcrumb}>
               <li class={s.item}><a href="#">Главная</a></li>
               <li class={s.itemActive}>Гидроциклы</li>
            </ol>
            
         
            <h1 className={s.heading}>{data.heading}</h1>

            <Sorter/>


         </div>
      </div>
   );
 }
 
 export default Catalog;