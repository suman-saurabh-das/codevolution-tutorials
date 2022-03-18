import React, { useState } from "react";
import Child1 from "./05_Child1";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Parent Child and Render - use cases

- New State is different from the old state  
  
  - Here the Parent component gets rendered and as a result of which all of its Child component also gets rendered (default rendering behavior in react).
    
- New State is same as the old state
  
  - Right after the initial render  
    Here neither Parent nor Child component gets rendered. (Since old state is same as new state, react bails out of re-rendering in case of useState)
  
  - After re-renders  
    Here only the Parent component gets rendered.  
    (React re-renders the component 1 more time as a safety measure but Child component is not re-rendered)

  - In case: After re-renders  
    - Button click ⇾ Parent component re-renders ⇾ Child component re-renders
    - DOM represented by Child component is never updated.
    - Child component went through the render phase but not the commit phase i.e. "Unnecessary render". Unnecessary renders is not a bad thing but it affects the performance.

#### Summary

- When a parent component renders, React will recursively render all of its child components.
  - If new state same as old state after initial render ?  
    Both parent and child do not re-render.

  - If new state same as old state after re-renders ?  
    Parent re-renders one more time but child never re-renders.
`;

function Parent1() {
  const [count, setCount] = useState(0);
  console.log("Parent1 rendered");

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Count++</button>&emsp;
      <button onClick={() => setCount(0)}>Set count to 0</button>&emsp;
      <button onClick={() => setCount(5)}>Set count to 5</button>
      <Child1 />
    </div>
  );
}

export default Parent1;
