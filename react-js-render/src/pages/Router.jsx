import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <details open>
        <summary className="font-bold text-lg">Section 01</summary>
        <ul>
          <li><Link to={"/introduction"}>Introduction</Link></li>
          <li><Link to={"/useState-rendering"}>useState rendering behavior</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
