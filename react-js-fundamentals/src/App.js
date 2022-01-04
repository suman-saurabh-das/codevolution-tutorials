import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// pages
import Router from "./pages/Router";
// components (section 01)
import Introduction from "./components/section_01/01_Introduction";
// import Greet from "./components/section_01/Greet";  // default import
import { Greet } from "./components/section_01/02_Greet"; // named import
import Welcome from "./components/section_01/03_Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>
          <Link to={"/"}>React.JS Fundamentals</Link>
        </h1>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Router />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/functional-component" element={<Greet />} />
            <Route path="/class-component" element={<Welcome />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
