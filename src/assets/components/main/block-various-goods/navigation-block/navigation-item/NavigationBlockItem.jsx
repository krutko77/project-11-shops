import { PinDropSharp } from "@mui/icons-material";
import s from "./NavigationBlockItem.module.scss";

function NavigationBlockItem(props) {
   return (
     <li className={s.item}>
       <a className={s.link} href="#">{props.title}</a>
     </li>
   );
 }
 
 export default NavigationBlockItem;