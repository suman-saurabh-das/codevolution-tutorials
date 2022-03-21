import React, { useState } from "react";
import { MemoisedChild4 } from "./09_Child4";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Incorrect memoization with children props & react memo

- In react, props.children is always a new reference which will always cause the child component to render. (Children component should not be a simple text node)

- There is no need to wrap your child components with React.memo if the child component itself has children elements.

- The incorrect memo will simply add to our component render time as new references to children props will always cause the memoized child component to re-render.
`;

function Parent4() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Suman");
  console.log("Parent 4 rendered");

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <button onClick={() => setCount((c) => c + 1)}>Count : {count}</button>&emsp;
      <button onClick={() => setName("Saurabh")}>Name : {name}</button>
      <br /><br />
      <MemoisedChild4 name={name}>
        {/* Hello */}
        <strong>Hello</strong>
      </MemoisedChild4>
    </div>
  );
}

export default Parent4;
