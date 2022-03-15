import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Rendering behavior with useState hook

- The setter function from a useState hook will cause the component to re-render.

- However the exception is when you update the state to the same value as the current state.
  - Same value after the initial render (when component is mounted first time in DOM) ?  
    The component will not re-render.

  - Same value after re-renders (when component is updated at least once) ?    
    React will render that specific component one more time and then bails out from any subsequent renders.

- Comparison between previous and new state is made using the Object.is algorithm.
`;

function UseState() {
  const [count, setCount] = useState(0);
  console.log("UseState rendered");

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count++
      </button>&emsp;
      <button onClick={() => setCount(0)}>Set count to 0</button>&emsp;
      <button onClick={() => setCount(5)}>Set count to 5</button>&emsp;
    </div>
  );
}

export default UseState;
