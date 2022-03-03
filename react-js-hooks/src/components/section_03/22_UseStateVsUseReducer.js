import ReactMarkdown from "react-markdown";

const NOTES = `
## useState vs useReducer

      |------------------|----------------------------|------------------------|
      |  Scenario        |   useState                 |  useReducer            |
      |------------------|----------------------------|------------------------|
      |  Type of state   |  Primitive datatype        |  Complex datatype      |
      |                  |  (Number, String, Boolean) |  (Object or Array)     |
      |------------------|----------------------------|------------------------|
      | Number of state  |  One or Two                |  Too Many              |
      |   transitions    |                            |                        |
      |------------------|----------------------------|------------------------|
      |  Related state   |  No                        |  Yes                   |
      |   transitions    |                            |                        |
      |------------------|----------------------------|------------------------|
      |  Business logic  |  No business logic         | Complex business logic |
      |------------------|----------------------------|------------------------|
      | Local vs Global  |  Local                     | Global                 |
      | state management |                            |                        |
      |------------------|----------------------------|------------------------|
`;

function UseStateVsUseReducer() {
  return (
    <div>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
    </div>
  );
}

export default UseStateVsUseReducer;
