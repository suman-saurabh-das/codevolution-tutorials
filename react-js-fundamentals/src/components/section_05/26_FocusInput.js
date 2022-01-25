import React, { Component } from "react";
import Input from "./26_Input";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Adding ref to a class component
	
- It is possible to add refs to a class components, but we cannot attach ref to a functional component.
- If we need a ref to a child component from a parent component, it is possible but it should be class component.
`;

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <Input ref={this.componentRef} />
        &emsp;
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
