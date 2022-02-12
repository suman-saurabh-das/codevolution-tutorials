import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Router from "./pages/Router";

// components (section_01)
import Introduction from "./components/section_01/01_Introduction";
import ClassCounter1 from "./components/section_01/02_ClassCounter1";
import HookCounter1 from "./components/section_01/02_HookCounter1";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>
          <Link to={"/"}>React.JS Hooks</Link>
        </h1>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Router />} />
            {/* Section 01 */}
            <>
              <Route path="/introduction" element={<Introduction />} />
              <Route
                path="useState-hook"
                element={
                  <div>
                    <ClassCounter1 />
                    <hr />
                    <HookCounter1 />
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
