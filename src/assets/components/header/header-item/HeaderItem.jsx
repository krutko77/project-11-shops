import s from './HeaderItem.module.scss';
import { NavLink } from "react-router-dom";


function HeaderItem(props) {
   return (
      <div>
         <NavLink className={s.headerLink} to="/">{props.titleLink}</NavLink>
      </div>
   );
}

export default HeaderItem;
