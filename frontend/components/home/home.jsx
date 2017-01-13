import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';

const Home = () => {
  return (
    <div className="home-div">
      <LoggedInNav />
      <h1>This is the logged-in homepage</h1>
    </div>
  );
};

export default Home;
