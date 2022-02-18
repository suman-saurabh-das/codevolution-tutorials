import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Conditionally running an effect with useEffect hook

- For conditionally executing an effect, we pass in a second parameter to useEffect.

- This parameter is an array.

- In this array, we need to specify the props/state that we need to watch for.

- Only if those state or props specified in this array change, the effect would be executed.

- In useEffect() hook, first parameter is a function (effect) and the second parameter is an array that can be used to conditionally run the function. (effect)

- The second parameter is the array of values that determine whether the function (effect) runs or not. If the values don't change between renders, the function (effect) will not run.
`;

function HookCounter4() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updating document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      &emsp;
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookCounter4;
