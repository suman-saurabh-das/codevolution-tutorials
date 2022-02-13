import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useState hook (with previous state)

- Whenever we want to change the value based on previous value, always pass a function in the setState method, which will have access to the previous state value and change the new value based on the previous value.
`;

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
      // Here we are passing a function to the setCount() method that has access to the old value and we are incrementing that by 1
    }
  };
  const decrementBy5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Function Count : {count}</h3>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={decrementBy5}>Count-5</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Count--
        </button>
        <button onClick={() => setCount(initialCount)}>Reset Count</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Count++
        </button>
        <button onClick={incrementBy5}>Count+5</button>
      </div>
    </div>
  );
}

export default HookCounter2;
