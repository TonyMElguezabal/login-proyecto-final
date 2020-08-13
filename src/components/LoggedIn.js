import React, { Component } from 'react';

class LoggedIn extends Component {

  render() {
    return (
      <div>
        Thanks for logging in {this.props.userId}
      </div>
    );
  }
}

export default LoggedIn;
