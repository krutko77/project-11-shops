import s from './ShopMenu.module.scss'
import { NavLink } from "react-router-dom";

function ShopMenu() {
    return (
        <div className={s.shopMenu}>
            <h3 className={s.title}>Интернет-магазин</h3>
            <ul className={s.list}>
                <li className={s.item}><NavLink className={s.link} 
                                                    to="/">Доставка и самовывоз</NavLink></li>
                <li className={s.item}><NavLink className={s.link}
                                                    to="/">Оплата</NavLink></li>
                <li className={s.item}><NavLink className={s.link}
                                                    to="/">Возврат-обмен</NavLink></li>
                <li className={s.item}><NavLink className={s.link}
                                                    to="/">Новости</NavLink></li>
            </ul>
        </div>
    );
}

export default ShopMenu;