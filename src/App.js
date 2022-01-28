import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  NavLink,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import Results from "./Components/Results/Results";

let loggedin = false;
if (loggedin === true) {
}

const navigate = Navigate();

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Login />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
