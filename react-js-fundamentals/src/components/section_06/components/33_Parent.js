import React, { Component } from "react";
import Child from "./33_Child";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Context

- Our goal is to get data from the App.js component to the GrandChild component using context

- Steps to implement context
  - Create the context.
  - Provide a context value.
  - Consume the context value.

#### Step 1: Creating the user context.

- Use the \`createContext\` method from react to create the UserContext.
- Every object created using the \`createContext() method\` comes with a \`Provider\` and \`Consumer\` react component.

#### Step 2: \`Provide this context a value\` using the UserProvider component.

- The place we provide this UserProvider component is important as only the descendent components can consume it.
- We will wrap ParentComponent.js with UserProvider in App.js.
- The provider component is responsible for providing a value to all the descendent components.
- The value that we want to provide is username, now this value can be consumed by ParentComponent.js and any nested child components.
- We provide the value using the \`value attribute\` in the \`provider\`. (just like passing props)

#### Step 3: \`Consume the value\` in the desired component.

- To \`consume a context value\`, we need the \`UserConsumer\` component.
- We will wrap the GrandChildComponent.js by the UserConsumer component.
- Between the opening and closing tags of UserConsumer, we need to specify an arrow function
- The \`function gets the userContext value as its parameter\` which can then be used within the function body to return a react element. (Here we are passing a function as a child to consumer component).

#### Additional Info

- We can set a default value to the context, it is set while creating the context.
- It is passed as an argument to the createContext() method.
- This default value will be used when a component does not have a matching provider in the component tree.

#### Context type property

- Earlier, we used UserConsumer component to consume the component value, we can also do it via using contextType property on a class.
  - Step 1: export default UserContext.
  - Step 2: assign this UserContext to the contextType property on the class.
  - Step 3: in the render method, the UserContext value is available as this.context

- Limitations of contextType
  - It only works with class components
  - We can subscribe to only a single context using context type
`;

class Parent extends Component {
  render() {
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <Child />
      </div>
    );
  }
}

export default Parent;
