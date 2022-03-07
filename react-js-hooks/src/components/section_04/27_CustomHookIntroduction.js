import ReactMarkdown from "react-markdown";

const NOTES = `
## Custom Hooks

- A custom hook is basically a JavaScript function whose name starts with "use".
- A custom hook can also call other hooks if required.
- Hooks run on every render.

#### Why custom hooks ?

- Used to share logic (alternative to HOCs and Render props pattern)

#### How to create custom hook ?

- Name of a hook must start with "use" prefix (convention)
- Hooks can call other hooks inside of them.
- Hooks must be called inside functional components.
- Hooks must be called in the top level.  
  (i.e. do not call them inside loops, conditions or nested functions)
`;

function CustomHookIntroduction() {
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
    </div>
  );
}

export default CustomHookIntroduction;
