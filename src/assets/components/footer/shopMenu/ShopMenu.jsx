import s from './ShopMenu.module.scss'

function ShopMenu() {
    return (
        <div className={s.shopMenu}>
            <h3 className={s.title}>Интернет-магазин</h3>
            <ul className={s.list}>
                <li className={s.item}><a className={s.link} 
                                                    href="/">Доставка и самовывоз</a></li>
                <li className={s.item}><a className={s.link}
                                                    href="/">Оплата</a></li>
                <li className={s.item}><a className={s.link}
                                                    href="/">Возврат-обмен</a></li>
                <li className={s.item}><a className={s.link}
                                                    href="/">Новости</a></li>
            </ul>
        </div>
    );
}

export default ShopMenu;