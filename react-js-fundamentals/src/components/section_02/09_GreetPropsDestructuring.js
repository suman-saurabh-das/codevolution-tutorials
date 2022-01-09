import React from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Destructuring

- Is an ES6 feature that makes it possible to unpack values from arrays or properties from objects, into distinct variables.
- In react destructuring props and state improves code readability.

#### Two ways to destructure props in functional component
  - Destructuring in the function parameter itself.
  - Destructuring in the function body.
`;

/* Destructuring in the function parameter itself */
// function GreetPropsDestructuring({ name, heroName }) {
//   return (
//     <div>
//       <h2>
//         Hello {name} a.k.a {heroName}
//       </h2>
//     </div>
//   );
// }

/* Destructuring in the function body */
function GreetPropsDestructuring(props) {
  const { name, heroName } = props;
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <h4>Hello {name} a.k.a {heroName}</h4>
    </div>
  );
}

export default GreetPropsDestructuring;
