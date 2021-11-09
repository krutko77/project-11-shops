import s from "./CellOperatingMode.module.scss";




function CellOperatingMode(props) {
   return (   
      <>
         <span className={`${s.text} ${s.flex}`}></span> 
         <span className={`${s.text} ${s.flex}`}></span>       
      </>
   );
}

export default CellOperatingMode;