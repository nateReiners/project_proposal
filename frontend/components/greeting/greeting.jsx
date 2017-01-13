import React from 'react';
import { Link } from 'react-router';
import { Router, hashHistory, withRouter } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    <Link to="/signup" activeClassName="current">Sign Up!</Link>
  </nav>
);

const logoutAndRedirect = (logout) => () => {
  logout();
  hashHistory.push('/');
};

const openCloudinaryWidget = () => {
  alert("eventually this will open a sick widget");
};

const personalGreeting = (currentUser, logout) => (
      <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}</h2>
    <button className="header-button" onClick={logoutAndRedirect(logout)}>Log Out</button>
    <button className="upload-button" onClick={openCloudinaryWidget}> Upload Photos</button>
      </hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default withRouter(Greeting);
