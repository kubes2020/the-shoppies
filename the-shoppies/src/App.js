import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/movieReducer";
import MovieForm from "./components/MovieForm";

const store = createStore(movieReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/search">
          <MovieForm></MovieForm>
        </Route>
      </div>
    </Provider>
  );
}

export default App;
