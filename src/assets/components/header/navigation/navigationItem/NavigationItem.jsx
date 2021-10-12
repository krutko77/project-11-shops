
import s from './NavigationItem.module.scss';

function NavigationItem(props) {
    return (
        <li className={s.item}>
            <a className={s.link}>{props.title}</a>
        </li>
    );
}

export default NavigationItem;
