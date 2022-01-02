import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <BrowserRouter>
          <h1>
            <Link to={"/"}>React.JS Fundamentals</Link>
          </h1>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
