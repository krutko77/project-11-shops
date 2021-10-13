import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/main/Main.jsx";
import Catalog from "./assets/components/catalog/Catalog.jsx";
import ProductCard from "./assets/components/main/section-product/product-card/ProductCard.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Catalog />
      <ProductCard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
