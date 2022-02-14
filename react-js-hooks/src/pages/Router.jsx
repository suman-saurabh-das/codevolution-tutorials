import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <details open>
        <summary className="font-bold text-lg">Section 01</summary>
        <ul>
          <li><Link to={"/introduction"}>Introduction to react hooks</Link></li>
          <li><Link to={"/useState"}>useState hook</Link></li>
          <li><Link to={"/useState-with-prev-state"}>useState hook (with previous state)</Link></li>
          <li><Link to={"/useState-with-objects"}>useState hook (with previous state)</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
