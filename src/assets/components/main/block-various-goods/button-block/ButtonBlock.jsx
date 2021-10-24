import s from "./ButtonBlock.module.scss";
import {NavLink} from "react-router-dom";

function ButtonBlock(props) {
   return (
     <NavLink className={s.btn} to={props.btnData.link}>{props.btnData.label}</NavLink>
   );
 }
 
 export default ButtonBlock;