import { Link } from "react-router-dom";

function Router() {
  return (
    <div>
      <details open>
        <summary className="font-bold text-lg">Section 01</summary>
        <ul>
          <li><Link to={"/introduction"}>Introduction</Link></li>
          <li><Link to={"/useState-rendering"}>useState rendering behavior</Link></li>
          <li><Link to={"/useReducer-rendering"}>useReducer rendering behavior</Link></li>
          <li><Link to={"/useState-immutability"}>useState immutability</Link></li>
          <li><Link to={"/parent-child-rendering"}>Parent and child rendering</Link></li>
          <li><Link to={"/optimization-same-element-reference"}>Optimization using same element reference</Link></li>
          <li><Link to={"/optimization-react-memo"}>Optimization using react memo</Link></li>
        </ul>
      </details>

      <details open>
        <summary className="font-bold text-lg">Section 02</summary>
        <ul>
          <li><Link to={"/optimization-questions"}>Questions on optimization</Link></li>
          <li><Link to={"/incorrect-optimization-children-props-and-memo"}>Incorrect optimization with children props & memo</Link></li>
          <li><Link to={"/incorrect-optimization-with-impure-component-and-memo"}>Incorrect optimization with impure component & memo</Link></li>
          <li><Link to={"/incorrect-optimization-with-prop-reference-and-memo"}>Incorrect optimization with prop reference & memo</Link></li>
          <li><Link to={"/optimization-with-useMemo-and-useCallback"}>Optimization using useMemo & useCallback</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
