import ReactMarkdown from "react-markdown";

const NOTES = `
## useEffect hook

- The Effect hook lets us perform side effects in functional components.

- It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount.

- useEffect hook also solves the below issues that arise when using lifecycle methods in class component.

  - for e.g. If we wanted to update the document title every time we clicked a button, then we would have to write the same code twice, once in componentDidMount and once in componentDidUpdate. (useEffect hook helps us prevent Repetition of same code)

  - for e.g. If we want to create a timer, then we would have to create it in componentDidMount and then to remove it we had to write the code in componentWillUnmount, i.e. we are writing related code separately. (useEffect hook helps us in organizing related code together)
*/
`;

function UseEffectIntroduction() {
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
    </div>
  );
}

export default UseEffectIntroduction;
