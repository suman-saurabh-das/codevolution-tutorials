import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Conditionally performing an action using componentDidUpdate

- In the componentDidUpdate() method, we compare the previous props/state and current props/state for a specific state variable and then using if condition, we can render the component only if the particular state variable changes.
`;

class ClassCounter4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        &emsp;
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter4;
