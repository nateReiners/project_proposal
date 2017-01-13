import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router';

const LoggedInNav = () => {
  return (
    <div className="logged-in-nav">
      <Link to="/home">
        <div className="logo"></div>
      </Link>
      <GreetingContainer />
    </div>
  );
};

export default LoggedInNav;
