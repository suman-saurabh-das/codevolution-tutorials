import React, { Component } from "react";
import { UserConsumer } from "../33_UserContext";

class GrandChild extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <h3>Grand child component - Name {username}</h3>;
        }}
      </UserConsumer>
    );
  }
}

export default GrandChild;
