import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Router from "./pages/Router";

// components (section_01)
import Introduction from "./components/section_01/01_Introduction";
import UseState from "./components/section_01/02_UseState";
import UseReducer from "./components/section_01/03_UseReducer";
import ArrayUseState from "./components/section_01/04_ArrayUseState";
import ObjectUseState from "./components/section_01/04_ObjectUseState";

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
              <Route path="/useReducer-rendering" element={<UseReducer />} />
              <Route 
                path="/useState-immutability"
                element={
                  <div>
                    <ArrayUseState />
                    <hr />
                    <ObjectUseState />
                  </div>
                }
              />
            </>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
