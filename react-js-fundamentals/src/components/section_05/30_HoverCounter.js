import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export const HOC_NOTES = `
## Higher order components

- Here we are duplicating the code for the counter.
- But we need our code to be DRY (don't repeat yourself), for this we have 2 solutions

  - Solution 1: Lift the counter logic to Parent and pass it as props  
  i.e. counter logic will be written in the parent i.e. App.js and we will pass count variable as a prop this will work in our scenario, where both ClickCounter.js and HoverCounter.js are part of the same parent (App.js)

  - Solution 2: But if the counter components are scattered in the React component tree, lifting the state will not be a great solution. So there is need for sharing common functionality between components without repeating code.  
  So we will be using Higher order components.
`;
class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>;
  }
}

export default HoverCounter;
