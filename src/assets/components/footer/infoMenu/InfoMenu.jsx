import s from './InfoMenu.module.scss';
import { NavLink } from "react-router-dom";

function InfoMenu() {
    return (
        <div className={s.infoMenu}>
            <h3 className={s.titleMenu}>Информация</h3>
            <ul className={s.listMenu}>
                <li className={s.itemMenu}><NavLink className={s.linkMenu}
                                              to="/">О компании</NavLink></li>
                <li className={s.itemMenu}><NavLink className={s.linkMenu}
                                              to="/">Контакты</NavLink></li>
                <li className={s.itemMenu}><NavLink className={s.linkMenu}
                                              to="/">Акции</NavLink></li>
                <li className={s.itemMenu}><NavLink className={s.linkMenu}
                                              to="/">Магазины</NavLink></li>
            </ul>
        </div>
    );
}

export default InfoMenu;