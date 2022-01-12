import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## setState()

- Directly trying to change the state without using setState method.  
  In this case, although the count will increase, but it will not be rendered in the UI.  
  (here we will see in console count will increase but not in UI).
- The only place where we can assign a value to this.state is the constructor.
- Any other time the setState method has to be used.

#### Note

- Calls to setState() method are asynchronous.
- If we want our code to be executed only after the state is updated, we will have to pass a second parameter as a callback function to setState() method.
- React may group multiple setState calls into a single update call for better performance.
`;

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    // this.state.count = this.state.count + 1
    // console.log(this.state.count);

    /*
      Using the set state method.
    */
    // this.setState({
    //     count: this.state.count + 1
    // })
    // console.log(this.state.count);  // is being called before the state is being updated

    /*
      Calls to setState() method are asynchronous i.e. why the value of count logged in console is one less than the value displayed in UI.
        1. If we want our code to be executed only after the state is updated,
          we will have to pass a second parameter as a callback function to setState() method.
        2. setState() method accepts 2 parameters -
          a. 1st: state object
          b. 2nd: callback function
    */
    // this.setState({
    //     count: this.state.count + 1 // state object which sets state value
    // }, () => {
    //     console.log("Callback value : " + this.state.count);
    //     // callback function which logs the updated state value
    // })
    // console.log(this.state.count);

    /*
      React may group multiple setState calls into a single update call for better performance.
        1. So all 5 setState calls are done in one single go and updated value does not carry over the different calls. i.e. instead of the expected value of count -> 1, 2, 3, 4, 5, instead we get 1 printed 5 times in UI.
        2. To avoid this (i.e. to update the state based on previous state), we need to pass a function as an argument to setState() method instead of passing in an object.
        3. 2nd parameter along with prevState will be the props object, which can be used when the function needs data from props.

        Difference between () => () and () => {}
          https://dev.to/muhdmirzamz/what-s-the-difference-between-and-589
    */
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
      // count: prevState.count + props.addValue
    }));
  }

  incrementCountFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>Count - {this.state.count}</h3>
        <button onClick={() => this.incrementCount()}>Increment by 1</button>
        &emsp;
        <button onClick={() => this.incrementCountFive()}>
          Increment By 5
        </button>
      </div>
    );
  }
}

export default Counter;
