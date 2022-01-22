import React from "react";
// import { Component } from "react";
import { PureComponent } from "react";
import PureComp from "./23_PureComponent";
import RegularComp from "./23_RegularComponent";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Pure component

- A pure component implements shouldComponentUpdate with a shallow prop and state comparison.
- Shallow comparison of prevState/prevProps with currentState/currentProps,  
  is different (true) ⇾ Re-render component.

#### Shallow Comparison (SC)

- Primitive Types
  - \`a\` (SC) \`b\` returns true if \`a\` and \`b\` have the same value and are of the same type.
  - e.g. string 'Saurabh' (SC) string 'Saurabh' returns true.

- Complex Types
  - \`a\` (SC) \`b\` returns true if \`a\` and \`b\` reference the exact same object.

- NOTE: If the parent component does not re-render, its child components will also not re-render.
`;

// class PureParentComponent extends Component {
class PureParentComponent extends PureComponent {
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
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} />
      </div>
    );
  }
}

export default PureParentComponent;
