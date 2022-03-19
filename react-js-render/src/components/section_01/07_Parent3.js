import React, { useState } from "react";
// import Child3 from './07_Child3'
import { MemoizedChild3 } from "./07_Child3";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Optimization using React memo

- In React, when a parent component renders, a child component might un-necessarily render.

- To optimize this behavior, we can use React.memo and pass in the child component.

- React.memo will perform a shallow comparison of the previous and new props and re-render the child component only if the props have changed.

- NOTE: We can pass a custom comparison function as 2nd argument to replace the shallow comparison in React.memo()
`;

function Parent3() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Suman");
  console.log("Parent 3 rendered");

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Parent Component</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count : {count}</button>&emsp;
      <button onClick={() => setName("Saurabh")}>Name : {name}</button>
      {/* <Child3 name={name}/> */}
      <MemoizedChild3 name={name} />
    </div>
  );
}

export default Parent3;
