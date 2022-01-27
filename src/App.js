import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Lost in Translation App</h1>
        <h4>
          <span class="material-icons">language</span>
        </h4>
      </div>
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
