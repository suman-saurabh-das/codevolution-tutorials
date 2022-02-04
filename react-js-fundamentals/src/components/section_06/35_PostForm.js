import React, { Component } from "react";
import Axios from "axios";
import ReactMarkdown from "react-markdown";

const NOTES = `
## HTTP POST REQUEST

- We have created a form to collect the data and post it in the server using axios
- We will be posting data to the endpoint ⇾ [/posts](https://jsonplaceholder.typicode.com/posts)
  
- Steps to Send the data

  - import the \`axios library\`.

  - In the \`submitHandler()\`, we will make the \`post request\` using \`axios.post() method\`.

  - The \`post method\` takes a \`2nd argument\` which is the \`data that has to be sent\`.

  - Once the \`request is complete\`, we either get a \`response or an error\`.  
    \`then()\`: accepts an arrow function as its argument which gives us access to the response.  
    \`catch()\`: accepts an arrow function as its argument which gives us access to the error if something goes wrong.
`;

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h3>Post Form</h3>
        <form>
          <input
            type="text"
            name="userId"
            placeholder="User-id"
            value={userId}
            onChange={this.changeHandler}
          />
          <br /><br />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.changeHandler}
          />
          <br /><br />
          <input
            type="text"
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.changeHandler}
          />
          <br /><br />
          <button onClick={this.submitHandler} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
