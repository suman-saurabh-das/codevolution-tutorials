import ReactMarkdown from "react-markdown";

const NOTES = `
## Rendering Process in React

- When we run a react application, the code written in our components gets translated into elements that get mounted onto the DOM. This is split into 2 phases - Render and Commit phase.

#### During Initial Render

- Render Phase
  - During this phase, react will start at the root of the component tree and goes downwards to the leaf components.

  - While traversing, for each of the component, react invokes the createElement() method and converts the components JSX into React Elements and stores that render output.
  
  - React elements are basically JS objects that describe the structure of our UI.
  
  - Once the JSX to React Elements conversion is done for the entire component tree, all the react elements are handed over to the commit phase.

- Commit Phase
  - In the commit phase, the react elements are applied to the DOM using the react DOM package.

#### During Re-render
    
- Render Phase
  - During this phase, react will start at the root of the component tree and goes downwards to the leaf components, finding all the components that are flagged as needing updates.

  - The component can flag itself for an update by calling the useState setter function or calling a useReducer dispatch function.

  - Then for each of the flagged components, react will invoke the createElement() method and converts the components JSX into React Elements and stores that render output.
  
  - Once the conversion is done for all the flagged components, and components effected by the flag components, react will compare the new set of react elements with the ones that were produced from the last render.
  
  - A list is created with all the changes that need to be made to the DOM and handed over to commit phase

- Commit Phase
  - In the commit phase, the changes are applied to the DOM.
    
  - The commit phase is usually very fast, but rendering can be slow. We will mainly focus on the re-rendering of components.

#### Summary

- React does the rendering in 2 phases ⇾ Render & Commit phase

- Render Phase
  - Find all elements flagged for updates.
  - For each flagged component, convert JSX to React elements and store the result.
  - Perform reconciliation: Diff old and new tree of React elements (Virtual DOM)
  - Hand over the changes to the next phase.

- Commit Phase
  - Apply changes to the DOM.
`;

function Introduction() {
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
    </div>
  );
}

export default Introduction;
