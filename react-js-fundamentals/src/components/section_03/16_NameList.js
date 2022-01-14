import React from "react";
import Person from "./16_Person";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Rendering a simple array of items.

- \`Syntax : arrayName.map(Function)\`  
  map method returns a new array with each element modified based on the function.  
  Here we will be using arrow function : \`(parameter) => return functionBody\`

- We can simplify the return statement by moving out the list rendering logic. e.g. nameList
  - Rendering an array of object with multiple properties.
  - For this the best practice is to create a component which is only responsible for displaying the data and sending the data as props from the parent component (separation of concerns).
`;

function NameList() {
  /* Rendering a list of names from an array */
  // const names = ['Adam', 'Charlie', 'Stacy']
  // const nameList = names.map(name => <h2>{name}</h2>)
  // return (
  //     <div>{nameList}</div>
  // )

  /* Rendering a list of persons from an array of objects */
  const persons = [
    { id: 1, name: "Adam", age: 30, skill: "React" },
    { id: 2, name: "Charlie", age: 25, skill: "Angular" },
    { id: 3, name: "Stacy", age: 28, skill: "Vue" },
  ];
  // const personList = persons.map((person) => (
  //   <h2>
  //     I am {person.name}. I am {person.age} years old. I know {person.skill}.
  //   </h2>
  // ));

  const personList = persons.map((person) => <Person person={person} />);
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      {personList}
    </div>
  );
}

export default NameList;
