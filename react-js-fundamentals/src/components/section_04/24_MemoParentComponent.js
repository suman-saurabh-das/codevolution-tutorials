import React from "react";
import { Component } from "react";
import MemoComp from "./24_MemoComponent";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Memo component

- Memo component is similar to pure component but it is for functional components.
- To make a functional component a memo component, while exporting we need to use React.memo() method and pass component name as an argument -> React.memo(MemoComp)

- React.memo() is a higher order component. i.e. it accepts a component, adds some things to that component and returns an enhanced component.

- If the parent component does not re-render, its child components will also not re-render.
`;

class MemoParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saurabh",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Saurabh" });
    }, 2000);
  }

  render() {
    console.log("Parent component rendered");
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h4>Parent Component</h4>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default MemoParentComponent;
