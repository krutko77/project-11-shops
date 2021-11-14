import s from "./TableRow.module.scss";
import CellCommon from './../cell-common/CellCommon.jsx';
import CellTimetable from './../cell-timetable/CellTimetable.jsx';
import Button from './../../../../common/button/Button.jsx';


// стилизация кнопки
const styleButton = {
   padding: "10px 45px",
   fontSize: "13px",
   letterSpacing: "0.6px"
}


function TableRow(props) {
   return (
      <tr className={props.classData}>
         <td className={s.td1}><CellCommon cellData={props.cellData.address} /></td>
         <td className={s.td2}><CellTimetable cellData={props.cellData.operatingMode} /></td>
         <td className={s.td3}><CellCommon cellData={props.cellData.availability} /></td>
         <td className={s.td4}><CellCommon cellData={props.cellData.quantity} /></td>
         <td className={s.td5}><Button style={styleButton} label="КУПИТЬ" /></td>
      </tr>
   );
}

export default TableRow;