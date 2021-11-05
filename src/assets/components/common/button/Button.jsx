import s from "./Button.module.scss";

// стилизация кнопки
// const style = {
//    padding: "19px 61px",
//    fontSize: "14px",
//    letterSpacing: "0.8px"
// }

function Button(props) {
   return (   
      <button className={s.btn} style={props.style}>{props.buttonData.label}</button>
   );
}

export default Button;