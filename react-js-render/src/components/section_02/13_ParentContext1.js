import React, { useState } from "react";
import { ChildA } from "./13_ChildContext1";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useContext rendering behavior

- Ways to cause a re-render
  - Component calls useState setter function or useReducer dispatch function.
  - If parent component re-renders.
  - React context.

- In our app, we have 5 components App -> Parent -> ChildA -> ChildB -> ChildC

- Parent component has a count state which it renders in the JSX and same count value has to be rendered by ChildC as well.

- For this we create a new CountContext in parent component and provide the count value, and we use useContext() hook in ChildC to consume the value.

- After initial render, all components are rendered once.

- After we call setCount setter function to increment count value in parent component, the component is flagged for re-render. React sees that the parent component also  renders a context provider, it then checks whether the context provider is given a new value and since count is incremented, context provider also gets a updated count value hence, all components consuming the context value gets re-rendered.

- However we see that not only Parent and ChildC but ChildA and ChildB also gets re-rendered this is because if parent component gets re-rendered, then all the child components get re-rendered recursively.
`;

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

function ParentContext1() {
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
        <ChildA />
      </div>
    </CountProvider>
  );
}

export default ParentContext1;
