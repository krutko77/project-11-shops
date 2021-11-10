import s from "./Table.module.scss";
import Button from './../../../common/button/Button.jsx';
import CellOperatingMode from './cell-operating-mode/CellOperatingMode.jsx';
import CellCommon from './cell-common/CellCommon.jsx';

// стилизацию кнопки
const styleButton = {
   padding: "10px 45px",
   fontSize: "13px",
   letterSpacing: "0.6px"
}

function Table(props) {
   return (
      <table className={s.table}>
         <thead>
            <tr>
               <th className={s.th1}>Адрес</th>
               <th className={s.th2}>Режим работы</th>
               <th className={s.th3}>Доступно</th>
               <th className={s.th4}>Количество</th>
               <th className={s.th5}></th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td className={s.td1}><CellCommon cellData={props.tableData.dataRow1.address} /></td>
               <td className={s.td2}><CellOperatingMode cellData={props.tableData.dataRow1.operatingMode} /></td>
               <td className={s.td3}><CellCommon cellData={props.tableData.dataRow1.availability} /></td>
               <td className={s.td4}><CellCommon cellData={props.tableData.dataRow1.quantity} /></td>
               <td className={s.td5}><Button style={styleButton} label={props.label} /></td>
            </tr>

            <tr>
               <td className={s.td6} ><CellCommon cellData={props.tableData.dataRow2.address} /></td>
               <td className={s.td7} ><CellOperatingMode cellData={props.tableData.dataRow2.operatingMode} /></td>
               <td className={s.td8} ><CellCommon cellData={props.tableData.dataRow2.availability} /></td>
               <td className={s.td9} ><CellCommon cellData={props.tableData.dataRow2.quantity} /></td>
               <td className={s.td10} ><Button style={styleButton} label={props.label} /></td>
            </tr>

            <tr>
               <td className={s.td11} ><CellCommon cellData={props.tableData.dataRow3.address} /></td>
               <td className={s.td12} ><CellOperatingMode cellData={props.tableData.dataRow3.operatingMode} /></td>
               <td className={s.td13} ><CellCommon cellData={props.tableData.dataRow3.availability} /></td>
               <td className={s.td14} ><CellCommon cellData={props.tableData.dataRow3.quantity} /></td>
               <td className={s.td15} ><Button style={styleButton} label={props.label} /></td>
            </tr>

            <tr>
               <td className={s.td16} ><CellCommon cellData={props.tableData.dataRow4.address} /></td>
               <td className={s.td17} ><CellOperatingMode cellData={props.tableData.dataRow4.operatingMode} /></td>
               <td className={s.td18} ><CellCommon cellData={props.tableData.dataRow4.availability} /></td>
               <td className={s.td19} ><CellCommon cellData={props.tableData.dataRow4.quantity} /></td>
               <td className={s.td20} ><Button style={styleButton} label={props.label} /></td>
            </tr>
         </tbody>
      </table>
   );
}

export default Table;