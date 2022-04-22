import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Router from "./pages/Router";
import ReactIcons from "./pages/react-icons";
import ReactToastify from "./pages/react-toastify";
import ReactModal from "./pages/react-modal";
import ReactTooltip from "./pages/react-tooltip";
import ReactCountup from "./pages/react-countup";
import ReactIdleTimer from "./pages/react-idle-timer";
import ReactColor from "./pages/react-color";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>
          <Link to={"/"}>React.js Libraries</Link>
        </h1>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Router />} />
            <Route path="/react-icons" element={<ReactIcons />} />
            <Route path="/react-toastify" element={<ReactToastify />} />
            <Route path="/react-modal" element={<ReactModal />} />
            <Route path="/react-tooltip" element={<ReactTooltip />} />
            <Route path="/react-countup" element={<ReactCountup />} />
            <Route path="/react-idle-timer" element={<ReactIdleTimer />} />
            <Route path="/react-idle-timer" element={<ReactIdleTimer />} />
            <Route path="/react-color" element={<ReactColor />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
