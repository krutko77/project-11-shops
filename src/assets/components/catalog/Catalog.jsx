import s from "./Catalog.module.scss";

import Filter from "../content/filter/Filter";
import Directory from "../content/directory/Directory";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Sorter from "./sorter/Sorter";
import UsePagination from './pagination/UsePagination.jsx';

const data = {
   heading: "Гидроциклы",
};



function Catalog() {
   return (
      <div>
         <div className={s.container}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
               <Link underline="hover" color="#C4C4C4" href="/">
                  Главная
               </Link>
               <Typography color="#C4C4C4">Гидроциклы</Typography>
            </Breadcrumbs>
            <h1 className={s.heading}>{data.heading}</h1>
            <Sorter />

            <div className={s.wrapper}>
               <Filter />
               <div className={s.inner}>
                  <Directory />
                  <UsePagination />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Catalog;
