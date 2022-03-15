import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Router from "./pages/Router";

// components (section_01)
import Introduction from "./components/section_01/01_Introduction";
import UseState from "./components/section_01/02_UseState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>
          <Link to={"/"}>React.JS Render</Link>
        </h1>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Router />} />
            {/* Section 01 */}
            <>
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/useState-rendering" element={<UseState />} />
            </>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
