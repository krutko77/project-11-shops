import s from "./SmallTable.module.scss";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

// стилизация таблицы
const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.body}`]: {
      fontFamily: "SFProDisplayRegular",
      fontSize: 20,
      lineHeight: 1.2,
      color: "black",
      paddingTop: 17,
      paddingRight: 0,
      paddingBottom: 4,
      paddingLeft: 0,           
   },  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   // hide last border
   '& th': {
      paddingRight: 40
   },
}));


function createData(name, value) {
   return { name, value };
}

const rows = [
   createData('Производитель', 'Канада'),
   createData('Количество мест, шт:', 3),
   createData('Мощность, л.с.', 155),
   createData('Тип двигателя', 'Бензиновый'),
   createData('Год выпуска', 2018),
];

function SmallTable() {
   return (
      <Table sx={{ maxWidth: 440 }} aria-label="simple table">
         <TableBody>
            {rows.map((row) => (
               <StyledTableRow
                  key={row.name}
               >
                  <StyledTableCell component="th" scope="row" >
                     {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.value}</StyledTableCell>
               </StyledTableRow>
            ))}
         </TableBody>
      </Table>
   );
}

export default SmallTable;