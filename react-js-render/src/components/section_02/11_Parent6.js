import React, { useState } from "react";
import { MemoisedChild6 } from "./11_Child6";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Incorrect optimization with prop reference & memo

- On Count button click, the parent as well as child component both renders even though the count is not passed to the memoized component.

- This is because of the person object that we have in the parent component. Every time the parent is rendered a new person object reference is created and then passed in as props to the child component. With the reference changed, React.memo() cannot optimize and the child also re-renders.

- The same thing happens with functions.
`;

function Parent6() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Suman");
  console.log("Parent 6 rendered");

  // const person = {
  //   fName: 'Tony',
  //   lName: 'Stark'
  // }

  const clickHandler = () => {};

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <button onClick={() => setCount((c) => c + 1)}>Count : {count}</button>&emsp;
      <button onClick={() => setName("Saurabh")}>Name : {name}</button>
      {/* <MemoisedChild6 name={name} person={person} /> */}
      <MemoisedChild6 name={name} clickHandler={clickHandler} />
    </div>
  );
}

export default Parent6;
