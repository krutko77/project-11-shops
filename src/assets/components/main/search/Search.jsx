import s from "./Search.module.scss";

function Search(props) {

   return (
      <div className={s.search}>
         <ul className={s.selectButtons}>
            <li><button className={s.btnSelect}>{props.searchData.label1}</button></li>
            <li><button className={`${s.btnSelect} ${s.active}`}>{props.searchData.label2}</button></li>
            <li><button className={s.btnSelect}>{props.searchData.label3}</button></li>
         </ul>
         <div className={s.inputBlock}>
            <input className={s.inputSearch} type="text" placeholder="Введите марку " />
            <button className={s.btnSearch}>ИСКАТЬ</button>
         </div>
      </div>
   );
}

export default Search;