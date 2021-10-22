import s from "./ButtonBlock.module.scss";

function ButtonBlock(props) {
   return (
     <a className={s.btn}>{props.btn}</a>
   );
 }
 
 export default ButtonBlock;