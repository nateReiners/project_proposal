import React from 'react';
import { Link, withRouter } from 'react-router';

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
    this.props.processForm(user).then(() => this.redirect());
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
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <h2>Welcome to Toglink</h2>
          <br/>
          <h3>Where Photographers Connect and Share</h3>
          <br/>
          Please {this.props.formType} <br/>or<br/>{this.navLink()}

          {this.renderErrors()}
          <div className="login-form">
            <br/>
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
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

}

export default SessionForm;
