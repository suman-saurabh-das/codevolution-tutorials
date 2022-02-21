import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Steps to create an interval counter using functional component

- Create a state variable count using useState()
- Create an interval that runs a tick function every 1sec using useEffect()
- Create tick function that updates the count state variable by 1 each second.

#### Important note

- NOTE: If you think dependency array is a way to specify when you want to re-run an effect, you are going to run into problems. Instead dependency array should be thought of as a way to let react know about everything that the effect must watch, for changes.

- NOTE: It is possible to have multiple useEffect() calls in the same component.  
  This can be helpful to group related code together.
`;

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const someProp = "Random value";

  // const tick = () => {
  //   setCount(count + 1)
  // }

  // We can make it work even without the dependency list, if we use an arrow function to get the previous value of count and update that using the setCount() method in tick method. Since setCount() now keeps track of the previous count value, we do not need count in the dependency array.
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Sometimes, we would want to call a function inside useEffect() e.g.
  // function doSomething() {
  //   console.log(someProp);
  // }

  useEffect(() => {
    // Here by looking at this code, we might forget that inside doSomething() there is a dependency of someProp as someProp is being used in doSomething() when it gets called in useEffect()
    doSomething();
    // So it is recommended that when we call a function inside useEffect, we should define it inside useEffect, this way we are much likely to see that there is a dependency on someProp.
    function doSomething() {
      console.log(someProp);
    }

    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    // Here by specifying an empty array, we have basically told react to ignore watching for changes in the count variable. So on initial render, count is 0 and setCount will set it to 0 + 1 which is 1 and that will be rendered in browser, but since the dependency array is empty, react will not watch for further changes in the count value. Count value is currently 1 and it will render the same value in different render cycles.
    // }, [])

    // If we add count as a dependency, we will get the expected result.
    // }, [count])  // When we are using the tick method directly updating the count

    // }, [])       // When we are using the tick method with prevCount
  }, [someProp]); // when we are using the doSomething() method

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      Count {count}
    </div>
  );
}

export default IntervalHookCounter;
