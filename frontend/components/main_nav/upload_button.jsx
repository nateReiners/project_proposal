import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.postPhoto = this.postPhoto.bind(this);
    this.upload = this.upload.bind(this);
  }


  postPhoto(photo) {
    debugger
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
      <button onClick={this.upload}>Upload Image</button>
    )
  }
}


export default UploadButton;
