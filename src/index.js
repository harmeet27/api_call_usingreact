import React, { Component } from "react";
import ReactDOM from "react-dom";

import GitRepos from "./GitRepos";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Fetch Api Module</h1>
        <GitRepos />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
