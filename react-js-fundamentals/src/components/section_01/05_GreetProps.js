import React from "react";

export const FUNCTION_PROPS_NOTES = `
## Props in functional components
- We can use props to have unique data for the same component thus making it reusable.
- For using props, we need to pass them from the parent element and then, we can use it as a parameter in the function.
- All props are bundled together as a single object.
- Props are immutable (i.e. their value cannot be changed).
- props.children can be used to render data which is passed from parent as children.
- If nothing is passed, then it does not render anything.
`;

const GreetProps = (props) => {
  // props.name = "Tony" // This throws an error - Cannot assign to read only property.

  return (
    <div>
      <h4>Hello {props.name} a.k.a {props.heroName}</h4>
      {props.children}
    </div>
  );
};

export default GreetProps;
