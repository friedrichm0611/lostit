import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Main from "./Components/Main/Main";
import Results from "./Components/Results/Results";

localStorage.clear();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
