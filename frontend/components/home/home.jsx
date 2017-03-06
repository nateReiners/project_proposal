import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';
import { values, isEqual } from 'lodash';
import UserItem from './user_item';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPhotos();
    this.props.requestAllUsers();
  };

  componentWillReceiveProps(nextProps) {
    const users = this.props.users || {};
    const nextUsers = nextProps.users || {};
    if ( _.isEqual(users, nextUsers)) {
    } else {
      this.props.requestAllUsers();
      this.props.requestAllPhotos();
    }
  }

  render() {

    let users = Object.keys(this.props.users).map((key, i) => (
      <UserItem
        key={i}
        createFollow={this.props.createFollow}
        currentUser={this.props.currentUser}
        user={this.props.users[key] || {}}/>
    ));

    if (users.length <= 1) {
      users = [];
    }
    let photos = [];
    values(this.props.photos).forEach((photo) => {
      if (this.props.currentUser) {
        if (photo.author_id !== this.props.currentUser.id) {photos.push(photo);}
      }
    });

    return (
      <div>
        <LoggedInNav />
        <div className="home-div">
          <div className="home-feed-div">
            <h2>Photos from Photographers You Follow</h2>
            <PhotosIndexContainer photos={ photos || [] } />
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
