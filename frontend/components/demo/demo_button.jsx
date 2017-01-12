import React from 'react';


class DemoButton extends React.Component {
  constructor(props) {
    super(props);
      this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(e) {
    e.preventDefault();
    this.props.loginGuest();
  }

  render() {
    return (
      <button className="demo-button" onClick={this.guestLogin}>Demo as Guest</button>
    );
  }
};


export default DemoButton;
