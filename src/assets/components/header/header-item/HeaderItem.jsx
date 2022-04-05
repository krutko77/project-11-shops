import s from './HeaderItem.module.scss';
import { NavLink } from "react-router-dom";


function HeaderItem(props) {
   return (
      <li className={s.headerItem}>
         <NavLink className={s.headerLink} to="/">{props.titleLink}</NavLink>
      </li>
   );
}

export default HeaderItem;
