import React, { useContext } from "react";
import GrandChildComponent from "./03_GrandChildComponent";
import { UserContext, WorkContext } from "../14_DataPassingUsingContext";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useContext: Consuming data using useContext hook

- While using useContext() hook, the process of creating the context and passing the data from the parent component to the child component remains same. The useContext() hook only makes the consumption of data simpler.

#### Steps to implement useContext() hook -
- import useContext() from React.
- import the necessary context.
- Call the useContext() function passing in the context as its argument.
- useContext() returns the context value which can be stored and accessed via a variable.
`;

function ChildComponent() {
  const user = useContext(UserContext);
  const work = useContext(WorkContext);
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <GrandChildComponent />
      <h4>
        Username: {user} | Nature of Work: {work}
      </h4>
    </div>
  );
}

export default ChildComponent;
