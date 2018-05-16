import React, { Component } from "react";
import ReactDOM from "react-dom";

class GitRepos extends Component {
  constructor(props) {
    super(props);
    this.state = { result:[] };
    this.getgitdata = this.getgitdata.bind(this);
  }

  getgitdata() {
    
      const MYURL="https://api.github.com/users/harmeet27/repos"
    fetch(MYURL).then(response => response.json())
                .then (response => console.log(response));
  }
  render() {
    return (
      <div>
        <h1>Get Git Repos</h1>
        <input type="button" onClick={this.getgitdata} value="get data" />
      </div>
    );
  }
}

export default GitRepos;
