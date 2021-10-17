import s from "./NavigationItem.module.scss";
import { Link } from "react-router-dom";

function NavigationItem(props) {
  return (
    <li className={s.item}>
      <Link to={props.path} className={s.link}>
        {props.title}
      </Link>
    </li>
  );
}

export default NavigationItem;
