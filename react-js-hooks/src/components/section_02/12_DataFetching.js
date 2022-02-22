import React, { useState, useEffect } from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Tutorial 1: Data fetching on render

- If axios is not installed, then install axios using
  npm i axios (check package.json for version)
- Create a state variable initialized with an empty array to store the response.
- Create a useEffect() hook and pass an empty array  
  as 2nd parameter to mimic componentDidMount() method.
- Inside useEffect() function, make a GET request using axios.  
  .then() block will provide us the response, which we can store in the state variable.  
  .catch() block will provide us info about any error.
- Create an unordered list and use map method to extract & display the data.
`;

function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>List of Posts</h3>
      <ul style={{ listStyle: "none" }}>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default DataFetching;
