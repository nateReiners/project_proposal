import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';
import { values } from 'lodash';
import UserItem from './user_item';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPhotos();
    this.props.requestAllUsers();
  };



  render() {

    let users = Object.keys(this.props.users).map((key, i) => (<UserItem key={i} user={this.props.users[key] || {}}/>));
    if (users.length <= 1) {
      users = [];
    }
    return (
      <div>
        <LoggedInNav />
        <div className="home-div">
          <div className="home-feed-div">
            <h2>Photos from Photographers You Follow</h2>
            <PhotosIndexContainer photos={ values(this.props.photos) || [] } />
          <div className="users-index-div">
            <h2>You Might Also Enjoy Photos From...</h2>
            <ul className="users-index">
              {users}
            </ul>
          </div>
        </div>
        </div>
      </div>
    );
  }
};

export default Home;
