import React, { Component } from "react";

class ClassCounter2 extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  incrementCountBy5 = () => {
    this.setState((prevState) => ({ count: prevState.count + 5 }));
    // Here we are passing a function to the setState() method that has access to the old value and we are incrementing that by 1
  };
  decrementCountBy5 = () => {
    this.setState((prevState) => ({ count: prevState.count - 5 }));
  };

  render() {
    return (
      <div>
        <h3>Class Count : {this.state.count}</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={this.decrementCountBy5}>Count-5</button>
          <button
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count - 1 }))
            }
          >
            Count--
          </button>
          <button onClick={() => this.setState({ count: 0 })}>
            Reset Count
          </button>
          <button
            onClick={() =>
              this.setState((prevState) => ({ count: prevState.count + 1 }))
            }
          >
            Count++
          </button>
          <button onClick={this.incrementCountBy5}>Count+5</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter2;
