import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// pages
import Router from "./pages/Router";
// components
import Introduction from "./components/section_01/Introduction";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <BrowserRouter>
          <h1>
            <Link to={"/"}>React.JS Fundamentals</Link>
          </h1>
          <Routes>
            <Route path="/" element={<Router />} />
            <Route path="/introduction" element={<Introduction />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
