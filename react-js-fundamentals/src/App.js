import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./App.css";

// pages
import Router from "./pages/Router";

// components (section_01)
import Introduction from "./components/section_01/01_Introduction";
// import Greet from "./components/section_01/02_Greet";  // default import
import { Greet } from "./components/section_01/02_Greet"; // named import
import Welcome from "./components/section_01/03_Welcome";
import Hello from "./components/section_01/04_Hello";
import { FUNCTION_PROPS_NOTES } from "./components/section_01/05_GreetProps";
import GreetProps from "./components/section_01/05_GreetProps";
import { CLASS_PROPS_NOTES } from "./components/section_01/06_WelcomeProps";
import WelcomeProps from "./components/section_01/06_WelcomeProps";

// components (section_02)
import Message from "./components/section_02/07_Message";
import Counter from "./components/section_02/08_Counter";
import GreetPropsDestructuring from "./components/section_02/09_GreetPropsDestructuring";
import WelcomePropsDestructuring from "./components/section_02/10_WelcomePropsDestructuring";
import FunctionClick from "./components/section_02/11_FunctionClick";
import ClassClick from "./components/section_02/12_ClassClick";
import EventBind from "./components/section_02/13_EventBind";
import ParentComponent from "./components/section_02/14_ParentComponent";

// components (section_03)
import UserGreeting from "./components/section_03/15_UserGreeting";
import NameList from "./components/section_03/16_NameList";
import Stylesheet from "./components/section_03/17_Stylesheet";
import InlineStyles from "./components/section_03/17_InlineStyles";
import "./components/section_03/styles/17_appStyles.css";
import styles from "./components/section_03/styles/17_appStyles.module.css";
import Form from "./components/section_03/18_Form";

// components (section_04)
import LifecycleMethods from "./components/section_04/19_LifecycleMethods";
import LifecycleA from "./components/section_04/20_LifecycleA";
import LifecycleC from "./components/section_04/21_LifecycleC";
import Fragments from "./components/section_04/22_Fragments";
import PureParentComponent from "./components/section_04/23_PureParentComponent";
import MemoParentComponent from "./components/section_04/24_MemoParentComponent";

// components (section_05)
import RefDemo1 from "./components/section_05/25_RefDemo1";
import RefDemo2 from "./components/section_05/25_RefDemo2";
import FocusInput from "./components/section_05/26_FocusInput";
import ForwardRefParent from "./components/section_05/27_ForwardRefParent";
import PortalDemo from "./components/section_05/28_PortalDemo";
import { REACT_PORTAL_NOTES } from "./components/section_05/28_PortalDemo";
import Hero from "./components/section_05/29_Hero";
import ErrorBoundary from "./components/section_05/29_ErrorBoundary";
import { ERROR_BOUNDARY_NOTES } from "./components/section_05/29_ErrorBoundary";
import ClickCounter from "./components/section_05/30_ClickCounter";
import HoverCounter from "./components/section_05/30_HoverCounter";
import { HOC_NOTES } from "./components/section_05/30_HoverCounter";

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
            <>
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/functional-component" element={<Greet />} />
              <Route path="/class-component" element={<Welcome />} />
              <Route path="/jsx" element={<Hello />} />
              <Route
                path="/function-props"
                element={
                  <div>
                    <ReactMarkdown>{FUNCTION_PROPS_NOTES}</ReactMarkdown>
                    <hr />
                    <GreetProps name={"Bruce"} heroName={"Batman"}>
                      <p>
                        I believe what doesn't kill you simply makes you,
                        stronger.
                      </p>
                    </GreetProps>
                    <GreetProps name={"Clark"} heroName={"Superman"}>
                      <button>Laser Eyes !</button>
                    </GreetProps>
                    <GreetProps name={"Diana"} heroName={"Wonder woman"} />
                  </div>
                }
              />
              <Route
                path="/class-props"
                element={
                  <div>
                    <ReactMarkdown>{CLASS_PROPS_NOTES}</ReactMarkdown>
                    <hr />
                    <WelcomeProps name={"Tony"} heroName={"Iron man"} />
                    <WelcomeProps name={"Steve"} heroName={"Captain America"} />
                    <WelcomeProps name={"Peter"} heroName={"Spider man"} />
                  </div>
                }
              />
            </>

            {/* SECTION 02 */}
            <>
              <Route path="/class-state" element={<Message />} />
              <Route path="/class-set-state" element={<Counter />} />
              <Route
                path="/function-destructuring"
                element={
                  <GreetPropsDestructuring
                    name="Tony Stark"
                    heroName="Ironman"
                  />
                }
              />
              <Route
                path="/class-destructuring"
                element={
                  <WelcomePropsDestructuring
                    name="Steve Rogers"
                    heroName="Captain America"
                  />
                }
              />
              <Route
                path="/function-event-handling"
                element={<FunctionClick />}
              />
              <Route path="/class-event-handling" element={<ClassClick />} />
              <Route path="/class-event-binding" element={<EventBind />} />
              <Route
                path="/passing-methods-as-props"
                element={<ParentComponent />}
              />
            </>

            {/* SECTION 03 */}
            <>
              <Route path="/conditional-rendering" element={<UserGreeting />} />
              <Route path="/list-rendering" element={<NameList />} />
              <Route
                path="/styling"
                element={
                  <div>
                    <Stylesheet primary={true} />
                    <InlineStyles />
                    <h3 className="error">Error Message</h3>
                    <h3 className={styles.success}>Yay ! Success</h3>
                  </div>
                }
              />
              <Route path="/form-handling" element={<Form />} />
            </>

            {/* SECTION 04 */}
            <>
              <Route path="/lifecycle-methods" element={<LifecycleMethods />} />
              <Route path="/mounting-lifecycle-methods" element={<LifecycleA />} />
              <Route path="/updating-lifecycle-methods" element={<LifecycleC />} />
              <Route path="/react-fragments" element={<Fragments />} />
              <Route path="/pure-component" element={<PureParentComponent />} />
              <Route path="/memo-component" element={<MemoParentComponent />} />
            </>

            {/* SECTION 05 */}
            <>
              <Route path="/create-ref" element={<RefDemo1 />} />
              <Route path="/callback-ref" element={<RefDemo2 />} />
              <Route path="/adding-ref-to-component" element={<FocusInput />} />
              <Route path="/ref-forwarding" element={<ForwardRefParent />} />
              <Route
                path="/react-portal"
                element={
                  <div>
                    <ReactMarkdown>{REACT_PORTAL_NOTES}</ReactMarkdown>
                    <hr />
                    <PortalDemo />
                  </div>
                }
              />
              <Route
                path="/error-boundary"
                element={
                  <div>
                    <ReactMarkdown>{ERROR_BOUNDARY_NOTES}</ReactMarkdown>
                    <hr />
                    <ErrorBoundary>
                      <Hero heroName="Ironman" />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <Hero heroName="Thor" />
                    </ErrorBoundary>
                    <ErrorBoundary>
                      <Hero heroName="Thanos" />
                    </ErrorBoundary>
                  </div>
                }
              />
              <Route
                path="/higher-order-components"
                element={
                  <div>
                    <ReactMarkdown>{HOC_NOTES}</ReactMarkdown>
                    <hr />
                    <ClickCounter name={"Saurabh"} />
                    <HoverCounter name={"Saurabh"} />
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
