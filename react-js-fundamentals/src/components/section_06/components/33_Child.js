import React, { Component } from "react";
import GrandChild from "./33_GrandChild";

class Child extends Component {
  render() {
    return <GrandChild />;
  }
}

export default Child;
