import React from "react";
import useInput from "./hooks/useInput";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Custom hook (useForm)

- Here we are re-using the input element update logic for both inputs.
`;

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hi ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <form onSubmit={submitHandler}>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <div>
        <label htmlFor="firstName">First name : </label>
        <input type="text" id="firstName" {...bindFirstName} />
      </div><br />
      <div>
        <label htmlFor="firstName">Last name : </label>
        <input type="text" id="lastName" {...bindLastName} />
      </div><br />
      <button type="Submit">Submit data</button>
    </form>
  );
}

export default UserForm;
