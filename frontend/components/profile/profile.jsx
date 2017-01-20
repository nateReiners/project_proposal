import React from 'react';
import LoggedInNav from '../main_nav/logged-in_nav';
import PhotosIndexContainer from '../photos/photos_index_container';
import FollowButtonContainer from '../follow/follow_button_container';
import ProfileFormContainer from './profile_form_container';
import {Link} from 'react-router'
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

    if (this.props.currentUser) {

    } else {
      return (<div></div>)
    }

    const defaultCoverImg = "https://res.cloudinary.com/durooeqnc/image/upload/v1484904698/xvljib9zmhm-david-chalifoux_dm8s69.jpg";
    const defaultProfileImg = "https://res.cloudinary.com/durooeqnc/image/upload/v1484895748/WmvM0_bpj2mj.png";

    let coverImgUrl;
      if (this.props.user.cover_img_url) {
        coverImgUrl = this.props.user.cover_img_url;
      } else {
        coverImgUrl = defaultCoverImg;
      }

    let profileImgUrl;
    if (this.props.user.profile_img_url) {
      profileImgUrl = this.props.user.profile_img_url;
    } else {
      profileImgUrl = defaultProfileImg;
    }


    let profileFormButton;
    let followButton;
    if (this.props.params.id == this.props.currentUser.id) {
      const url = `users/${this.props.currentUser.id}/edit`
      profileFormButton = <Link to={url} className="edit-profile-button">Edit Profile</Link>;
      followButton = <div></div>;
    } else {
      profileFormButton = <div></div>;
      followButton = <FollowButtonContainer followerId={this.props.currentUser.id} followingId={this.props.params.id}/>;
    }
    let name = `${this.props.user.first_name} ${this.props.user.last_name}`;

    if (this.props.currentUser === null) {
      return (<div></div>)
    } else if (this.props.user === null) {
      return (<div></div>)
    } else {

      return (
        <div>
          <LoggedInNav />
        <div className="profile-div">
          <div className="cover-photo-div">
            <img className="cover-img" src={coverImgUrl}></img>
            <div className="profile-photo-div">
              <img className="profile-img" src={profileImgUrl}></img>
            </div>
            <h1 className="name">{name}</h1>
            <div className="buttons-div">
              {followButton}
              {profileFormButton}
            </div>
          </div>
          <div className="profile-photos">
            <div className="profile-info-div">
            <div className="about-div">
              <h1>About</h1>
              {this.props.user.about}
            </div>
          </div>
            <h1>Photos</h1>
            <PhotosIndexContainer photos={this.props.user.photos || []} />
          </div>
        </div>
        </div>
      );
    }
  };
};

export default Profile;
