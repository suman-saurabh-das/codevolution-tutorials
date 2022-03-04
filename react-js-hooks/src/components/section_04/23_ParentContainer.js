import React, { useState, useCallback } from "react";
import ChildTitle from "./components/23_ChildTitle";
import ChildCount from "./components/23_ChildCount";
import ChildButton from "./components/23_ChildButton";
import ReactMarkdown from "react-markdown";

const NOTES = `
## useCallback hook

- In the UI, we are using 5 components to understand the performance optimization and useCallback hook. Initially when we are not using React.memo() and useCallback hook, we can see that all the log statements are being displayed when we click on any button. This means that the entire component is getting re-rendered even though we update either age/salary.

- In case of lots of components, we will start facing an issue. Hence, to improve performance, we need to restrict re-renders to only those components which need to re-render.

- **Optimization 1 React.memo():**  
  It is a higher order component that will prevent the functional component from being re-rendered if its props and states do not change.
  To use this, wrap your components with React.memo(ComponentName) before exporting.

- **Optimization 2 useCallback hook:**  
  After using the memo, we still see an issue, i.e. both the buttons get rendered even though one of them is clicked. This is because each time, a new incrementAge and incrementSalary is created when the parent component re-renders, and while dealing with functions, we always have to consider reference equality.

- Even though the 2 functions seems to have exactly same behavior, it does not mean they are equal to each other, so the function before Parent component re-renders is different than after re-renders and since function is passed as a prop, React.memo sees it as the prop has changed, so both the button component gets re-rendered.

#### useCallback Hook

- What is useCallback ?  
  - useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

- Why useCallback ?  
  - It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

- How to use useCallback ?  
  - useCallback takes 2 arguments
  - callback function: which is cached and will re-render based on the values passed in dependency list.
  - dependency list: parameters which we need to check for.

- Why we should not useCallback hook every single time ?  
  https://kentcdodds.com/blog/usememo-and-usecallback
`;

function ParentContainer() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prevSal) => prevSal + 10000);
  }, [salary]);

  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <ChildTitle />
      <ChildCount text={"Age"} count={age} />
      <ChildButton handleClick={incrementAge}>Increment Age</ChildButton>
      <ChildCount text={"Salary"} count={salary} />
      <ChildButton handleClick={incrementSalary}>Increment Salary</ChildButton>
    </div>
  );
}

export default ParentContainer;
