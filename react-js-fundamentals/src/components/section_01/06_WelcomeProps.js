import React, { Component } from "react";

export const CLASS_PROPS_NOTES = `
## Props in class components
- In case of class components, we do not need to pass the props as an argument to the class.
- It is readily available using the this keyword and we can access them as this.props.
`;

class WelcomeProps extends Component {
  render() {
    return (
      <div>
        <h4>Hi {this.props.name} a.k.a {this.props.heroName}</h4>
        {this.props.children}
      </div>
    );
  }
}

export default WelcomeProps;
