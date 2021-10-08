
import s from './HeaderItem.module.scss';







function HeaderItem(props) {
    return (

        <li className={s.headerItem}>
            <a className={s.link}>{props.titleLink}</a>
        </li>
    );
}

export default HeaderItem;
