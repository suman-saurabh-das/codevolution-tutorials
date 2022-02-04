import React, { Component } from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";

const NOTES = `
## HTTP GET REQUEST

- We will be using the json placeholder API to fetch data from [jsonplaceholder.typicode](https://jsonplaceholder.typicode.com/)
- We will be getting the data from the endpoint ⇾ [/posts](https://jsonplaceholder.typicode.com/posts)

#### Steps to fetch the data

- import the \`axios\` library.

- Create a \`state property\` which will \`store a list of posts\`.

- Use \`axios\` to make a \`GET request\` to the \`json placeholder API\`.
  - The code to make the \`GET\` request should be placed in the \`componentDidMount() lifecycle method\`. This method gets executed when the component mounts for the first time & is executed only once during component lifecycle.
  - To make a \`GET request\`, we invoke the \`get()\` method on the \`axios library\`.
  - This method accepts the \`API endpoint\` as its argument in \`string format\`.
  - Now after making the \`GET request\`, we need to access the data that is returned,
      Since axios is a promise based library, we can add then and catch blocks.
      \`then()\` - accepts an arrow function as its argument which gives us access to the response.
      \`catch()\` - accepts an arrow function as its argument which gives us access to the error if something goes wrong.
  - Now we can assign the data array that we got in the state property and render it in the JSX.
  - In the render method, first we will destructure the state property, then render it using map method.

- Initially in the constructor, we have a state property called posts which is an empty array.

- Then control flows to the render method and the text "List of Posts" gets displayed, but the actual list is not rendered because the array posts is empty at the moment.

- Then the control flows to componentDidMount(), where we make our GET request to API endpoint.

- Once the data is retrieved, we then update the state posts.

- And when we change the state, the component gets re-rendered, this time the array is not empty hence the list of titles is rendered in the browser.
`;

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    // Axios.get('https://jsonplaceholder.typicode.com/postsX') // To get an error
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error fetching data : incorrect URL" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>List of Posts</h3>
        <ul>
          {posts.length
            ? posts.map((post) => <li key={post.id}>{post.title}</li>)
            : null}
        </ul>
        {errorMsg ? <p style={{ color: "red" }}>{errorMsg}</p> : null}
      </div>
    );
  }
}

export default PostList;
