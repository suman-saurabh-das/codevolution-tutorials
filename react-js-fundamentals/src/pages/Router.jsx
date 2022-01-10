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
          <li><Link to={"/function-props"}>Passing props to functional component</Link></li>
          <li><Link to={"/class-props"}>Passing props to class component</Link></li>
        </ul>
      </details>

      <details open>
        <summary className="font-bold text-lg">Section 02</summary>
        <ul>
          <li><Link to={"/class-state"}>Creating state in class component</Link></li>
          <li><Link to={"/class-set-state"}>Updating state using setState() method</Link></li>
          <li><Link to={"/function-destructuring"}>Destructuring in component</Link></li>
          <li><Link to={"/class-destructuring"}>Destructuring in class component</Link></li>
          <li><Link to={"/function-event-handling"}>Event handling in functional component</Link></li>
          <li><Link to={"/class-event-handling"}>Event handling in class component</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
