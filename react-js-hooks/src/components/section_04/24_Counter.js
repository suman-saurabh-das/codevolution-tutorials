import React, { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
- We have created the isEven function to check whether a number is odd or even and to induce slowness in this calculation, we have used while loop, (to mimic real world application slowness)
  
- Initially, we see that the on clicking increment1, there is a slowness but on clicking increment2 also there is a slowness, this is because every time the state updates, the component re-renders, and when the component re-renders, isEven is called again. Hence even though we update counter2, the UI update is slow.

- We need to tell react not to calculate certain values when unnecessary (long computation ones). i.e. we can tell not to re-calculate isEven when pressing counter2, using useMemo hook.

- useMemo is a hook that will only re-compute the cached value, when one of the dependencies has changed. This optimization helps to avoid expensive calculation in every render.

- It accepts 2 parameters
  - callback function: function whose return value needs to be cached. It returns a value.
  - dependency list: parameters which we need to check for.

- Now, after implementing useMemo hook, if we click on counter2, there is no delay as the cached value of isEven is being used during re-render as counter1 is not changing.

- Difference between useCallback and useMemo
  - useCallback: caches the provided function instance itself.
  - useMemo: invokes the provided function and caches its result.

- When you want to cache a function, useCallback.
- When you want to cache the result of an invoked function, useMemo.
`;
function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => {
    setCount1((prevCount) => prevCount + 1);
  };
  const incrementCount2 = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  // Takes a lot of time to re-compute, hence we have memoized its result.
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h4>Button computes a function which takes a lot of time</h4>
      <button onClick={incrementCount1}>Increment Count 1 : {count1}</button>
      &emsp;{isEven ? "Even" : "Odd"}
      <h4>Button computes a regular function which is fast</h4>
      <button onClick={incrementCount2}>Increment Count 2 : {count2}</button>
    </div>
  );
}

export default Counter;
