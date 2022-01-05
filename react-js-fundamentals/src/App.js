import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// pages
import Router from "./pages/Router";
// components (section 01)
import Introduction from "./components/section_01/01_Introduction";
// import Greet from "./components/section_01/Greet";  // default import
import { Greet } from "./components/section_01/02_Greet"; // named import
import Welcome from "./components/section_01/03_Welcome";
import Hello from "./components/section_01/04_Hello";

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
            {/* SECTION 01 */}
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/functional-component" element={<Greet />} />
            <Route path="/class-component" element={<Welcome />} />
            <Route path="/jsx" element={<Hello />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
