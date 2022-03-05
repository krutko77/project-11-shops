import s from "./GrayButton.module.scss";
import { NavLink } from "react-router-dom";

function GrayButton(props) {
   return (
      <NavLink className={s.btn} to={'/'} style={props.style}>{props.label}</NavLink>
   );
}

export default GrayButton;