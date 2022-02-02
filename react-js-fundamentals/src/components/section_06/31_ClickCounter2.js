import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
- In the RenderPropsCounter component, we have a count state and incrementCount method.
- However, it does not render anything on its own, it is simply going to render whatever is passed as the render prop and while doing so, it passes the count and incrementCount method.

- In App.js render prop contains a function, which when called, returns the component ClickCounter2.js and HoverCounter2.js along with the count and incrementCount method passed as props to the components.
- NOTE: ClickCounter2.js and HoverCounter2.js will have their own separate instances and does not have any conflict.
- NOTE: The prop need not be called render, it can be called anything. We can even use the children prop here.
`;

class ClickCounter2 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 0 };
  // }
  // incrementCount = () => {
  //   this.setState((prevState) => ({ count: prevState.count + 1 }));
  // };

  render() {
    // const { count } = this.state;
    // return <button onClick={this.incrementCount}>Clicked {count} times</button>;

    const { count, incrementCount } = this.props;
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter2;
