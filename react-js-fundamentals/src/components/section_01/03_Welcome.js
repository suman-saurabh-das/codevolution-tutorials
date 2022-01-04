import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `

- ES6 classes which extends Component class, optionally receive properties and returns JSX.
- More feature rich.
- Maintain their own private data - state.
- Complex UI logic.
- Provide lifecycle hooks.
- Stateful/ Smart/ Container components.

#### Note

- Class components must extend the Component class.
- Class components must have a render method that returns null or some JSX.
`;

/* Class components must extend the Component class */
class Welcome extends Component {
  /* Class components must have a render method that returns null or some JSX */
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
      </div>
    );
  }
}

export default Welcome;
