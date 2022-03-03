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
          <li><Link to={"/useEffect-with-incorrect-dependencies"}>useEffect hook (with incorrect dependencies)</Link></li>
          <li><Link to={"/useEffect-fetching-data"}>useEffect hook (fetching data)</Link></li>
        </ul>
      </details>

      <details open>
        <summary className="font-bold text-lg">Section 03</summary>
        <ul>
          <li><Link to={"/useContext"}>Introduction to useContext hook</Link></li>
          <li><Link to={"/useContext-consuming-data"}>Consuming data using useContext</Link></li>
          <li><Link to={"/useReducer"}>Introduction to useReducer hook</Link></li>
          <li><Link to={"/useReducer-simple-state"}>useReducer with simple state & action</Link></li>
          <li><Link to={"/useReducer-complex-state"}>useReducer with complex state & action</Link></li>
          <li><Link to={"/useReducer-multiple-reducers"}>useReducer with multiple reducers</Link></li>
          <li><Link to={"/useReducer-with-useContext"}>useReducer with useContext hook</Link></li>
          <li><Link to={"/useReducer-data-fetching"}>fetching data with useReducer hook</Link></li>
          <li><Link to={"/useState-vs-useReducer"}>useState vs useReducer</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
