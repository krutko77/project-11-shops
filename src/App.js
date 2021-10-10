import "./App.css";
import Header from "./assets/components/header/Header.jsx";
import Filter from "./assets/components/content/filter/Filter";

function App(props) {
  return (
    <div className="container">
      <Header />

      <Filter />
    </div>
  );
}

export default App;
