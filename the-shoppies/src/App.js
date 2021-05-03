import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/search">
        <Search></Search>
      </Route>
    </div>
  );
}

export default App;
