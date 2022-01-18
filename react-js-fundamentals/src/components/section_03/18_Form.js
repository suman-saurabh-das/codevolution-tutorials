import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

const NOTES = `
## Controlled components
  
- Initially form elements are not controlled elements as their state is handled by the HTML components. Steps to convert HTML form elements into controlled components -
  - Step 1 - Create a component state that can control the value of the input element.
  - Step 2 - Handling the onChange event.

- When we assign a handler to the onChange event, the event itself is passed as a parameter to the handler. We can extract the value of element using \`event.target.value\`

- Default behavior of form button is to reload the page.
- We can have a JS method to handle form submission and this method will also have access to the form data.
- For submit button onSubmit handler method is in form element and not in submit button.
- To prevent the page from refreshing when submitted, we can use event.preventDefault()
`;

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      skill: "React",
      gender: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handleCommentsChange = (e) => {
    this.setState({ comments: e.target.value });
  };
  handleSkillChange = (e) => {
    this.setState({ skill: e.target.value });
  };
  handleGenderChange = (e) => {
    this.setState({ gender: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Username : ${this.state.username},\nComments : ${this.state.comments},\nSkill : ${this.state.skill},\nGender : ${this.state.gender}`,
    );
  };

  render() {
    const { username, comments, skill } = this.state;
    return (
      <div>
        <ReactMarkdown>{NOTES}</ReactMarkdown>
        <hr />
        <h2>Job Application Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username : </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="comments">Comments : </label>
            <textarea
              id="comments"
              cols="19"
              rows="3"
              value={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <br />
          <div>
            <label htmlFor="skill">Skill : </label>
            <select id="skill" value={skill} onChange={this.handleSkillChange}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <br />
          <div>
            <label htmlFor="gender">Gender : </label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              onChange={this.handleGenderChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              id="gender"
              value="female"
              onChange={this.handleGenderChange}
            />{" "}
            Female
            <input
              type="radio"
              name="gender"
              id="gender"
              value="others"
              onChange={this.handleGenderChange}
            />{" "}
            Others
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
