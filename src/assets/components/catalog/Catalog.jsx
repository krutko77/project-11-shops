import s from "./Catalog.module.scss";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import Sorter from "../content/sorter/Sorter";
import Filter from "../content/filter/Filter";
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
        <Filter />
        <Sorter />
      </div>
    </div>
  );
}

export default Catalog;
