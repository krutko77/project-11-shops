import s from './InfoMenu.module.scss';

function InfoMenu() {
    return (
        <div className={s.infoMenu}>
            <h3 className={s.titleMenu}>Информация</h3>
            <ul className={s.listMenu}>
                <li className={s.itemMenu}><a className={s.linkMenu}
                                              href="/">О компании</a></li>
                <li className={s.itemMenu}><a className={s.linkMenu}
                                              href="/">Контакты</a></li>
                <li className={s.itemMenu}><a className={s.linkMenu}
                                              href="/">Акции</a></li>
                <li className={s.itemMenu}><a className={s.linkMenu}
                                              href="/">Магазины</a></li>
            </ul>
        </div>
    );
}

export default InfoMenu;