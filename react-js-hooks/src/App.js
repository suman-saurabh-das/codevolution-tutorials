import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Router from "./pages/Router";

// components (section_01)
import Introduction from "./components/section_01/01_Introduction";
import ClassCounter1 from "./components/section_01/02_ClassCounter1";
import HookCounter1 from "./components/section_01/02_HookCounter1";
import ClassCounter2 from "./components/section_01/03_ClassCounter2";
import HookCounter2 from "./components/section_01/03_HookCounter2";
import HookCounter3 from "./components/section_01/04_HookCounter3";
import HookCounter4 from "./components/section_01/05_HookCounter4";

// components (section_02)
import UseEffectIntroduction from "./components/section_02/06_UseEffectIntroduction";
import ClassCounter3 from "./components/section_02/07_ClassCounter3";
import HookCounter5 from "./components/section_02/07_HookCounter5";
import ClassCounter4 from "./components/section_02/08_ClassCounter4";
import HookCounter6 from "./components/section_02/08_HookCounter6";
import ClassMouse from "./components/section_02/09_ClassMouse";
import HookMouse from "./components/section_02/09_HookMouse";
import MouseContainer from "./components/section_02/10_MouseContainer";

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
                path="useState"
                element={
                  <div>
                    <HookCounter1 />
                    <hr />
                    <ClassCounter1 />
                  </div>
                }
              />
              <Route
                path="useState-with-prev-state"
                element={
                  <div>
                    <HookCounter2 />
                    <hr />
                    <ClassCounter2 />
                  </div>
                }
              />
              <Route path="/useState-with-objects" element={<HookCounter3 />} />
              <Route path="/useState-with-arrays" element={<HookCounter4 />} />
            </>

            {/* Section 02 */}
            <>
              <Route
                path="/useEffect"
                element={
                  <div>
                    <UseEffectIntroduction />
                    <HookCounter5 />
                    <hr />
                    <ClassCounter3 />
                  </div>
                }
              />
              <Route
                path="/useEffect-run-conditionally"
                element={
                  <div>
                    <HookCounter6 />
                    <hr />
                    <ClassCounter4 />
                  </div>
                }
              />
              <Route
                path="/useEffect-run-once"
                element={
                  <div>
                    <HookMouse />
                    <hr />
                    <ClassMouse />
                  </div>
                }
              />
              <Route path="/useEffect-with-cleanup" element={<MouseContainer />} />
            </>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
