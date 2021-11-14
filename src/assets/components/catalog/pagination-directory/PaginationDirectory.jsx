import s from "./PaginationDirectory.module.scss";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function PaginationDirectory() {
   return (
      <div className={s.paginationWrap}>
         <Stack spacing={2}>
            <Pagination count={11} shape="rounded" size="large" hidePrevButton hideNextButton />
         </Stack>
      </div>
   );
}
export default PaginationDirectory;