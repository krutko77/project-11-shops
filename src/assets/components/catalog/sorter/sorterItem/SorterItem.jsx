
import s from './SorterItem.module.scss';
import { NavLink } from "react-router-dom";


function SorterItem(props) {
    return (
        <li className={s.item}>
            <NavLink className={s.link} to="/" >{props.title}</NavLink>
        </li>
    );
}

export default SorterItem;
