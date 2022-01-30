import React, { Component } from "react";

// const UpdatedComponent = (OriginalComponent) => {
const withCounter = (WrappedComponent) => {
  // class NewComponent extends Component {
  class WithCounter extends Component {
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
      // return <OriginalComponent/>
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  // return NewComponent
  return WithCounter;
};

// export default UpdatedComponent
export default withCounter;

/*
  This is a basic HOC component.
  File naming convention is camelCase instead of PascalCase.
  This HOC accepts the OriginalComponent and returns a NewComponent with the name prop.

  Since, we need the counter functionality for both components, we will add the constructor and incrementCount method in the UpdateComponent and pass the state and incrementCount method as props so that original component can make use of the property
*/

/* 
  Naming convention - 
    UpdatedComponent is referred using the file name or function name that will be added.
    OriginalComponent is referred as WrappedComponent. (component wrapped with the HOC)
    NewComponent is same as file name or function name but in PascalCase.
*/
