import s from "./Button.module.scss";

// в месте, где используется кнопка, пишем стилизацию кнопки
// const style = {
//    padding: "19px 61px",
//    fontSize: "14px",
//    letterSpacing: "0.8px"
// }

function Button(props) {
   return (   
      <button className={s.btn} style={props.style}>{props.label}</button>
   );
}

export default Button;