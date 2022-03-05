import s from './Mailing.module.scss';
import Button from './../../common/button/Button.jsx';

// стилизация кнопки
const styleButton = {
   padding: "10px 19px",
   borderRadius: 0,
   fontSize: "11px",
   letterSpacing: "0.8px"
}

function Mailing() {
   return (
      <div className={s.mailing}>
         <div className={s.label}>
            <span className={s.emailText}>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</span>
         </div>
         <div className={s.inputButton}>
            <input className={s.emailInput} type="text" name="mail" placeholder="Введите ваш e-mail:" />
            <Button style={styleButton} label={"Отправить"} />
         </div>
      </div>
   );
}

export default Mailing;