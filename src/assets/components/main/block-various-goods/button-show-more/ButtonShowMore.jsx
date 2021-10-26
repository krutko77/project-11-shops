import s from "./ButtonShowMore.module.scss";
import {NavLink} from "react-router-dom";

function ButtonShowMore(props) {
   return (
     <NavLink className={s.btn} to={'/'} style={props.style}>ПОКАЗАТЬ ЕЩЕ</NavLink>
   );
 }
 
 export default ButtonShowMore;