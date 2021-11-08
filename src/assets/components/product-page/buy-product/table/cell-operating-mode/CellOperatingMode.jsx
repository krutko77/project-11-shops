import s from "./CellOperatingMode.module.scss";




function CellOperatingMode(props) {
   return (   
     <div className={s.cell}>
        <div className={`${s.text} ${s.flex}`}></div> 
        <div className={`${s.text} ${s.flex}`}></div>       
     </div>
   );
}

export default CellOperatingMode;