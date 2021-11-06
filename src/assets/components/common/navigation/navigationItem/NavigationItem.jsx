import s from "./NavigationItem.module.scss";
import { Link } from "react-router-dom";

function NavigationItem(props) {
  return (
    <li className={s.item} style={props.styledNavigationItem, props.itemData.styleItem}>
      <Link to={props.itemData.path} className={s.link}>
        {props.itemData.title}
      </Link>
    </li>
  );
}

export default NavigationItem;
