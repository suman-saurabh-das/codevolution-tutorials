import React from "react";

const UserContext = React.createContext("Suman");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;

/*
  Step 1 - Creating the user context.
    a. Use the createContext method from react to create the UserContext.
    b. Every object created using the createContext method comes with a Provider and Consumer react component.

  Step 2 - Provide this context a value using the UserProvider component.
    a. The place we provide this UserProvider component is important as only the descendent components can consume it.
    b. We will wrap ParentComponent.js with UserProvider in App.js.
    c. The provider component is responsible for providing a value to all the descendent components.
    d. The value that we want to provide is username, now this value can be consumed by ParentComponent.js and any nested child components.
    3. We provide the value using the value attribute in the provider (just like passing props)

  Step 3 - Consume the value in the desired component.
    a. To consume a context value, we need the UserConsumer component.
    b. We will wrap the GrandChildComponent.js by the UserConsumer component.
    c. Between the opening and closing tags of UserConsumer, we need to specify an arrow function
    d. The function gets the userContext value as its parameter which can then be used within the function body to return a react element. (Here we are passing a function as a child to consumer component).

  1. We can set a default value to the context, it is set while creating the context.
  2. It is passed as an argument to the createContext() method.
  3. This default value will be used when a component does not have a matching provider in the component tree.

  4. Context type property - Earlier, we used UserConsumer component to consume the component value, we can also do it via using contextType property on a class.
    a. Step 1. export default UserContext.
    b. Step 2. assign this UserContext to the contextType property on the class.
    c. Step 3. in the render method, the UserContext value is available as this.context

  5. Limitations of contextType
    a. It only works with class components
    b. We can subscribe to only a single context using context type
*/
