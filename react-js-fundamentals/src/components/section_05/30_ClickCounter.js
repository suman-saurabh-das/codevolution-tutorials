import React, { Component } from "react";
import withCounter from "./30_withCounter";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Steps to use an HOC to enhance a component
  
- Step 1: \`import HOC function\` from HOC component \`inside the component to be enhanced\`.
- Step 2: \`while exporting the component to be enhanced (ClickCounter.js), pass the original component (ClickCounter.js) as a parameter to the HOC function\`.
- Step 3: Now we will be able to \`use the data or function which is added from the HOC.\`

## Why Higher order components ? 

- To share common functionality between components.  

- Higher Order Components (HOC)
  - A pattern where a function takes a component as an argument and returns a new component.
  - A HOC adds additional data or functionality to components without code repetition.

    \`const NewComponent = higherOrderComponent(OriginalComponent)\`  
    \`const EnhancedComponent = higherOrderComponent(OriginalComponent)\`  
    e.g. \`const IronMan = withSuit(TonyStark)\`
`;

class ClickCounter extends Component {
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
    // return <button onClick={this.incrementCount}>Clicked {count} times</button>;

    // const { count, incrementCount } = this.props;
    // return <button onClick={incrementCount}>Clicked {count} times</button>;

    const { count, incrementCount, name } = this.props;

    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <button onClick={incrementCount}>
          {name} Clicked {count} times
        </button>
      </div>
    );
  }
}

// export default ClickCounter;
export default withCounter(ClickCounter, 10);
