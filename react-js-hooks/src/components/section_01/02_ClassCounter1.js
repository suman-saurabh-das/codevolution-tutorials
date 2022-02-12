import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
#### Steps to create a counter in class component

- Create a class component.
- Create a state variable initialized to zero (count: 0).
- Create a method that is capable of setting the state value. (incrementCount())
`;

class ClassCounter1 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>Class Count : {this.state.count}</h3>
        <button onClick={this.incrementCount}>Count++</button>
      </div>
    );
  }
}

export default ClassCounter1;
