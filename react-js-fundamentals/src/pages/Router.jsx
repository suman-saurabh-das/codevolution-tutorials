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
          <li><Link to={"/class-event-binding"}>Binding event handler in class component</Link></li>
          <li><Link to={"/passing-methods-as-props"}>Passing method as props</Link></li>
        </ul>
      </details>

      <details open>
        <summary className="font-bold text-lg">Section 03</summary>
        <ul>
          <li><Link to={"/conditional-rendering"}>Conditional rendering</Link></li>
          <li><Link to={"/list-rendering"}>List rendering</Link></li>
          <li><Link to={"/styling"}>Styling & CSS basics</Link></li>
          <li><Link to={"/form-handling"}>Basics of form handling</Link></li>
        </ul>
      </details>

      <details open>
        <summary className="font-bold text-lg">Section 04</summary>
        <ul>
          <li><Link to={"/conditional-rendering"}>Conditional rendering</Link></li>
          <li><Link to={"/lifecycle-methods"}>Lifecycle methods</Link></li>
          <li><Link to={"/mounting-lifecycle-methods"}>Mounting lifecycle methods</Link></li>
          <li><Link to={"/updating-lifecycle-methods"}>Updating lifecycle methods</Link></li>
          <li><Link to={"/react-fragments"}>React fragments</Link></li>
          <li><Link to={"/pure-component"}>Pure components</Link></li>
          <li><Link to={"/memo-component"}>Memo components</Link></li>
        </ul>
      </details>

      <details open>
        <summary className="font-bold text-lg">Section 05</summary>
        <ul>
          <li><Link to={"/create-ref"}>Ref using createRef() method</Link></li>
          <li><Link to={"/callback-ref"}>Ref using callback ref method</Link></li>
          <li><Link to={"/adding-ref-to-component"}>Adding ref to class component</Link></li>
          <li><Link to={"/ref-forwarding"}>Forwarding ref to function component</Link></li>
        </ul>
      </details>
    </div>
  );
}

export default Router;
