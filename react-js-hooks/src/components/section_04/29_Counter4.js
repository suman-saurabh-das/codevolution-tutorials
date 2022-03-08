import React from "react";
import useCounter from "./hooks/useCounter";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Custom hook (useDocumentTitle)

- Here we are re-using the counter logic in both the components.
`;

function Counter4() {
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>&emsp;
      <button onClick={decrement}>Decrement</button>&emsp;
      <button onClick={reset}>Reset</button>&emsp;
    </div>
  );
}

export default Counter4;
