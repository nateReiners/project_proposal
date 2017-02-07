import React from 'react';
import { Router, hashHistory, withRouter } from 'react-router';

class DemoButton extends React.Component {
  constructor(props) {
    super(props);
      this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.loginGuest()
    .then(() => this.props.router.push('/home'));
  }

  render() {
    return (
      <button className="submitButton" onClick={this.guestLogin}>
        <p>Demo as Guest</p>
      </button>
    );
  }
}


export default withRouter(DemoButton);
