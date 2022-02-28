import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import MainPage from "./assets/components/main-page/MainPage.jsx";
import Catalog from "./assets/components/catalog/Catalog.jsx";
import ProductPage from "./assets/components/product-page/ProductPage.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/catalog/:id">
        <Catalog />
        </Route>
        <Route path="/product-card">
          <ProductPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
