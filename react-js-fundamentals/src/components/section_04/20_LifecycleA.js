import React, { Component } from "react";
import LifecycleB from "./20_LifecycleB";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Order of execution of methods during Mounting phase -
  
- When no child components are present  
  ⇾ constructor() ⇾ getDerivedStateFromProps() ⇾ render() ⇾ componentDidMount()

- When child components are present  
  ⇾ constructor() of parent ⇾ getDerivedStateFromProps() of parent ⇾ render() of parent ⇾ constructor() of child ⇾ getDerivedStateFromProps() of child ⇾ render() of child  ⇾ componentDidMount() of child ⇾ componentDidMount() of parent
`;

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parent",
    };
    console.log("LifecycleA -> constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA -> getDerivedStateFromProps()");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA -> componentDidMount()");
  }

  render() {
    console.log("LifecycleA -> render()");
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>Lifecycle A</h3>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
