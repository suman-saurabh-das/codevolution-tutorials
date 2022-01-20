import React, { Component } from "react";
import LifecycleD from "./21_LifecycleD";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Order of execution of methods during Updating (Re-rendering) phase -
  
- When no child components are present  
  ⇾ getDerivedStateFromProps() ⇾ shouldComponentUpdate() ⇾ render() ⇾ getSnapshotBeforeUpdate() ⇾ componentDidUpdate()

- When child components are present  
  ⇾ getDerivedStateFromProps() of parent ⇾ shouldComponentUpdate() of parent ⇾ render() of parent  
  ⇾ getDerivedStateFromProps() of child ⇾ shouldComponentUpdate() of child ⇾ render() of child  
  ⇾ getSnapshotBeforeUpdate() of child ⇾ getSnapshotBeforeUpdate() of parent  
  ⇾ componentDidUpdate() of child ⇾ componentDidUpdate() of parent
`;

class LifecycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parent",
    };
    console.log("LifecycleC -> constructor()");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleC -> getDerivedStateFromProps()");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleC -> componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleC -> shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleC -> getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleC -> componentDidUpdate()");
  }

  handleClick = () => {
    this.setState({ name: "parent component" });
  };

  render() {
    console.log("LifecycleC -> render()");
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>Lifecycle C</h3>
        <LifecycleD />
        <button onClick={this.handleClick}>Update State</button>
      </div>
    );
  }
}

export default LifecycleC;
