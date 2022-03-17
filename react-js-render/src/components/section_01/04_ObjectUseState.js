import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useState immutability (object)

- Mutating an object or an array state directly will not cause a re-render when used with the useState or useReducer hook.

- To re-render, make a copy of the existing state, modify as necessary and then pass the new state to the setter function or while returning from a reducer function.

- Directly mutating the state is an easy way to create bugs in your application and make sure that you don't do that.
`;

const initialState = {
  fName: "Steve",
  lName: "Rogers",
};

function ObjectUseState() {
  const [person, setPerson] = useState(initialState);

  const changeName = () => {
    // person.fName = 'Tony'
    // person.lName = 'Stark'
    // setPerson(person)

    const newPerson = { ...person };
    newPerson.fName = "Tony";
    newPerson.lName = "Stark";
    setPerson(newPerson);
  };
  console.log("ObjectUseState rendered");

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h4>{`${person.fName} ${person.lName}`}</h4>
      <button onClick={changeName}>Change name</button>
    </div>
  );
}

export default ObjectUseState;
