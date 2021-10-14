import s from './Contract.module.scss'

function Contract() {
    return (
        <div className={s.contract}>
            <ul className={s.list}>
                <li className={s.item}><a className={s.link}
                                                href="/">Договор оферты</a></li>
                <li className={s.item__right}><a className={s.link}
                        href="/">Политика обработки персональных данных</a></li>
            </ul>
        </div>
    );
}

export default Contract;