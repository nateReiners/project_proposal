import React from 'react';
import ProfileFormContainer from './profile_form_container';

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
      cover_img_url: this.props.currentUser.cover_img_url
    };

    this.handleSubmit.bind(this);
    this.coverUploadWidget = this.coverUploadWidget.bind(this);
    this.profileUploadWidget = this.profileUploadWidget.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.currentUser.id);
  }

  componentWillReceiveProps(newState) {
    this.setState(newState.session.currentUser)
  }

  coverUploadWidget() {
  cloudinary.openUploadWidget({
    cloud_name: 'durooeqnc',
                 upload_preset: 'cover_photo' },
                 (error, result) => {
    this.setState({cover_photo_url: result[0].secure_url});
   });
 }

 profileUploadWidget() {
  cloudinary.openUploadWidget(
    { cloud_name: 'durooeqnc', upload_preset: 'profile'},
    (error, result) => {
    this.setState({profile_pic_url: result[0].secure_url});
   });
 }


  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const defaultCoverImg = "http://www.publicdomainpictures.net/pictures/30000/velka/evening-landscape-13530956185Aw.jpg";
    const defaultProfileImg = "https://support.plymouth.edu/kb_images/Yammer/default.jpeg";

    let coverImgUrl;
      if (this.props.currentUser.cover_img_url) {
        coverImgUrl = this.props.currentUser.cover_img_url;
      } else {
        coverImgUrl = defaultCoverImg;
      }

    let profileImgUrl;
    if (this.props.currentUser.profileImgUrl) {
      profileImgUrl = this.props.currentUser.profile_img_url;
    } else {
      profileImgUrl = defaultProfileImg;
    }


    return (
        <div className="profile-form">

          <div className="cover-photo" style={{backgroundImage: `url('${coverImgUrl}')`, height: "150px", width: "600px"}} >
            <div className="camera"></div>
            <div>Change your cover photo</div>
          </div>
          <div className="profile-photo"
                style={{backgroundImage: `url('${profileImgUrl}')`,
                height: "110px", width: "110px", margin: "-55px auto 0px auto"}} >
            <div className="camera"></div>
          </div>

          <div className="form-fields">

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
                value={this.state.about}
                onChange={this.update('about')} />
            </label>

            <div className="submitButton">
              <input type="submit" value="Save" />
            </div>

          </form>
          </div>
      </div>
  );
  }
}

export default ProfileForm;
