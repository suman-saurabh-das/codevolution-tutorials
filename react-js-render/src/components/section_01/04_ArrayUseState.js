import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useState immutability (array)

- Mutating an object or an array state directly will not cause a re-render when used with the useState or useReducer hook.

- To re-render, make a copy of the existing state, modify as necessary and then pass the new state to the setter function or while returning from a reducer function.

- Directly mutating the state is an easy way to create bugs in your application and make sure that you don't do that.
`;

const initialState = ["Tony Stark", "Peter Parker"];

function ArrayUseState() {
  const [persons, setPersons] = useState(initialState);

  const handleAddPerson = () => {
    // persons.push('Steve Rogers')
    // persons.push('Natasha Romanoff')
    // setPersons(persons)

    const newPersons = [...persons];
    newPersons.push("Steve Rogers");
    newPersons.push("Natasha Romanoff");
    setPersons(newPersons);
  };
  console.log("ArrayUseState rendered");

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <button onClick={handleAddPerson}>Add persons</button>
      {persons.map((person, i) => (
        <h4 key={i}>{person}</h4>
      ))}
    </div>
  );
}

export default ArrayUseState;
