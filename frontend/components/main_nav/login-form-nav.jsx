import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router';

const LoginFormNav = () => {
  return (
    <div className="login-form-nav">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <GreetingContainer />
    </div>
  );
};

export default LoginFormNav;
