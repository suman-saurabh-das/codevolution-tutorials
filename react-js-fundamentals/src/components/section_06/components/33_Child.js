import React, { Component } from "react";
import GrandChild from "./33_GrandChild";
import UserContext from "../33_UserContext";

class Child extends Component {
  // We can also replace the Child.contextType = UserContext by the following
  static contextType = UserContext;
  render() {
    return (
      <div>
        <h3>Child component - Name {this.context}</h3>
        <GrandChild />
      </div>
    );
  }
}

// Child.contextType = UserContext
export default Child;
