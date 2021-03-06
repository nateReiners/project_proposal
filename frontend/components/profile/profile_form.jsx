import React from 'react';
import ProfileFormContainer from './profile_form_container';
import {hashHistory} from 'react-router';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: this.props.currentUser.username,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      about: this.props.currentUser.about,
      profile_img_url: this.props.profileImgUrl,
      cover_img_url: this.props.profileImgUrl,
      id: this.props.currentUser.id
    };

    this.handleSubmit.bind(this);
    this.coverUploadWidget = this.coverUploadWidget.bind(this);
    this.profileUploadWidget = this.profileUploadWidget.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
      this.setState(newState.currentUser);
  }

  coverUploadWidget() {
    cloudinary.openUploadWidget({
      cloud_name: 'durooeqnc',
                   upload_preset: 'irbes1bu' },
                   (error, result) => {
      this.setState({cover_img_url: result[0].secure_url});
    });
 }

 profileUploadWidget() {
  cloudinary.openUploadWidget(
    { cloud_name: 'durooeqnc', upload_preset: 'profile'},
    (error, result) => {
    this.updateUrl("profile_img_url", result[0].secure_url);
  });
 }


  handleSubmit(e) {
    e.preventDefault();
      this.props.updateUser(this.state)
      .then(hashHistory.push(`/users/${this.props.currentUser.id}`));
  }

  handleCancel() {
      hashHistory.push(`/users/${this.props.currentUser.id}`);
  }

  updateUrl(field, url) {
    this.setState({[field]: url});
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const defaultCoverImg = "https://res.cloudinary.com/durooeqnc/image/upload/v1484895917/HkTMcmlMOUQ_h8aeth.jpg";
    const defaultProfileImg = "https://res.cloudinary.com/durooeqnc/image/upload/v1484895748/WmvM0_bpj2mj.png";

    let coverImgUrl;
      if (this.state.cover_img_url) {
        coverImgUrl = this.state.cover_img_url;
      } else {
        coverImgUrl = defaultCoverImg;
      }

    let profileImgUrl;
    if (this.state.profile_img_url) {
      profileImgUrl = this.state.profile_img_url;
    } else {
      profileImgUrl = defaultProfileImg;
    }

    if (this.props.currentUser === null) {
      return (<div></div>);
    } else {

      return (
        <div className="profile-form-page-div">
          <img className="background-img" src={coverImgUrl}></img>
                    <div className="profile-form">
            <div className="header">
              <div className="cover-photo">
                <img src={coverImgUrl}></img>
                <button className="cover-upload-btn" onClick={this.coverUploadWidget}>
                  Change cover photo
                </button>
              </div>

              <div className="profile-photo">
                <img src={profileImgUrl}></img>
                  <button className="profile-upload-btn" onClick={this.profileUploadWidget}>
                    Change profile picture
                  </button>
              </div>
            </div>


            <form onSubmit={this.handleSubmit}>
              <label>First Name
                <input
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update('first_name')} />
              </label>
              <label>Last Name
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update('last_name')} />
              </label>
              <label>About
                <textarea
                  type="text"
                  value={this.state.about}
                  onChange={this.update('about')} />
              </label>
              <div className="buttons">
                <input className="save-button" type="submit" value="Save Changes" />
              </div>
            </form>
        </div>
      </div>

      );
    }
  }
}

export default ProfileForm;
