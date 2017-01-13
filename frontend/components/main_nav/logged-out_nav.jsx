import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router';

const LoggedOutNav = () => {
  return (
    <div className="logged-out-nav">
      <Link to="/">
        <div className="logo"></div>
      </Link>
      <GreetingContainer />
    </div>
  );
};

export default LoggedOutNav;
