import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';
import { values } from 'lodash';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPhotos();
  };

  render() {
    return (
      <div>
        <LoggedInNav />
      <div className="home-main">
        <div className="home-div">
          <h1>This is the logged-in homepage</h1>
          <div className="home-feed-div">
            <h1>This is the home feed div!</h1>
            <PhotosIndexContainer photos={ values(this.props.photos) || [] } />
          </div>
        </div>
      </div>
      </div>
    );
  }
};

export default Home;
