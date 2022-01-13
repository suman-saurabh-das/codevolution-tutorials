import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Conditional rendering

- Using if-else statement to render different components.
- Using element variables.
- Ternary conditional operator.
- Short Circuit operator.
`;

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    /* Method 1: if-else statement to render different components.
        NOTE: We cannot use if else condition inside the JSX. */
    // if (this.state.isLoggedIn) {
    //   return <h2>Welcome Saurabh</h2>;
    // } else {
    //   return <h2>Welcome Guest</h2>;
    // }

    /* Method 2: Using element variables.
        In this approach we use JS variables to store elements.
        This approach helps us in rendering the entire component or a part of the component. */
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <h2>Welcome Saurabh</h2>;
    // } else {
    //   message = <h2>Welcome Guest</h2>;
    // }
    // return <div>{message}</div>;

    /* Method 3 - Ternary conditional operator.
        This approach is simpler and we can use it inside the JSX. */
    // return this.state.isLoggedIn ? (
    //   <h2>Welcome Saurabh</h2>
    // ) : (
    //   <h2>Welcome Guest</h2>
    // );

    /* Method 4 - Short Circuit operator.
        Specific case of ternary operator method, when we want to display a component or render nothing. */
    return (
      this.state.isLoggedIn && (
        <div>
          <ReactMarkdown>{NOTES}</ReactMarkdown>
          <hr />
          <h2>Welcome Saurabh</h2>
        </div>
      )
    );
  }
}

export default UserGreeting;
