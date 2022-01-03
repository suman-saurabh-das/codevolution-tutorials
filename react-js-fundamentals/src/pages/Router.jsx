import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <details open>
        <summary className="text-lg">Section 01</summary>
        <ul>
          <li><Link to={"/introduction"}>Introduction to React.js</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
