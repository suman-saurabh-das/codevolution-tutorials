import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Render Props pattern

- In react it is possible to pass a function as a prop which can be used to control what is rendered in the UI.
- Render props: The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.
`;

class User extends Component {
  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>{this.props.name(true)}</h3>
        <hr />
      </div>
    );
  }
}

export default User;
