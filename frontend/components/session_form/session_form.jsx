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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => hashHistory.push('/home'));
  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Login</Link>;
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
              <p>Please {this.props.formType.titleize()} or {this.navLink()}</p>
              <div className="errors-div">
                {this.renderErrors()}
              </div>
              <label> Username:
                <input type="text"
                      value={this.state.username}
                      onChange={this.update("username")}
                      className="login-input" />
              </label>
              <br/>
              <label> Password:
                <input type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                      className="login-input" />
              </label>
              <br/>
              <input className="submitButton" type="submit" value={this.props.formType.titleize()} />
            </div>
          </form>
      </div>
    );
  }
}

export default SessionForm;
