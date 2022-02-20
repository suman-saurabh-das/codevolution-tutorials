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
          <li><Link to={"/useState-with-arrays"}>useState hook (with arrays)</Link></li>
        </ul>
      </details>

      <details open>
        <summary className="font-bold text-lg">Section 02</summary>
        <ul>
          <li><Link to={"/useEffect"}>Introduction to useEffect hook</Link></li>
          <li><Link to={"/useEffect-run-conditionally"}>useEffect hook (run effects conditionally)</Link></li>
          <li><Link to={"/useEffect-run-once"}>useEffect hook (run effects once)</Link></li>
          <li><Link to={"/useEffect-with-cleanup"}>useEffect hook (with cleanup)</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
