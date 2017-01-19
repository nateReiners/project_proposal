import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';
import FollowButtonContainer from '../follow/follow_button_container';
import ProfileFormContainer from './profile_form_container';

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
    const nextUserID = nextProps.params.id || nextProps.currentUser.id;
    if (userID === nextUserID) {
    } else {
      this.props.requestSingleUser(nextUserID);
    }
  }

  render() {
    let form;
    if (this.props.params.id == this.props.currentUser.id) {
      form = <ProfileFormContainer />;
    } else {
      form = <div></div>;
    }

    if (this.props.currentUser === null) {
      return (<div></div>)
    } else {
      return (
        <div>
          <LoggedInNav />
        <div className="profile-div">
          <div className="cover-photo-div">
            <img src={this.props.user.cover_img_url}></img>
          </div>
          <div className="profile-info-div">
            <div className="profile-photo-div">
              <img src={this.props.user.profile_img_url}></img>
            </div>
            <FollowButtonContainer followerId={this.props.currentUser.id} followingId={this.props.params.id}/>
          </div>
          <div className="profile-photos">
            <h1>Photos</h1>
            <PhotosIndexContainer photos={this.props.user.photos || []} />
          </div>
          {form}
        </div>
        </div>
      );
    }
  };
};

export default Profile;
