import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## State

- We want to change the text from "welcome user" to "thank you for subscribing".
- If we use props, it will not work as props are immutable.
- State allows us to have a mutable value within the component.

#### Steps to use state

- Step 1 - 
  - Create a constructor().
  - Call super() method in constructor(). (calls reacts base class constructor)
  - Create a state object. (state is a reserved keyword in react)
  - Initialize a property in the state.
- Step 2 - Bind this state value in the render function.
- Step 3 - Listen to click event in button and change the message.
- Step 4 - Create an on-click event handler and change the value of message.

#### Props

- Props get passed to the component.
- Analogy: Function parameters.
- Props are immutable.
- We can access props as -
  - props in functional component.
  - this.props in class component.

#### State

- State is managed within the component.
- Analogy: Variables declared in the function body.
- State can be changed.
- We can access state as -
  - useState hook in functional component.
  - this.state in class component.
`;

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing !",
    });
  }

  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h4>{this.state.message}</h4>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
