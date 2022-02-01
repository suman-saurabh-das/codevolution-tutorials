import React, { Component } from "react";

class HoverCounter2 extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { count } = this.state;
    return <h4 onMouseOver={this.incrementCount}>Hovered {count} times</h4>;
  }
}

export default HoverCounter2;
