import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import Main from "./assets/components/main/Main.jsx";
import Catalog from "./assets/components/catalog/Catalog.jsx";
import ProductCard from "./assets/components/product-card/ProductCard.jsx";
import Footer from "./assets/components/footer/Footer.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Switch>
        <Route path="/catalog/:id">
          <Catalog />
        </Route>
        <Route path="/product-card"> */}
          <ProductCard />
        {/* </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
