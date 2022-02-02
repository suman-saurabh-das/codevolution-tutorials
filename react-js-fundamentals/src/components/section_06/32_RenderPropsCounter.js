import React, { Component } from "react";

class RenderPropsCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <>
        {/* {this.props.render(this.state.count, this.incrementCount)} */}
        {this.props.children(this.state.count, this.incrementCount)}
      </>
    );
  }
}

export default RenderPropsCounter;

/*
  In the RenderPropsCounter component, we have a count state and incrementCount method.
  However, it does not render anything on its own, it is simply going to render whatever is passed as the render prop and while doing so, it passes the count and incrementCount method.

  In App.js render prop contains a function, which when called, returns the component ClickCounter2.js and HoverCounter2.js along with the count and incrementCount method passed as props to the components.
  NOTE: ClickCounter2.js and HoverCounter2.js will have their own separate instances and does not have any conflict.
  NOTE: The prop need not be called render, it can be called anything. We can even use the children prop here.
*/
