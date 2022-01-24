import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Creating a ref using createRef() method - new approach

- Here we have an input field and we want it to be focused whenever the page loads/reloads.
- Using refs, we can do it in 3 steps -
  - Step 1 - create a ref.  
    In constructor, create a property \`this.inputRef\` and assign a value \`React.createRef()\` (method)
  - Step 2 - Attach this ref to the input element in the render method.  
    (to attach a ref, we make use of the reserve ref attribute)
  - Step 3 - Call the focus method on this input element.
`;

class RefDemo1 extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // In the console an object is logged, having a property called current of type input.
    // This current property points to the actual element in the DOM node, so to focus on the input element, we call the focus method on current property.
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        Using Ref &emsp;
        <input type="text" ref={this.inputRef} />
        &nbsp;
        <button onClick={this.clickHandler}>Alert !</button>
      </div>
    );
  }
}

export default RefDemo1;
