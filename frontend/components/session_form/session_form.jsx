import React from 'react';
import { Router, hashHistory, Link, withRouter } from 'react-router';
import DemoButtonContainer from '../demo/demo_button_container';
import DemoButton from '../demo/demo_button';

import LoginFormNav from '../main_nav/login-form-nav';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { username: "", password: "" };
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  componentWillReceiveProps(newState) {
    if (newState.formType != this.props.formType) {
      this.setState({ username: "", password: "" });
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => hashHistory.push('/home'));
  }

  swapFormMessage() {
    if (this.props.formType === "login") {
      return (<p>Don't have an account? <Link to="/signup">Sign Up</Link></p>);
    } else {
      return (<p>Already have an account? <Link to="/login">Login</Link></p>);
    }
  };

  welcomeMessage() {
    if (this.props.formType === "login") {
      return (<div className="form-message"><h1>Log In to TogLink</h1></div>);
    } else {
      return (
        <div className="form-message">
          <h1>Join TogLink</h1>
          <h3>Upload and enjoy amazing photos</h3>
        </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            { error }
          </li>
        ))}
      </ul>
    );
  }

  render () {
    String.prototype.titleize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };
    return (
      <div className="login-form-container">
        <LoginFormNav />
          <form onSubmit={this.handleSubmit}>
            <div className="auth-form">
                {this.welcomeMessage()}
              <div className="errors-div">
                {this.renderErrors()}
              </div>
              <label> Email or Username
                <input type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="login-input" />
              </label>
              <label> Password
                <input type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="login-input" />
              </label>
              <input className="submitButton" type="submit" value={this.props.formType.titleize()} />
              {this.swapFormMessage()}
            </div>
          </form>
      </div>
    );
  }
}

export default SessionForm;
