import React, { Component } from 'react';

class LoggedOut extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.loginHandler = this.loginHandler.bind(this);
    this.handleUsernameChange = this.handleChange.bind(this, 'username');
    this.handlePasswordChange = this.handleChange.bind(this, 'password');
  }

  handleChange(property, event) {
    this.setState({
      [property]: event.target.value
    });
  }

  loginHandler(e) {
    e.preventDefault();
    this.props.logUserIn(this.state.username, this.state.password);
  }

  render() {
    const { errorMessage } = this.props;

    return (
      <div>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <form action="/check-login" method="post">
            <input id='username' name="username" value={this.state.username} onChange={this.handleUsernameChange} />
            <input id='password' name="password" value={this.state.password} onChange={this.handlePasswordChange}  type="password" />
            <button title="Log in" onClick={this.loginHandler} type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default LoggedOut;
