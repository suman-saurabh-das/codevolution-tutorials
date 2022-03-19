import React, { useState } from "react";
import Parent2 from "./06_Parent2";
import Child2 from "./06_Child2";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Optimization using same element reference

- When we click on the Grand Parent Count button, all the components gets re-rendered this is because when the parent component re-renders, all its child components re-renders, also in this case, React knows that the Parent2 component is not rendering because of its own state change but rather because of the Grand Parent component re-rendering that means the props could have changed hence Child 2 component also re-renders.

#### Summary: Same element reference

- In react, when a parent component renders, React will recursively render all of its child components.

- "Unnecessary renders" - where the child component goes through the render phase but not the commit phase.

- We can extract the expensive child component and instead pass it down as props to the parent component.

- Whenever there is a re-render caused by a change in the state of the parent component, React will optimize the re-render for you by knowing that the props has to be referencing the same element before and after the render.
`;

function GrandParent2() {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Grand Parent 2 component</h3>
      <button onClick={() => setNewCount((c) => c + 1)}>New Count : {newCount}</button>
      <hr />
      <Parent2 newCount={newCount}>
        <Child2 />
      </Parent2>
    </div>
  );
}

export default GrandParent2;
