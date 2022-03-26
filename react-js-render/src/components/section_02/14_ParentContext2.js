import React, { useState } from "react";
import { MemoizedChildA } from "./14_ChildContext2";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Optimization using memo

- When we click on the count button the state changes in the parent component which causes it to re-render. Because the parent component rendered, React has to re-render the child components. But child component is wrapped with React.memo, so it checks if the props have changed, since there are no props, react decides that ChildA component need not render. Since ChildA did not render, ChildB also does not render. But in ChildC, we consume the Count context value which has changed, so react proceeds to re-render ChildC.

- NOTE: If ChildC had children components, those components would get re-rendered because of default parent-child rendering behavior.

- By Wrapping the child component of the context provider with React.memo(), state updates in the parent component will not force every component to re-render, only the components where the context is consumed will re-render.
`;

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

function ParentContext2() {
  const [count, setCount] = useState(0);
  console.log("Parent component rendered");

  return (
    <CountProvider value={count}>
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>Parent Component</h3>
        <button onClick={() => setCount((c) => c + 1)}>
          Count++ : {count}
        </button>
        <MemoizedChildA />
      </div>
    </CountProvider>
  );
}

export default ParentContext2;
