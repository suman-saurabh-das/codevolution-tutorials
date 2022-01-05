import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <details open>
        <summary className="font-bold text-lg">Section 01</summary>
        <ul>
          <li><Link to={"/introduction"}>Introduction to React.js</Link></li>
          <li><Link to={"/functional-component"}>Functional component</Link></li>
          <li><Link to={"/class-component"}>Class component</Link></li>
          <li><Link to={"/jsx"}>JSX & createElement() method</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
