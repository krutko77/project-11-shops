import s from './Mailing.module.scss'
import React from "react";

function Mailing() {
    return (
        <div className={s.mailing}>
            <p className={s.emailText}>Подпишитесь на нашу рассылку <br/>
            и узнавайте о акция быстрее</p>
            <input className={s.emailInput} type="url" name="sait" placeholder="Введите ваш e-mail:"/>
            <button className={s.btn}>Отправить</button>
        </div>
    );
}

export default Mailing;