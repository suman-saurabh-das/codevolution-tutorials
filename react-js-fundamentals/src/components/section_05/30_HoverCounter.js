import React, { Component } from "react";
import withCounter from "./30_withCounter";

export const HOC_NOTES = `
## Higher order components

- Here we are duplicating the code for the counter.
- But we need our code to be DRY (don't repeat yourself), for this we have 2 solutions

  - Solution 1: Lift the counter logic to Parent and pass it as props  
  i.e. counter logic will be written in the parent i.e. App.js and we will pass count variable as a prop this will work in our scenario, where both ClickCounter.js and HoverCounter.js are part of the same parent (App.js)

  - Solution 2: But if the counter components are scattered in the React component tree, lifting the state will not be a great solution. So there is need for sharing common functionality between components without repeating code.  
  So we will be using Higher order components.

  \`withCounter.js\` is a basic HOC component.
  - File naming convention is camelCase instead of PascalCase.
  - This HOC accepts the OriginalComponent and returns a NewComponent with the name prop.

  - Since, we need the counter functionality for both components, we will add the constructor and incrementCount method in the UpdateComponent and pass the state and incrementCount method as props so that original component can make use of the property

- Naming convention
  - UpdatedComponent is referred using the file name or function name that will be added.
  - OriginalComponent is referred as WrappedComponent. (component wrapped with the HOC)
  - NewComponent is same as file name or function name but in PascalCase.
`;

class HoverCounter extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: 0,
  //   };
  // }
  // incrementCount = () => {
  //   this.setState((prevState) => ({ count: prevState.count + 1 }));
  // };

  render() {
    // const { count } = this.state;
    // return <h4 onMouseOver={this.incrementCount}>Hovered {count} times</h4>;

    const { count, incrementCount } = this.props;
    return <h4 onMouseOver={incrementCount}>Hovered {count} times</h4>;
  }
}

// export default HoverCounter;
export default withCounter(HoverCounter);
