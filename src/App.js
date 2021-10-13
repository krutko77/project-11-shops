import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import Filter from "./assets/components/content/filter/Filter";
import Navigation from "./assets/components/content/navigation/Navigation";

import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Sorter from "./assets/components/content/sorter/Sorter";

const data = {
  heading: "Гидроциклы",
};

function App(props) {
  return (
    <div className="container">
      <Header />
      <Navigation />

      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link underline="hover" color="#C4C4C4" href="/">
          Главная
        </Link>
        <Typography color="#C4C4C4">Гидроциклы</Typography>
      </Breadcrumbs>

      <h1 className="heading">{data.heading}</h1>

      <Sorter />

      <Filter />
    </div>
  );
}

export default App;
