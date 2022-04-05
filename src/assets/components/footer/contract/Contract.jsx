import s from './Contract.module.scss'
import { NavLink } from "react-router-dom";

function Contract() {
   return (
      <div className={s.contract}>
         <ul className={s.list}>
            <li className={s.item}><NavLink className={s.link}
               to="/">Договор оферты</NavLink></li>
            <li className={s.item__right}><NavLink className={s.link}
               to="/">Политика обработки персональных данных</NavLink></li>
         </ul>
      </div>
   );
}

export default Contract;