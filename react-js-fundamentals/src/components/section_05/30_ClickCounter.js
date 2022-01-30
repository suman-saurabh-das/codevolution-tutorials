import React, { Component } from "react";
import withCounter from "./30_withCounter";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Steps to use an HOC to enhance a component
  
- Step 1: \`import HOC function\` from HOC component \`inside the component to be enhanced\`.
- Step 2: \`while exporting the component to be enhanced (ClickCounter.js), pass the original component (ClickCounter.js) as a parameter to the HOC function\`.
- Step 3: Now we will be able to \`use the data or function which is added from the HOC.\`
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

    const { count, incrementCount } = this.props;
    // return <button onClick={incrementCount}>Clicked {count} times</button>;
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

// export default ClickCounter;
export default withCounter(ClickCounter);
