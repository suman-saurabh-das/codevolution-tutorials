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

## Tutorial 2: Data fetching on input change

- For e.g. if we use the endpoint ⇾ https://jsonplaceholder.typicode.com/posts/1  
  and change the number at the end, we will get different responses.

- Create an input element that will accept a post_id from the user.

- We are now fetching only one object, so we will initialize useState() with an empty object.

- We will have to modify the endpoint to fetch data based on value (post_id) entered by user.

- In useEffect(), we will use get method from axios to fetch the data.  
  .then() block will provide us the response with a single object.  
  .catch() block will provide us info about errors if any.

- Now we must add the id property to the dependency array inside the useEffect() otherwise react will not call the effect when id is entered by the user.

- After specifying the id in the dependency array of useEffect(), we will be able to fetch the desired data.
`;

/* Tutorial 1: Data fetching on render */
// function DataFetching() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     Axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res.data);
//         setPosts(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <ReactMarkdown>{NOTES}</ReactMarkdown>
//       <hr />
//       <h3>List of Posts</h3>
//       <ul style={{ listStyle: "none" }}>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default DataFetching;

/* Tutorial 2: Data fetching on input change */
function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <ReactMarkdown>{NOTES}</ReactMarkdown>
      <hr />
      <h3>Post with id : {id}</h3>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export default DataFetching;
