import React, { useState } from "react";
// import Child2 from './06_Child2';
import ReactMarkdown from "react-markdown";

const NOTES = `
## Unnecessary Renders

- When a parent component renders, React will recursively render all of its child components.

- Rendering is not a bad thing as it is how React knows whether it needs to actually make any changes to the DOM.

- "Unnecessary renders" ⇾ where the child component goes through the render phase but not the commit phase.

- Causes for re-render

  - A component can re-render if it calls a setter function or a dispatch function.

  - A component can re-render if its parent component gets rendered.

#### Same Element Reference

- A Component can change its state but not props. Based on this, React will automatically provide the optimization.

- React looks at optimized Parent2 component (Child2 component passed as props), and sees that it has to convert the button and children prop to a react element.

- Now react sees that this re-render is caused by a state change in optimized Parent2 component.

- Since this component has no way of directly changing the props it is receiving, Children props couldn't have changed.

- Hence, it makes use of the React element that was previously created.

- As a result, Children props has to be referencing the same element from the previous render, and it will skip the render phase for the Child2 component.
`;

function Parent2({ children }) {
  const [count, setCount] = useState(0);
  console.log("Parent 2 rendered");

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Parent 2 component</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count : {count}
      </button>
      {children}
      {/* <Child2 /> */}
    </div>
  );
}

export default Parent2;
