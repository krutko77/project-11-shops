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
      <div className={s.search}>
         <ul className={s.selectButtons}>
            <li><button className={s.btnSelect}>{data1.label}</button></li>
            <li><button className={`${s.btnSelect} ${s.active} ${s.active}`}>{data2.label}</button></li>
            <li><button className={s.btnSelect}>{data3.label}</button></li>
         </ul>
         <div className={s.inputBlock}>
            <input className={s.inputSearch} type="text" placeholder="Введите марку " />
            <button className={s.btnSearch}>ИСКАТЬ</button>
         </div>
      </div>
   );
}

export default Search;