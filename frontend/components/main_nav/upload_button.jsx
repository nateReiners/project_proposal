import React from 'react';
import {Link} from 'react-router';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.postPhoto = this.postPhoto.bind(this);
    this.upload = this.upload.bind(this);
  }


  postPhoto(photo) {
    let img = {img_url: photo.url, author_id: this.props.currentUserID};
    this.props.createPhoto(img);
  }

  upload(e) {
    e.preventDefault();
    const that = this;
    cloudinary.openUploadWidget(
        window.CLOUDINARY_OPTIONS,
        function(error, photos){
          if (error === null) {
            that.postPhoto(photos[0]);
          }
        }
    );
  }

  render() {
    return (
      <Link onClick={this.upload} className="upload-link">
        <div className="upload-icon"></div>
        <p>Upload</p>
      </Link>
    );
  }
}


export default UploadButton;
