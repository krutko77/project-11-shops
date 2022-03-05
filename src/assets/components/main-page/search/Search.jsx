import s from "./Search.module.scss";
import Button from './../../common/button/Button.jsx';

// стилизация кнопки
const styleButton = {
   padding: "17px 42px",
   fontSize: "14px",
   letterSpacing: "0.8px"
}

function Search(props) {
   return (
      <div className={s.search}>
         <ul className={s.selectButtons}>
            <li><button className={s.btnSelect}>{props.searchData.label1}</button></li>
            <li><button className={`${s.btnSelect} ${s.active}`}>{props.searchData.label2}</button></li>
            <li><button className={s.btnSelect}>{props.searchData.label3}</button></li>
         </ul>
         <div className={s.inputBlock}>
            <input className={s.inputSearch} name="name" type="text" placeholder="Введите марку" autofocus />
            <Button className={s.button} style={styleButton} label={"Искать"} />            
         </div>
      </div>
   );
}

export default Search;