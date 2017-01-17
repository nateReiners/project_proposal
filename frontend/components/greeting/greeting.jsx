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


const path = "http://betruewebdesign.com/img/avatar-300x300.png";

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
      <Link to="/profile">
        <div className="profile-links-div">
          <img className="header-profile-pic" src={path}></img>
          <h2 className="header-username">{currentUser.username}</h2>
        </div>
      </Link>
    <button className="header-button" onClick={logoutAndRedirect(logout)}>Log Out</button>
    <UploadButtonContainer />
</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default withRouter(Greeting);
