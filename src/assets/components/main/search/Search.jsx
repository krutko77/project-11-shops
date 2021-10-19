import s from "./Search.module.scss";

function Search() {
   const data1 = {
      label: "Поиск по номеру"     
   }

   const data2 = {
      label: "Поиск по марке"     
   }

   const data3 = {
      label: "Поиск по названию товара"     
   }

   return (
     <section className={s.search}>
        <div className={s.selectButtons}>
           <button className={s.btnSelect}>{data1.label}</button>
           <button className={s.btnSelect}>{data2.label}</button>
           <button className={s.btnSelect}>{data3.label}</button>
        </div>
        <div className={s.inputBlock}>
           <input className={s.inputSearch} type="text" placeholder="Введите марку "/>
           <button className={s.btnSearch}>ИСКАТЬ</button>
        </div>
     </section>
   );
 }
 
 export default Search;