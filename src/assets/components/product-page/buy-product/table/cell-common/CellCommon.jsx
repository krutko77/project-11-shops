import s from "./CellCommon.module.scss";




function CellCommon(props) {
   return (   
     <div className={s.cell}>
        <span className={s.text}></span>        
     </div>
   );
}

export default CellCommon;