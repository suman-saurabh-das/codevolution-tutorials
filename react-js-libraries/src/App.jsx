import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// pages
import Router from "./pages/Router";
import ReactIcons from "./pages/react-icons";
import ReactToastify from "./pages/react-toastify";
import ReactModal from "./pages/react-modal";
import ReactTooltip from "./pages/react-tooltip";
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
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
