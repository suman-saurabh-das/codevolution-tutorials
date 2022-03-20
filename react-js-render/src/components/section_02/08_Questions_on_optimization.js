import ReactMarkdown from "react-markdown";

const NOTES = `
## Questions on Optimization

#### When do I use the same element reference technique and when do I use React.memo ?

- Same Element Reference
  - When your parent component re-renders because of state change in the parent component.
  - This technique does not work if the parent component re-renders because of changes in its props.
    - state change ? Yes, use same element reference
    - props change ? No, don't use same element reference

- React.memo
  - When your child component is being asked to re-render due to changes in parents state which do not affect the child component props in anyway.

  - NOTE: It is always better to use same element reference when possible because -
    - It is provided automatically by React.
    - It prevents us from adding React.memo all over the codebase.

- If React.memo provides the optimization by comparing the props then why not wrap every single component with React.memo ? OR Why doesn't React just internally memoize every component and not expose React.memo to the developers ?

  - "Shallow comparisons aren't free. They are O(prop count) time complexity. And they only buy something if it bails out.

  - All comparisons where we end up re-rendering are wasted. Why would you expect always comparing to be faster ? Considering many components always get different props." - Dan Abramov

  - Wrapping each and every component with React.memo() can be detrimental to the performance of the app, therefore it is always a good idea to memoize only expensive components where props hardly change.

  - When you optimize the rendering of one component, React will also skip rendering that components entire subtree because its effectively stopping the default "Render children recursively" behavior of React.
`;

function OptimizationQuestions() {
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
    </div>
  );
}

export default OptimizationQuestions;
