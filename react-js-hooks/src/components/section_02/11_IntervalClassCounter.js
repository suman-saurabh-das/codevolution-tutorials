import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Steps to create an interval counter using class component

- We create a state variable count with initial value 0.
- Create an interval timer that will update the count value by 1 every 1 second.
- We created timer in componentDidMount() which runs every second and updates the tick method.
- The tick method is used to update the count value by 1 every second.
`;

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default IntervalClassCounter;
