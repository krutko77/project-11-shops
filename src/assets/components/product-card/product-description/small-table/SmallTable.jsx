import s from "./SmallTable.module.scss";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

// стилизация маленькой таблицы
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

const customColumnStyle = {
   width: "130px"
};

function SmallTable(props) {
   return (
      <div className={s.smallTable}>
         <Table sx={{ maxWidth: 440 }} aria-label="simple table">
            <TableBody>
               {props.rows.map((row) => (
                  <TableRow
                     key={row.name}
                  >
                     <StyledTableCell component="th" scope="row" >
                        {row.name}
                     </StyledTableCell>
                     <StyledTableCell align="left" style={customColumnStyle}>{row.value}</StyledTableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   );
}

export default SmallTable;