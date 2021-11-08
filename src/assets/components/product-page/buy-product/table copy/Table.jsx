import s from "./Table.module.scss";
import Button from '../../../common/button/Button.jsx' 



function Table(props) {
   return (   
      <table>
         <tr><th>Адрес</th><th>Режим работы</th><th>Доступно</th><th>Количество</th></tr>
         <tr><th></th><th></th><th></th><th></th><th><Button /></th></tr>
      </table>
   );
}

export default Table;