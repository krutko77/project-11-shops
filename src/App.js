import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import Filter from "./assets/components/content/filter/Filter";
import Navigation from "./assets/components/content/navigation/Navigation";








function App(props) {
  return (
    <div className="container">
      <Header />
      <Navigation/>
   
      
      <Filter />
    </div>
  );
}

export default App;
