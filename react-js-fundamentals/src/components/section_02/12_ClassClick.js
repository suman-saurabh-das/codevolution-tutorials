import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Event handling

- Creating a click handler event in class component is similar to the functional component.
- But we will have to access the event handler function using the this keyword.
- When we define a function inside the class, we do not use the function keyword.
`;

class ClassClick extends Component {
  clickHandler() {
    alert("Button clicked from class component");
  }
  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
