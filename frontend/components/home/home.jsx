import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';

const Home = () => {
  return (
    <div className="home-main">
      <LoggedInNav />
      <div className="home-div">
        <h1>This is the logged-in homepage</h1>
        <div className="home-feed-div">
          <h1>This is the home feed div!</h1>
          <PhotosIndexContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
