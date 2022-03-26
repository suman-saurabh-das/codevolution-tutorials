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
import Parent1 from "./components/section_01/05_Parent1";
// import Parent2 from "./components/section_01/06_Parent2";
// import Child2 from "./components/section_01/06_Child2";
import GrandParent2 from "./components/section_01/06_GrandParent2";
import Parent3 from "./components/section_01/07_Parent3";

// components (section_02)
import OptimizationQuestions from "./components/section_02/08_Questions_on_optimization";
import Parent4 from "./components/section_02/09_Parent4";
import Parent5 from "./components/section_02/10_Parent5";
import Parent6 from "./components/section_02/11_Parent6";
import Parent7 from "./components/section_02/12_Parent7";
import ParentContext1 from "./components/section_02/13_ParentContext1";
import ParentContext2 from "./components/section_02/14_ParentContext2";

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
              <Route path="/parent-child-rendering" element={<Parent1 />} />
              <Route 
                path="/optimization-same-element-reference"
                element={
                  <div>
                    {/* When rendering Child2 inside Parent2, unnecessary re-render of Child2 occurs */}
                    {/* <Parent2 /> */}

                    {/* When we pass Child2 as children props to Parent2, react provides optimization as props are immutable and couldn't have changed so Child2 doesn't re-render */}
                    {/* <Parent2>
                      <Child2 />
                    </Parent2> */}

                    {/* Default rendering behavior, i.e. If parent re-renders, all child components will also re-render */}
                    <GrandParent2 />
                  </div>
                }
              />
              <Route path="/optimization-react-memo" element={<Parent3 />} />
            </>

            {/* Section 02 */}
            <>
              <Route path="/optimization-questions" element={<OptimizationQuestions />} />
              <Route
                path="/incorrect-optimization-children-props-and-memo"
                element={<Parent4 />}
              />
              <Route
                path="/incorrect-optimization-with-impure-component-and-memo"
                element={<Parent5 />}
              />
              <Route
                path="/incorrect-optimization-with-prop-reference-and-memo"
                element={<Parent6 />}
              />
              <Route
                path="/optimization-with-useMemo-and-useCallback"
                element={<Parent7 />}
              />
              <Route path="/useContext-rendering" element={<ParentContext1 />} />
              <Route path="/optimization-with-useMemo" element={<ParentContext2 />} />
            </>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
