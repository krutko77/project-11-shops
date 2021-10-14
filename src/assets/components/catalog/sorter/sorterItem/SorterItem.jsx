
import s from './SorterItem.module.scss';







function SorterItem(props) {
    return (
        <li className={s.item}>
            <a className={s.link}>{props.title}</a>
        </li>
    );
}

export default SorterItem;
