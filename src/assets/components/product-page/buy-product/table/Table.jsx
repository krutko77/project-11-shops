import s from "./Table.module.scss";
import Button from './../../../common/button/Button.jsx';
import CellOperatingMode from './cell-operating-mode/CellOperatingMode.jsx';
import CellCommon from './cell-common/CellCommon.jsx';



function Table(props) {
   return (   
      <table className={s.table}>
         <tr><th className={s.th1}>Адрес</th><th className={s.th2}>Режим работы</th><th className={s.th3}>Доступно</th><th className={s.th4}>Количество</th></tr>
         <tr><td><CellCommon /></td><td><CellOperatingMode /></td><td><CellCommon /></td><td><CellCommon /></td><td><Button /></td></tr>
         <tr><td><CellCommon /></td><td><CellOperatingMode /></td><td><CellCommon /></td><td><CellCommon /></td><td><Button /></td></tr>
         <tr><td><CellCommon /></td><td><CellOperatingMode /></td><td><CellCommon /></td><td><CellCommon /></td><td><Button /></td></tr>
         <tr><td><CellCommon /></td><td><CellOperatingMode /></td><td><CellCommon /></td><td><CellCommon /></td><td><Button /></td></tr>
         
      </table>
   );
}

export default Table;