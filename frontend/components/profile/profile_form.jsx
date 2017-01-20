import React from 'react';
import ProfileFormContainer from './profile_form_container';
import {hashHistory} from 'react-router';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: this.props.currentUser.username,
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      about: this.props.currentUser.about,
      email: this.props.currentUser.email,
      profile_img_url: this.props.currentUser.profile_img_url,
      cover_img_url: this.props.currentUser.cover_img_url,
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
    debugger
    if (newState.currentUser === this.props.currentUser) {

    } else {
      this.setState(newState.session.currentUser);
    }
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
    this.setState({profile_img_url: result[0].secure_url});
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

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const defaultCoverImg = "http://res.cloudinary.com/durooeqnc/image/upload/v1484895917/HkTMcmlMOUQ_h8aeth.jpg";
    const defaultProfileImg = "http://res.cloudinary.com/durooeqnc/image/upload/v1484895748/WmvM0_bpj2mj.png";

    let coverImgUrl;
      if (this.props.currentUser.cover_img_url) {
        coverImgUrl = this.props.currentUser.cover_img_url;
      } else {
        coverImgUrl = defaultCoverImg;
      }

    let profileImgUrl;
    if (this.props.currentUser.profile_img_url) {
      profileImgUrl = this.props.currentUser.profile_img_url;
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
              <label>Email
                <input
                  value={this.state.email}
                  onChange={this.update('email')} />
              </label>
              <label>About
                <textarea
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
