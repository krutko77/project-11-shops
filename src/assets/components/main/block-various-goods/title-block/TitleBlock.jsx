import s from "./TitleBlock.module.scss";

function TitleBlock(props) {
   return (
     <h2 className={s.heading}>{props.title}</h2>
   );
 }
 
 export default TitleBlock;