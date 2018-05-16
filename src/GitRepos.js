import React, { Component } from "react";
import ReactDOM from "react-dom";

class GitRepos extends Component {
  constructor(props) {
    super(props);
    this.state = { MYURL: "" };
    this.getgitdata = this.getgitdata.bind(this);
  }

  getgitdata() {
    this.setState({
      MYURL: "https://api.github.com/users/harmeet27/repos"
    });
  }
  render() {
    return (
      <div>
        <h1>Get Git Repos</h1>
        <input type="button" onclick={this.getgitdata} />
      </div>
    );
  }
}

export default GitRepos;
