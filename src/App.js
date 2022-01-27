import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Lost in Translation App</h1>
        <h4>
          <span className="material-icons">language</span>
        </h4>
      </div>
      <Routes>
        <Route path="/" exact component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
