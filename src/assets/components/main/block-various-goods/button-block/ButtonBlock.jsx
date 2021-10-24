import s from "./ButtonBlock.module.scss";
import {NavLink} from "react-router-dom";

function ButtonBlock(props) {
   return (
     <NavLink className={s.btn} to={'/'} style={props.style}>ПОКАЗАТЬ ЕЩЕ</NavLink>
   );
 }
 
 export default ButtonBlock;