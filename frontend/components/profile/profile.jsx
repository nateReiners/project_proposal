import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';
import FollowButtonContainer from '../follow/follow_button_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userID = this.props.params.id || this.props.currentUser.id;
    this.props.requestSingleUser(userID);
  }

  componentWillReceiveProps(nextProps) {
    const userID = this.props.params.id || this.props.currentUser.id;
    const nextUserID = nextProps.params.id || nextProps.currentUser.id
    if (userID === nextUserID) {
    } else {
      this.props.requestSingleUser(nextUserID);
    }
  }

  render() {
    if (this.props.currentUser === null) {
      return (<div></div>)
    } else {
      return (
        <div className="profile-div">
          <LoggedInNav />
          <div className="cover-photo">
            <h1>{this.props.user.username}'s Cover Photo Will Go Here</h1>
          </div>
          <div className="profile-info">
            <FollowButtonContainer followerId={this.props.currentUser.id} followingId={this.props.params.id}/>
            <h1>This is {this.props.user.username}'s profile page (profile pic/info will go here)</h1>
          </div>
          <h1>{this.props.user.username}'s Photos</h1>
          <div className="profile-photos">
            <PhotosIndexContainer photos={this.props.user.photos || []} />
          </div>
        </div>
      );
    }
  };
};

export default Profile;
