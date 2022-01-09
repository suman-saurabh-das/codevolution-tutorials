import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Destructuring

- In case of class components, we tend to destructure props in the render method.
- We can also destructure only the required values from the props. (all values are not required).
`;

class WelcomePropsDestructuring extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <h4>Hi {name} a.k.a {heroName}</h4>
      </div>
    );
  }
}

export default WelcomePropsDestructuring;
