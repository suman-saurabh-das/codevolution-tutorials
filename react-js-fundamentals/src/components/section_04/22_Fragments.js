import React from "react";
import Table from "./22_Table";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Fragments
  
- JSX expressions must have a single parent element, i.e. we can return only a single element from a functional or class component. If we want to group together multiple components, we can do so via a react fragment, without affecting DOM.

- Fragments allow us to group a list of children elements without adding extra nodes to the DOM.
`;

function Fragments() {
  return (
    <React.Fragment>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h4>React Fragment</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
        architecto illo eveniet modi repudiandae ipsam praesentium nisi? Vitae
        laboriosam nesciunt aperiam quisquam omnis assumenda reiciendis
        excepturi enim! Quis, similique quisquam.
      </p>
      <hr />
      <Table />
    </React.Fragment>
  );
}

export default Fragments;
