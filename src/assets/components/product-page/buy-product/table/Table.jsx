import s from "./Table.module.scss";
import TableRow from './table-row/TableRow.jsx';

// названия классов для разных строк
const classData1 = {
   className: "tr1"
}

const classData2 = {
   className: "tr2"
}

const classData3 = {
   className: "tr3"
}

const classData4 = {
   className: "tr4"
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
            <TableRow classData={classData1} cellData={props.tableData.dataRow1} label={props.label} />
            <TableRow classData={classData2} cellData={props.tableData.dataRow2} label={props.label} />
            <TableRow classData={classData3} cellData={props.tableData.dataRow3} label={props.label} />
            <TableRow classData={classData4} cellData={props.tableData.dataRow4} label={props.label} />
         </tbody>
      </table>
   );
}

export default Table;