import React from 'react';
import { Link } from 'react-router';
import { Router, hashHistory, withRouter } from 'react-router';
import UploadButtonContainer from '../main_nav/upload_button_container';

const sessionLinks = () => {
  const hash = location.hash.slice(1);
  if (hash === '/login') {
    return (
      <nav className="signup">
        <Link to="/signup" activeClassName="current">Sign Up</Link>
      </nav>
    );
  } else if (hash === '/signup'){
      return (
        <nav className="login">
          <Link to="/login" activeClassName="current">Login</Link>
        </nav>
      );
  } else {
    return (
      <nav className="login-signup">
        <Link to="/signup" activeClassName="current">Sign Up</Link>
        <Link to="/login" activeClassName="current">Login</Link>
      </nav>
    );
  }
};

const logoutAndRedirect = (logout) => () => {
  logout()
  .then(() => hashHistory.push('/'));
};

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
      <Link to={`users/${currentUser.id}`}>
        <div className="profile-link">
          <div className="profile-icon"></div>
          <p>{currentUser.username}</p>
        </div>
      </Link>
    <UploadButtonContainer />
    <Link onClick={logoutAndRedirect(logout)} className="exit-link">
      <div className="exit-icon"></div>
      <p>Logout</p>
    </Link>
</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default withRouter(Greeting);
