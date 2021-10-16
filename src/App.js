import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/main/Main.jsx";
import Catalog from "./assets/components/catalog/Catalog.jsx";
import ProductCard from "./assets/components/product-card/ProductCard.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Main/>
      {/* <Catalog/> */}
      {/* <ProductCard/> */}
      <Footer/>   
   </BrowserRouter>    
  );
}

export default App;


// import Filter from "./assets/components/content/filter/Filter";
// import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Link from '@mui/material/Link';
// import Sorter from "./assets/components/content/sorter/Sorter";


// const data = {
//    heading: "Гидроциклы"
//  }
 

// <Navigation />
// <Breadcrumbs 
// separator="›"
// aria-label="breadcrumb">
// <Link underline="hover" color="#C4C4C4" href="/">
//   Главная
// </Link>
// <Typography
//   color="#C4C4C4">Гидроциклы</Typography>
// </Breadcrumbs>

// <h1 className="heading">{data.heading}</h1>

// <Sorter/>


// <Filter />